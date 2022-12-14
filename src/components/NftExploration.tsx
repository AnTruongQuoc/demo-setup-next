import React from 'react';

function CreateNFT() {
    return (
        <div className='mt-20 exploration-section flex justify-center items-center'>
            <div className='exploration-section-left'></div>
            <div className='exploration-section-right'></div>
            <div className='exploration-nft flex justify-center items-center flex-col h-min mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-white sm:text-5xl'>Create Your Own NFT!</h1>
                <p className='my-5 sm:my-10 leading-4 sm:leading-8 font-normal text-center'>
                    We have a large scale group to support each other in this game, Join us to get the news as soon <br></br> as
                    possible and follow our latest announcements!
                </p>
                <button>
                    <p className="font-semibold">Create Now</p>
                </button>
            </div>
        </div>
    );
}

export default CreateNFT;
