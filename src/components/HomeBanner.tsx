// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ConnectWallet from './ConnectWallet';
import useRedux from 'hooks/useRedux';
import CustomSlider from './CustomSlider/CustomSlider';
import { erc721Abi } from '../../blockchain/abi/erc721Abi';
import { erc721Bytecode } from '../../blockchain/bytecode/erc721Bytecode';
import { settingsAbi } from '../../blockchain/abi/settingsAbi';
import { settingsBytecode } from '../../blockchain/bytecode/settingsBytecode';
import { vaultFactoryAbi } from '../../blockchain/abi/vaultFactoryAbi';
import { vaultFactoryBytecode } from '../../blockchain/bytecode/vaultFactoryBytecode';
import { vaultAbi } from '../../blockchain/abi/vaultAbi';
import Web3 from 'web3';
const HomeBanner = () => {
  const { dispatch, appSelector } = useRedux();

  const { walletAddress } = appSelector((state) => state.wallet);

  // Choose 1 of 3
  // 1. Localhost
  // const web3 = new Web3(process.env.NEXT_PUBLIC_LOCALHOST_RPC);
  // web3.eth.defaultAccount = process.env.NEXT_PUBLIC_LOCAL_ACCOUNT_ADDRESS;
  // web3.eth.accounts.wallet.add(process.env.NEXT_PUBLIC_LOCAL_PRIVATE_KEY);

  // 2. Mumbai
  // const web3 = new Web3(process.env.NEXT_PUBLIC_MUMBAI_RPC);
  // web3.eth.defaultAccount = process.env.NEXT_PUBLIC_RYG_ACCOUNT_ADDRESS;
  // web3.eth.accounts.wallet.add(process.env.NEXT_PUBLIC_RYG_PRIVATE_KEY);

  //3. Current wallet
  const web3 = new Web3(typeof window !== 'undefined' && window.ethereum);
  web3.eth.defaultAccount = walletAddress;

  const parameter = {
    from: web3.eth.defaultAccount,
    gasLimit: 6721975,
    gasPrice: web3?.utils?.toWei('1', 'gwei'),
  };
  // Init contract address
  var NFT_CONTRACT_ADDRESS: any;
  var SETTINGS_CONTRACT_ADDRESS: any;
  var VAULT_FACTORY_CONTRACT_ADDRESS: any;
  var VAULT_CONTRACT_ADDRESS: any;

  // Init contract base instances
  var nft_contract = web3.eth && new web3.eth.Contract(erc721Abi);
  var settings_contract = web3.eth && new web3.eth.Contract(settingsAbi);
  var vault_factory_contract = web3.eth && new web3.eth.Contract(vaultFactoryAbi);
  var vault_contract = web3.eth && new web3.eth.Contract(vaultAbi);

  // Init token id
  var tokenId = 0;

  // Contract Deploy Payload
  const erc721Payload = {
    data: erc721Bytecode,
  };

  const settingsPayload = {
    data: settingsBytecode,
  };
  const main = async () => {
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
    nft_contract = web3 && new web3.eth.Contract(erc721Abi, NFT_CONTRACT_ADDRESS);
    let _mintTo = web3?.eth.defaultAccount;
    let _uri = 'ipfs://Qmdc7MwJ9aehkKZmooFdFiGQvtnvjgikm4XumqeCKL8dCw';
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
    let _supply = '12345678900000'; // uint256;
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
  };

  return (
    <div style={{ height: '650px' }} className='w-full flex sm:flex-row flex-wrap'>
      <div className='sm:w-1/2 w-full flex flex-col items-center sm:items-start justify-center h-full sm:pr-6 '>
        <div className='content pb-3'>
          <h2 className='font-semibold text-4xl leadding-10 sm:text-banner sm:leading-banner'>
            Discover a New <br></br> Era of NFTs
          </h2>
          <p className='py-8'>
            DAO Platform is the primier marketplace for NFT, which are digital items you can truly own. Digital items
            have existed for a long time, but never like this.
          </p>
        </div>
        <div className='actions flex flex-row justify-start items-center'>
          {!walletAddress && (
            <button className='hidden sm:flex rounded-full h-10 bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
              <ConnectWallet />
            </button>
          )}

          <button
            onClick={main}
            className='flex rounded-full h-10 bg-none border-2 border-blue-500 hover:bg-blue-500 px-4 py-2 hover:text-white text-blue-500 dark:bg-none dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
            {/* Explore Live Vaults */}
            Create Vault/NFT
          </button>
        </div>
      </div>
      <div className='w-full sm:w-1/2 sm:flex flex-row items-center justify-center h-full hidden'>
        <CustomSlider />
      </div>
    </div>
  );
};

export default HomeBanner;
