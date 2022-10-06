// @ts-nocheck
import React, { useState, Fragment } from 'react';
import ConnectWallet from './ConnectWallet';
import useRedux from 'hooks/useRedux';
import CustomSlider from './CustomSlider/CustomSlider';
import { Dialog, Transition } from '@headlessui/react';
import { cloneDeep } from 'lodash';

import { erc721Abi } from '../../blockchain/abi/erc721Abi';
import { erc721Bytecode } from '../../blockchain/bytecode/erc721Bytecode';
import { settingsAbi } from '../../blockchain/abi/settingsAbi';
import { settingsBytecode } from '../../blockchain/bytecode/settingsBytecode';
import { vaultFactoryAbi } from '../../blockchain/abi/vaultFactoryAbi';
import { vaultFactoryBytecode } from '../../blockchain/bytecode/vaultFactoryBytecode';
import { vaultAbi } from '../../blockchain/abi/vaultAbi';
import Web3 from 'web3';

const HomeBanner = () => {
  const { appSelector } = useRedux();

  const { walletAddress } = appSelector((state) => state.wallet);
  const [openCreateVaultModal, setOpenCreateVaultModal] = useState<boolean>(false);
  const [createVaultProgress, setCreateVaultProgress] = useState([
    {
      step: 1,
      title: 'Deploy NFT contract',
      status: 'active',
      log: null,
    },
    {
      step: 2,
      title: 'Mint 01 NFT to your wallet',
      status: 'todo',
      log: null,
    },
    {
      step: 3,
      title: 'Deploy Setting Contract',
      status: 'todo',
      log: null,
    },
    {
      step: 4,
      title: 'Deploy Vault Factory Contract',
      status: 'todo',
      log: null,
    },
    {
      step: 5,
      title: 'Approve for Vault Factory Contract to use your NFTs',
      status: 'todo',
      log: null,
    },
    {
      step: 6,
      title:
        'Fraction your approved NFT via mint() function of Vault Factory. Vault Factory will transfer your NFT to new minted Vault, then that VaultFactory will mint ERC20 tokens (NFT fractions) to your wallet',
      status: 'todo',
      log: null,
    },
    {
      step: 7,
      title:
        'Check wallet for NFT & ERC20 token',
      status: 'todo',
      log: null,
    },
  ]);

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
  let NFT_CONTRACT_ADDRESS: any;
  let SETTINGS_CONTRACT_ADDRESS: any;
  let VAULT_FACTORY_CONTRACT_ADDRESS: any;
  let VAULT_CONTRACT_ADDRESS: any;

  // Init contract base instances
  let nft_contract = web3.eth && new web3.eth.Contract(erc721Abi);
  let settings_contract = web3.eth && new web3.eth.Contract(settingsAbi);
  let vault_factory_contract = web3.eth && new web3.eth.Contract(vaultFactoryAbi);
  let vault_contract = web3.eth && new web3.eth.Contract(vaultAbi);

  // Init token id
  let tokenId = 0;

  // Contract Deploy Payload
  const erc721Payload = {
    data: erc721Bytecode,
  };

  const settingsPayload = {
    data: settingsBytecode,
  };
  const main = async () => {
    let progress = [...createVaultProgress];
    // 1. Deploy NFT contract
    console.log('1. Deploy NFT contract');
    await nft_contract
      .deploy(erc721Payload)
      .send(parameter)
      .on('receipt', (receipt) => {
        console.log('Deployed NFT Contract Transaction Hash :', receipt.transactionHash);
        console.log('Deployed NFT Contract Address : ', receipt.contractAddress);
        NFT_CONTRACT_ADDRESS = receipt.contractAddress;
        progress[0].log = `Deployed NFT Contract Transaction Hash : ${receipt.transactionHash} \n Deployed NFT Contract Address : ${receipt.contractAddress}`;
        progress[0].status = 'done';
        progress[1].status = 'active';
      });

    
    setCreateVaultProgress(cloneDeep(progress));

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
        progress[1].log = `Mint Transaction Hash : ${receipt.transactionHash}`;
        progress[1].status = 'done';
        progress[2].status = 'active';
      });
    setCreateVaultProgress(cloneDeep(progress));

    // 3. Deploy Setting Contract
    console.log('3. Deploy Setting Contract');
    await settings_contract
      .deploy(settingsPayload)
      .send(parameter)
      .on('receipt', (receipt) => {
        console.log('Deployed Settings Contract Transaction Hash :', receipt.transactionHash);
        console.log('Deployed Settings Contract Address : ', receipt.contractAddress);
        SETTINGS_CONTRACT_ADDRESS = receipt.contractAddress;

        progress[2].log = `Deployed Settings Contract Transaction Hash : ${receipt.transactionHash} \n Deployed Settings Contract Address : ${receipt.contractAddress}`;
        progress[2].status = 'done';
        progress[3].status = 'active';
      });
    setCreateVaultProgress(cloneDeep(progress));

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

        progress[3].log = `Deployed Vault Factory Contract Transaction Hash : ${receipt.transactionHash} \n Deployed Vault Factory Contract Address : ${receipt.contractAddress}`;
        progress[3].status = 'done';
        progress[4].status = 'active';
      });
    setCreateVaultProgress(cloneDeep(progress));

    // 5. Approve for Vault Factory Contract to use your NFTs
    console.log(' 5. Approve for Vault Factory Contract');
    let _to = VAULT_FACTORY_CONTRACT_ADDRESS;
    let _approveTokenId = tokenId;
    await nft_contract.methods
      .approve(_to, _approveTokenId)
      .send(parameter)
      .on('receipt', (receipt) => {
        console.log('Approve Transaction Hash :', receipt.transactionHash);

        progress[4].log = `Approve Transaction Hash : ${receipt.transactionHash}`;
        progress[4].status = 'done';
        progress[5].status = 'active';
      });
    setCreateVaultProgress(cloneDeep(progress));

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

        progress[5].log = `NFT_CONTRACT_ADDRESS : ${NFT_CONTRACT_ADDRESS}
        \n SETTINGS_CONTRACT_ADDRESS : ${SETTINGS_CONTRACT_ADDRESS}
        \n VAULT_FACTORY_CONTRACT_ADDRESS : ${VAULT_FACTORY_CONTRACT_ADDRESS}
        \n VAULT_CONTRACT_ADDRESS : ${VAULT_CONTRACT_ADDRESS}`;
        progress[5].status = 'done';
        progress[6].status = 'active';
      });
    setCreateVaultProgress(cloneDeep(progress));
    // // 7. Check wallet for NFT & ERC20 token
    nft_contract = new web3.eth.Contract(erc721Abi, NFT_CONTRACT_ADDRESS);
    vault_contract = new web3.eth.Contract(vaultAbi, VAULT_CONTRACT_ADDRESS);

    const nft_token_wallet_balance = await nft_contract.methods.balanceOf(web3.eth.defaultAccount).call();
    const erc20_fraction_token_wallet_balance = await vault_contract.methods.balanceOf(web3.eth.defaultAccount).call();
    console.log('NFT token balance of wallet: ', nft_token_wallet_balance);
    console.log(
      'ERC20 Fractions token balance of wallet: ',
      erc20_fraction_token_wallet_balance
    );
    progress[6].log = `NFT token balance of wallet: ${nft_token_wallet_balance}
    \n ERC20 Fractions token balance of wallet: ${erc20_fraction_token_wallet_balance}`
    progress[6].status = 'done';
    setCreateVaultProgress(cloneDeep(progress));
  };

  const handleStartCreatVault = () => {
    setOpenCreateVaultModal(true);
    main();
  };

  return (
    <>
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

            {walletAddress && (
              <button
                onClick={handleStartCreatVault}
                className='flex rounded-full h-10 bg-none border-2 border-blue-500 hover:bg-blue-500 px-4 py-2 hover:text-white text-blue-500 dark:bg-none dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
                {/* Explore Live Vaults */}
                Create Vault/NFT
              </button>
            )}
          </div>
        </div>
        <div className='w-full sm:w-1/2 sm:flex flex-row items-center justify-center h-full hidden'>
          <CustomSlider />
        </div>
      </div>

      <Transition appear show={openCreateVaultModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={() => setOpenCreateVaultModal(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-3xl font-bold leading-6 text-gray-900'>
                    Demo Create NFT and Vault
                  </Dialog.Title>
                  <div className='mt-6'>
                    <p className='text-base font-medium text-gray-900'>
                      Demonstate step by step from minting a NFT to create a Vault.
                    </p>
                  </div>

                  <div className='my-8'>
                    {createVaultProgress.map((progress, i) => (
                      <div key={i} className={`bo-step-${progress.status} flex flex-col`}>
                        <span className='spinner-grow'></span>
                        <span>{`STEP ${progress.step}: ${progress.title}`}</span>
                        <span className='text-xs'>{progress.log}</span>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default HomeBanner;
