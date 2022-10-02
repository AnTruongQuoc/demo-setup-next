import React from 'react';
import mockLiveAuction from '../__mocks__/live-autions-cards.json';
import NFTCard from './Card/NFTCard';
import Slider from 'react-slick';
const LiveAuctions = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: 300,
  };
  return (
    <>
      <div className='flex justify-between w-full mt-10 xs:mt-20 items-center'>
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
      <div>
        <Slider {...settings}>
          {/* {mockLiveAuction.map((item, i: number) => (
          <NFTCard key={i} {...item} />
        ))} */}
          <div style={{ width: '50px' }}>1</div>
          <div style={{ width: '50px' }}>1</div>
          <div style={{ width: '50px' }}>1</div>
          <div style={{ width: '50px' }}>1</div>
        </Slider>
      </div>
    </>
  );
};
export default LiveAuctions;
