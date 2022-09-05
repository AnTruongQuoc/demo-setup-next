import React from 'react';
import Logo from 'assets/icons/logo.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import TwitterIcon from 'assets/icons/twitter.svg';

function Footer() {
    const footerElements = [
        {
            title: 'Products',
            list: [
                {
                    name: 'Marketplace',
                    href: '/',
                },
                {
                    name: 'Fractional NFTs',
                    href: '/',
                },
                {
                    name: 'Loans Market',
                    href: '/',
                },
            ],
        },
        {
            title: 'Company',
            list: [
                {
                    name: 'Our Team',
                    href: '/',
                },
                {
                    name: 'About Us',
                    href: '/about',
                },
                {
                    name: 'Contact Us',
                    href: '/',
                },
                {
                    name: 'Career',
                    href: '/',
                },
            ],
        },
    ];
    return (
        <div className='flex justify-center items-center h-full w-full footer'>
            <div className='h-min mx-auto max-w-7xl footer-content'>
                <div className='w-full h-full'>
                    <div></div>
                    <div className='md:flex md:justify-between'>
                        <div className='mb-4 md:mb-0 w-2/5'>
                            <Logo className='block h-auto w-auto dark:text-white footer-logo' />
                            <p className='my-4 font-normal'>
                                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens
                                (NFTs). Buy, sell, and discover exclusive digital items.
                            </p>
                        </div>
                        <div className='w-3/5 h-full grid grid-cols-3 gap-3'>
                            {footerElements.map((item, idx) => (
                                <>
                                    <div key={idx}>
                                        <h2 className='mb-4 text-2xl font-bold text-white'>{item.title}</h2>
                                        <ul className='text-gray-600 dark:text-gray-400'>
                                            {item.list.map((li, index) => (
                                                <div key={index}>
                                                    <li className='mt-5' >
                                                        <a href={li.href} className='hover:underline-none text-base font-normal'>
                                                            {li.name}
                                                        </a>
                                                    </li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ))}
                            <div>
                                <h2 className='mb-4 text-2xl font-bold text-white dark:text-white'>Contact</h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                    <li className='mt-5'>
                                        <a href='/contact' className='hover:underline-none text-base font-normal leading-8'>
                                            2715 Ash Dr. San Jose, South Dakota 83475
                                        </a>
                                        <div className='flex mt-5 space-x-6 sm:justify-start sm:mt-5'>
                                            <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                                <FacebookIcon />
                                            </a>
                                            <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                                <TwitterIcon />
                                            </a>
                                            <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                                <InstagramIcon />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:items-center sm:justify-between mt-2'>
                    <span className='text-sm sm:text-center '>2021 All Right Reserved</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
