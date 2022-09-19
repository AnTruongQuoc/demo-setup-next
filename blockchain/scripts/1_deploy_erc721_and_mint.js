// Library Imports
require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3(process.env.LOCALHOST_RPC);

// Data setup
const { erc721Abi } = require('../abi/erc721Abi');
const { erc721Bytecode } = require('../bytecode/erc721Bytecode');

//Contract object and account info
let nft_contract = new web3.eth.Contract(erc721Abi);
// let account = process.RYG_ACCOUNT_ADDRESS;
let account = process.env.LOCAL_ACCOUNT_ADDRESS; // Local address

// Function Parameter
let payload = {
  data: erc721Bytecode,
};

let parameter = {
  from: account,
  gas: 4712388,
  gasPrice: 100000000000,
};

async function deploy() {
  return await nft_contract
    .deploy(payload)
    .send(parameter, (err, transactionHash) => {
      console.log('Transaction Hash :', transactionHash);
    })
    .on('confirmation', () => {});
  // .then((newContractInstance) => {
  //   console.log('Deployed Contract Address : ', newContractInstance.options.address);
  // });
}

async function mint(contractAddress) {
  let nft_contract = new web3.eth.Contract(erc721Abi, contractAddress);
  nft_contract.methods.safeMint(account, process.env.SAMPLE_URI).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
  });
}

async function main() {
  console.log(await deploy());
  //   console.log('deployedContractAddress', await deployedContractAddress);
  //   await mint(deployedContractAddress);
}

main();
