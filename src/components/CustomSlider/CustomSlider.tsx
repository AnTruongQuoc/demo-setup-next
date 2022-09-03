import React from 'react';
import Carousel from './Carousel';
import mockData from '__mocks__/banner-cards.json';
import Image from 'next/image';
import { CheckIcon, HeartIcon } from '@heroicons/react/24/solid';
import FireIcon from 'assets/icons/fire.svg';
import { classNames } from 'utils/classname';

// const CARDS = 3;
const MAX_VISIBILITY = 2;

interface ICardProps {
  countdown: number;
  vaultImageSrc: string;
  isLike: boolean;
  vaultName: string;
  vaultBSC: string;
  collectionName: string;
  isAuctionLive: boolean;
  vaultCreator: {
    name: string;
    avatar: string;
  };
  currentBid: {
    price: number;
    chain: string;
  };
  vaultVerify: boolean;
}

const Card = (props: ICardProps) => (
  <div className='card flex flex-col drop-shadow-md'>
    <div className='relative card--header w-full flex flex-row'>
      <Image src={props.vaultImageSrc} width='278px' height='278px' alt='NFTs vault' />

      <div className='absolute top-0 left-0 w-full flex flex-row justify-between items-center mt-3 px-2'>
        <div className='bg-white rounded-full h-8 w-fit px-3 flex flex-row justify-center items-center'>
          <FireIcon className='h-5 w-5' />
          <span className='text-black ml-1 font-semibold text-sm'>05 : 12 : 07 : 45</span>
        </div>

        <div className='flex flex-row justify-center items-center'>
          <div className='bg-white rounded-full h-8 w-8 flex flex-row justify-center items-center'>
            <CheckIcon className='h-5 w-5 fill-green-500' />
          </div>
          <div className='bg-white rounded-full h-8 w-8 ml-3 flex flex-row justify-center items-center'>
            <HeartIcon className={classNames('h-5 w-5', props.isLike ? 'fill-red-500' : 'fill-gray-700')} />
          </div>
        </div>
      </div>
    </div>
    <div className='card--body px-3 py-3 flex flex-1 w-full flex-row justify-start items-center'>
      <div className='content flex flex-col items-start w-full'>
        <span className='text-xl font-bold text-black'>{props.vaultName}</span>
        <div className='flex flex-row items-center mt-2'>
          <span className='h-5 w-5 rounded-full bg-gray-700 '></span>
          <span className='px-3 text-black font-medium'>{props.collectionName}</span>
          <span>
            <CheckIcon className='h-5 w-5 fill-green-500' />
          </span>
        </div>
        <div className='flex flex-row justify-between items-center mt-3 w-full'>
          <div className='rounded-full px-3 py-1 bg-gray-200 flex flex-row justify-around items-center'>
            <span className='text-gray-800 font-semibold'>Auction Live</span>
            <span className='h-2.5 w-2.5 bg-green-500 rounded-full ml-2'></span>
          </div>

          <div className='rounded-full px-3 py-1 bg-gray-200 flex flex-row justify-center items-center'>
            <span className='text-gray-800 font-semibold'>{props.vaultBSC}</span>
          </div>
        </div>
      </div>
    </div>
    <div className='card--footer bg-gray-800 px-3 py-6 rounded-b-md'>
      <div className='container flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-center items-center'>
          <Image src={props.vaultCreator.avatar} width='40px' height='40px' alt='Vault Creator Avatar' />
          <div className='flex flex-col justify-between items-start pl-2'>
            <span>Vault Creator</span>
            <span className='font-bold text-white'>{props.vaultCreator.name}</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span>Current Bid</span>
          <span className='font-bold text-right text-white'>
            {props.currentBid.price + ' ' + props.currentBid.chain}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const CustomSlider = () => {
  return (
    <div className='ryg-carousel h-fit w-full flex flex-row items-center justify-center'>
      <Carousel MAX_VISIBILITY={MAX_VISIBILITY}>
        {mockData.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
