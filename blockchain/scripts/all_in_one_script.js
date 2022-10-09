// Library Imports
require('dotenv').config();
// Data setup
const { erc721Abi } = require('../abi/erc721Abi');
const { erc721Bytecode } = require('../bytecode/erc721Bytecode');
const { settingsAbi } = require('../abi/settingsAbi');
const { settingsBytecode } = require('../bytecode/settingsBytecode');
const { vaultFactoryAbi } = require('../abi/vaultFactoryAbi');
const { vaultFactoryBytecode } = require('../bytecode/vaultFactoryBytecode');
// const { vaultAbi_transfer } = require('../abi/event/vaultAbi_transfer');
const { vaultAbi } = require('../abi/vaultAbi');

const Web3 = require('web3');
// Chose 1 between 2
// 1. Localhost
const web3 = new Web3(process.env.LOCALHOST_RPC);
web3.eth.defaultAccount = process.env.LOCAL_ACCOUNT_ADDRESS;
web3.eth.accounts.wallet.add(process.env.LOCAL_PRIVATE_KEY);
// 2. Mumbai
// const web3 = new Web3(process.env.MUMBAI_RPC);
// web3.eth.defaultAccount = process.env.RYG_ACCOUNT_ADDRESS;
// web3.eth.accounts.wallet.add(process.env.RYG_PRIVATE_KEY);

console.log('web3.eth.defaultAccount', web3.eth.defaultAccount);
// Transaction Parameter
const parameter = {
  from: web3.eth.defaultAccount,
  gasLimit: 6721975,
  gasPrice: web3.utils.toWei('1', 'gwei'),
};

// Init contract address
var NFT_CONTRACT_ADDRESS;
var SETTINGS_CONTRACT_ADDRESS;
var VAULT_FACTORY_CONTRACT_ADDRESS;
var VAULT_CONTRACT_ADDRESS;

// Init contract base instances
var nft_contract = new web3.eth.Contract(erc721Abi);
var settings_contract = new web3.eth.Contract(settingsAbi);
var vault_factory_contract = new web3.eth.Contract(vaultFactoryAbi);
var vault_contract = new web3.eth.Contract(vaultAbi);

// Init token id
var tokenId = 0;

// Contract Deploy Payload
const erc721Payload = {
  data: erc721Bytecode,
};

const settingsPayload = {
  data: settingsBytecode,
};

// Comment and un-comment per step with right param to run (or run at once)
async function main() {
  // 1. Deploy NFT contract
  console.log('1. Deploy NFT contract');
  await nft_contract
    .deploy(erc721Payload)
    .send(parameter)
    .on('receipt', (receipt) => {
      console.log('Deployed NFT Contract Transaction Hash :', receipt.transactionHash);
      console.log('Deployed NFT Contract Address : ', receipt.contractAddress);
      NFT_CONTRACT_ADDRESS = receipt.contractAddress;
    });
  // 2. Mint 01 NFT to your wallet
  console.log('2. Mint NFT to your wallet');
  nft_contract = new web3.eth.Contract(erc721Abi, NFT_CONTRACT_ADDRESS);
  let _mintTo = web3.eth.defaultAccount;
  let _uri = process.env.SAMPLE_URI;
  await nft_contract.methods
    .safeMint(_mintTo, _uri)
    .send(parameter)
    .on('receipt', (receipt) => {
      console.log('Mint Transaction Hash :', receipt.transactionHash);
    });
  // 3. Deploy Setting Contract
  console.log('3. Deploy Setting Contract');
  await settings_contract
    .deploy(settingsPayload)
    .send(parameter)
    .on('receipt', (receipt) => {
      console.log('Deployed Settings Contract Transaction Hash :', receipt.transactionHash);
      console.log('Deployed Settings Contract Address : ', receipt.contractAddress);
      SETTINGS_CONTRACT_ADDRESS = receipt.contractAddress;
    });
  // 4. Deploy Vault Factory Contract
  console.log('4. Deploy Vault Factory Contract');
  const vaultFactoryPayload = {
    data: vaultFactoryBytecode,
    arguments: [SETTINGS_CONTRACT_ADDRESS],
  };
  await vault_factory_contract
    .deploy(vaultFactoryPayload)
    .send(parameter)
    .on('receipt', (receipt) => {
      console.log('Deployed Vault Factory Contract Transaction Hash :', receipt.transactionHash);
      console.log('Deployed Vault Factory Contract Address : ', receipt.contractAddress);
      VAULT_FACTORY_CONTRACT_ADDRESS = receipt.contractAddress;
    });
  // 5. Approve for Vault Factory Contract to use your NFTs
  console.log(' 5. Approve for Vault Factory Contract');
  let _to = VAULT_FACTORY_CONTRACT_ADDRESS;
  let _approveTokenId = tokenId;
  await nft_contract.methods
    .approve(_to, _approveTokenId)
    .send(parameter)
    .on('receipt', (receipt) => {
      console.log('Approve Transaction Hash :', receipt.transactionHash);
    });
  // // 6. Fraction your approved NFT via mint() function of Vault Factory. Vault Factory will transfer your NFT to new minted Vault, then that VaultFactory will mint ERC20 tokens (NFT fractions) to your wallet
  console.log('6. Fraction your NFT via Vault Factory');
  vault_factory_contract = new web3.eth.Contract(vaultFactoryAbi, VAULT_FACTORY_CONTRACT_ADDRESS);
  let _name = 'BAYC ERC20 Token'; // string;
  let _symbol = 'BET'; // string;
  let _token = NFT_CONTRACT_ADDRESS; // address;
  let _mintTokenId = tokenId; // uint256;
  let _supply = '1000000000000000000000'; // uint256;
  let _listPrice = '98765432100000'; // uint256;
  let _fee = '56473829100000'; // uint256;
  await vault_factory_contract.methods
    .mint(_name, _symbol, _token, _mintTokenId, _supply, _listPrice, _fee)
    .send(parameter)
    .on('receipt', async (receipt) => {
      console.log('Vault Mint Transaction Hash :', receipt.transactionHash);
      VAULT_CONTRACT_ADDRESS = receipt.events['Mint'].returnValues['vault'];

      console.log('NFT_CONTRACT_ADDRESS', NFT_CONTRACT_ADDRESS);
      console.log('SETTINGS_CONTRACT_ADDRESS', SETTINGS_CONTRACT_ADDRESS);
      console.log('VAULT_FACTORY_CONTRACT_ADDRESS', VAULT_FACTORY_CONTRACT_ADDRESS);
      console.log('VAULT_CONTRACT_ADDRESS', VAULT_CONTRACT_ADDRESS);
    });
  // // 7. Check wallet for NFT & ERC20 token
  nft_contract = new web3.eth.Contract(erc721Abi, NFT_CONTRACT_ADDRESS);
  vault_contract = new web3.eth.Contract(vaultAbi, VAULT_CONTRACT_ADDRESS);
  console.log('NFT token balance of wallet: ', await nft_contract.methods.balanceOf(web3.eth.defaultAccount).call());
  console.log(
    'ERC20 Fractions token balance of wallet: ',
    await vault_contract.methods.balanceOf(web3.eth.defaultAccount).call()
  );
  console.log('Vault Name: ', await vault_contract.methods.name().call());

  console.log('Token Symbol: ', await vault_contract.methods.symbol().call());
}

main();
