import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import NFTCard from 'components/Card/NFTCard';
import React, { ReactNode, useState } from 'react';
import mockData from '__mocks__/banner-cards.json';
interface ICarouselProps {
  children?: ReactNode;
  MAX_VISIBILITY: number;
}

const Carousel = ({ children, MAX_VISIBILITY }: ICarouselProps) => {
  const keys = Array.from(Array(mockData.length).keys());
  const [items, setItems] = React.useState(keys);

  const bigLength = items.length;
  const handleMoveCarousel = (action: 'prev' | 'next') => {
    if (action === 'next') {
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + 1) % bigLength]);
      });
    }
    if (action === 'prev') {
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - 1 + bigLength) % bigLength]);
      });
    }
  };

  return (
    <div className='carousel' id='carousel'>
      <button className='nav left rounded-full drop-shadow-lg p-2 bg-white' onClick={() => handleMoveCarousel('prev')}>
        <ChevronLeftIcon className='h-6 w-6' />
      </button>
      {items.map((pos, i) => (
        <NFTCard key={i} {...mockData[i]} pos={pos.toString()} />
      ))}
      <button className='nav right rounded-full drop-shadow-lg p-2 bg-white' onClick={() => handleMoveCarousel('next')}>
        <ChevronRightIcon className='h-6 w-6' />
      </button>
    </div>
  );
};
export default Carousel;
