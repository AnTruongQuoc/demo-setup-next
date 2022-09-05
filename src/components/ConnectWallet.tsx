import React, { Fragment, useState } from 'react';
import { connectWallet } from 'redux/actions';
import useRedux from 'hooks/useRedux';
import { Dialog, Transition } from '@headlessui/react';
import MetaMaskIcon from 'assets/icons/metamask.svg';
import { ethers } from 'ethers';
import { classNames } from 'utils/classname';

function ConnectWallet() {
  const { dispatch, appSelector } = useRedux();
  const { publicKey } = appSelector((state) => state.wallet);

  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);

  const handleConnectWallet = async (wallet: string) => {
    if (typeof window === 'undefined') return;

    if (window.ethereum && wallet === 'MetaMask') {
      setIsConnecting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider
        .send('eth_requestAccounts', [])
        .then((res) => {
          console.log(res)
          dispatch(connectWallet(res[0]))
        })
        .catch((err) => {
          console.log(err);
          setIsConnecting(false);
        });
    } else {
      window.open('https://metamask.io/download/', '_blank')?.focus();
    }
  };

  const handleCloseWalletModal = () => {
    setOpenWalletModal(false);
    setIsConnecting(false);
  };

  return (
    <>
      <div className='text-white' onClick={() => setOpenWalletModal(true)}>
        {publicKey || 'Connect Wallet'}
      </div>
      <Transition appear show={openWalletModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleCloseWalletModal}>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-3xl font-bold leading-6 text-gray-900'>
                    Connect Wallet
                  </Dialog.Title>
                  <div className='mt-6'>
                    <p className='text-base font-medium text-gray-900'>
                      Connect with one of the available wallet providers or create a new wallet.
                    </p>
                  </div>

                  <div className='my-8'>
                    <button
                      type='button'
                      disabled={isConnecting}
                      className={classNames(
                        isConnecting ? 'cursor-not-allowed' : '',
                        'w-full inline-flex py-4 justify-between items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-xl font-semibold text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      )}
                      onClick={() => handleConnectWallet('MetaMask')}>
                      <div className='flex flex-row items-center'>
                        {isConnecting && (
                          <svg
                            className='animate-spin h-5 w-5 mr-5 text-blue-600'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'>
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                          </svg>
                        )}
                        <MetaMaskIcon height='26px' width='26px' className='mr-4' />
                        MetaMask
                      </div>
                      <div className='text-sm text-white font-semibold rounded-md bg-blue-500 px-3 py-2'>Popular</div>
                    </button>
                  </div>

                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Connecting your wallet does not give RYGLabs access to your private keys or your funds.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ConnectWallet;
