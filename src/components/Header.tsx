import Link from 'next/link';
import React from 'react';
import ConectWalletContainers from '../containers/ConectWalletContainers';
// const Header = () => {
//   return (
//     <>
//       <div className='flex'>
//         <Link href='/'>Home</Link>
//         <Link href='/about'>About</Link>
//         <ConectWalletContainers />
//       </div>
//     </>
//   );
// };

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Product', href: '#', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      <>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img className='block h-8 w-auto lg:hidden' src='/logoRYG.png' alt='Workflow' />
                <img className='hidden h-8 w-auto lg:block' src='/logoRYG.png' alt='Workflow' />
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined}>
                      <a
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <ConectWalletContainers />
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
