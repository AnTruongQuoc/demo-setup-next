import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppsIcon from 'assets/icons/AppsIcon.svg';
import Logo from 'assets/icons/logo.svg';
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import ConnectWallet from './ConnectWallet';
import { useTheme } from 'next-themes';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const router = useRouter();
  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/', children: [] },
    {
      name: 'Product',
      href: '#',
      current: router.pathname === '/product',
      children: [
        { name: 'Marketplace', href: '/', current: false, children: [] },
        { name: 'Fractional NFT', href: '/', current: false, children: [] },
        { name: 'Loans Market', href: '/', current: false, children: [] },
      ],
    },
    { name: 'About Us', href: '/about', current: router.pathname === '/about', children: [] },
    { name: 'Contact Us', href: '#', current: router.pathname === '/contact', children: [] },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <button
        type='button'
        className='rounded-full dark:bg-gray-800 p-2 mr-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
        <span className='sr-only'>Chage theme</span>
        {currentTheme === 'dark' ? (
          <SunIcon className='w-6 h-6 rounded-full text-yellow-500' role='button' />
        ) : (
          <MoonIcon className='w-6 h-6 rounded-full text-black' role='button' />
        )}
      </button>
    );
  };

  return (
    <Disclosure as='nav' className='bg-white drop-shadow-md dark:bg-transparent'>
      <>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-24 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <Logo className='block h-auto w-auto dark:text-white header-logo' />
              </div>
              <div className='hidden sm:ml-6 sm:flex flex-row justify-center items-center'>
                <div className='flex-row space-x-4'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined}>
                      <div
                        className={classNames(
                          item.current ? 'current text-gray-900' : 'text-gray-400',
                          'font-semibold hover:text-primary px-3 py-2 rounded-md text-sm group relative inline-block cursor-pointer'
                        )}>
                        <div className='flex flex-row justify-center items-center'>
                          <div className={classNames(item.children.length > 0 ? 'pr-2' : '')}>{item.name}</div>
                          {item.children.length > 0 && <ChevronDownIcon className='h-4 w-4 flex m-0' />}
                        </div>
                        {item.current && <div className='border mx-1 rounded-sm border-primary'></div>}

                        {item.children.length > 0 && (
                          <div className='absolute hidden group-hover:flex pt-2 -ml-2'>
                            <div
                              style={{ padding: '1px' }}
                              className='rounded-lg text-gray-700 mt-4 dark:bg-gradient-to-b from-orange-400 to-red-900 drop-shadow-lg dark:shadow-dark'>
                              <div className='rounded-lg text-gray-700 py-2 px-3 flex flex-col w-44 bg-white dark:bg-black'>
                                {item.children?.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a className='px-5 py-3 hover:text-blue-500 dark:text-white dark:hover:text-orange-400 text-base'>
                                      {item.name}
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        <div className='absolute hidden bg-blue-500 mt-2 group-hover:block h-2 w-34'></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {renderThemeChanger()}
              <button
                type='button'
                className='rounded-full dark:bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600'>
                <span className='sr-only'>View notifications</span>
                {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
                <AppsIcon className='h-6 w-6 header-appicon' aria-hidden='true' />
              </button>

              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className='flex rounded-full h-10 bg-blue-500 px-4 py-2 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
                    <ConnectWallet />
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className='sm:hidden'>
          <div className='space-y-1 px-2 pt-2 pb-3'>
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as='a'
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}>
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
}
