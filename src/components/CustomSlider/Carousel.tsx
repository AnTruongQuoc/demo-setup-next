import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { ReactNode, useState } from 'react';

interface ICarouselProps {
  children: ReactNode;
  MAX_VISIBILITY: number;
}

const Carousel = ({ children, MAX_VISIBILITY }: ICarouselProps) => {
  const [active, setActive] = useState(1);

  const handleMoveCarousel = (action: 'prev' | 'next') => {
    if (action === 'prev' && React.Children.count(children) > 1) {
      setActive((i) => i - 1);
    }

    if (action === 'next' && React.Children.count(children) > 1) {
      setActive((i) => i + 1);
    }
  };

  return (
    <div className='carousel'>
      {
        active > 0 &&
        <button className='nav left rounded-full drop-shadow-lg p-2 bg-white' onClick={() => handleMoveCarousel('prev')}>
          <ChevronLeftIcon className='h-6 w-6' />
        </button>
      }
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className='card-container'
          style={
            {
              '--active': i === active ? 1 : 0.6,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: 'block',
            } as React.CSSProperties
          }>
          {child}
        </div>
      ))}
      {
        active < React.Children.count(children) - 1 &&
        <button className='nav right rounded-full drop-shadow-lg p-2 bg-white' onClick={() => handleMoveCarousel('next')}>
          <ChevronRightIcon className='h-6 w-6' />
        </button>
      }
    </div>
  );
};
export default Carousel;
