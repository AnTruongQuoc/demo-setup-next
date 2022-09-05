import React from 'react';
import Carousel from './Carousel';
import mockData from '__mocks__/banner-cards.json';
import Image from 'next/image';
import { CheckIcon, HeartIcon } from '@heroicons/react/24/solid';
import FireIcon from 'assets/icons/fire.svg';
import { classNames } from 'utils/classname';
import NFTCard from 'components/Card/NFTCard';

// const CARDS = 3;
const MAX_VISIBILITY = 2;



const CustomSlider = () => {
  return (
    <div className='ryg-carousel h-fit w-full flex flex-row items-center justify-center'>
      <Carousel MAX_VISIBILITY={MAX_VISIBILITY}>
        {mockData.map((data, i) => (
          <NFTCard key={i} {...data} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
