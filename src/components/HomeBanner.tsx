import React from 'react'
import ConnectWallet from './ConnectWallet'
import CustomSlider from './CustomSlider/CustomSlider'

const HomeBanner = () => {
    return (
        <div style={{ height: '650px' }} className='w-full flex flex-row'>
            <div className='w-1/2 flex flex-col items-start justify-center h-full pr-6'>
                <div className='content pb-3'>
                    <h2 className='font-semibold text-banner leading-banner'>Dicover a New <br></br> Era of NFTs</h2>
                    <p className='py-8'>DAO Platform is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
                </div>
                <div className='actions flex flex-row justify-start items-center'>
                    <button className='flex rounded-full h-10 bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
                        <ConnectWallet />
                    </button>

                    <button className='flex rounded-full h-10 bg-none border-2 border-blue-500 hover:bg-blue-500 px-4 py-2 text-blue-500 dark:bg-none dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex-row justify-center items-center font-medium'>
                        Explore Live Vaults
                    </button>
                </div>
            </div>
            <div className='w-1/2 flex flex-row items-center justify-center h-full'>
                <CustomSlider />
            </div>
        </div>
    )
}

export default HomeBanner