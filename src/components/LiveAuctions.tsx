import React from 'react';
import mockLiveAuction from '../__mocks__/live-autions-cards.json';
import NFTCard from './Card/NFTCard';
const LiveAuctions = () => {
  return (
    <>
      <div className='flex justify-between w-full mt-20 items-center'>
        <h3 className='text-center text-2xl font-bold sm:text-5xl sm:leading-section'>Live Auctions</h3>
        <button className='font-semibold border-2 border-primary hover:bg-primary hover:text-white rounded-full px-6 sm:px-11 py-2 sm:py-3 h-fit'>
          View More
        </button>
      </div>
      <div className='flex justify-between w-full mt-14 flex-wrap sm:flex:nowrap'>
        {mockLiveAuction.map((item, i: number) => (
          <NFTCard key={i} {...item} />
        ))}
      </div>
    </>
  );
};
export default LiveAuctions;
