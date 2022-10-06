import React, { Fragment, useState } from 'react';
import { connectWallet } from 'redux/actions';
import useRedux from 'hooks/useRedux';
import { Dialog, Transition, Menu } from '@headlessui/react';
import MetaMaskIcon from 'assets/icons/metamask.svg';
import WalletIcon from 'assets/icons/wallet.svg';
import { ethers } from 'ethers';
import { classNames } from 'utils/classname';
import { ChevronDownIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid';

function ConnectWallet() {
  function EditInactiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 13V16H7L16 7L13 4L4 13Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function EditActiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 13V16H7L16 7L13 4L4 13Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
      </svg>
    );
  }

  function DuplicateInactiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 4H12V12H4V4Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
        <path d='M8 8H16V16H8V8Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function DuplicateActiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 4H12V12H4V4Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M8 8H16V16H8V8Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
      </svg>
    );
  }

  function ArchiveInactiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='5' y='8' width='10' height='8' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
        <rect x='4' y='4' width='12' height='4' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
        <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function ArchiveActiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='5' y='8' width='10' height='8' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
        <rect x='4' y='4' width='12' height='4' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function MoveInactiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 4H16V10' stroke='#A78BFA' strokeWidth='2' />
        <path d='M16 4L8 12' stroke='#A78BFA' strokeWidth='2' />
        <path d='M8 6H4V16H14V12' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function MoveActiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 4H16V10' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M16 4L8 12' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M8 6H4V16H14V12' stroke='#C4B5FD' strokeWidth='2' />
      </svg>
    );
  }

  function DeleteInactiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='5' y='6' width='10' height='10' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
        <path d='M3 6H17' stroke='#A78BFA' strokeWidth='2' />
        <path d='M8 6V4H12V6' stroke='#A78BFA' strokeWidth='2' />
      </svg>
    );
  }

  function DeleteActiveIcon(props: any) {
    return (
      <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='5' y='6' width='10' height='10' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M3 6H17' stroke='#C4B5FD' strokeWidth='2' />
        <path d='M8 6V4H12V6' stroke='#C4B5FD' strokeWidth='2' />
      </svg>
    );
  }
  const { dispatch, appSelector } = useRedux();
  const { walletAddress } = appSelector((state) => state.wallet);

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
          console.log(res);
          dispatch(connectWallet(res[0]));
          setTimeout(() => {
            handleCloseWalletModal();
          }, 1000);
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
      {walletAddress ? (
        <Menu>
          <Menu.Button className='inline-flex w-full justify-center bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <WalletIcon className='ml-2 -mr-1 h-5 w-5' aria-hidden='true' />
            <ChevronDownIcon className='ml-2 -mr-1 h-5 w-5 ' aria-hidden='true' />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-0 z-50 top-9 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      <WalletIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                      Wallet
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      <ArrowLeftOnRectangleIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                      Disconnect
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className='text-white' onClick={() => setOpenWalletModal(true)}>
          Connect Wallet
        </div>
      )}

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
