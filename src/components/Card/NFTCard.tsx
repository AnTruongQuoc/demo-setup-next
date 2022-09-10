import React from 'react';
import Image from 'next/image';
import { classNames } from 'utils/classname';
import { CheckIcon, HeartIcon } from '@heroicons/react/24/solid';
import FireIcon from 'assets/icons/fire.svg';
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
  pos?: string;
}

const NFTCard = (props: ICardProps) => (
  <div className={`${!!props?.pos && 'item level' + props?.pos} card flex flex-col drop-shadow-md`} id={`${!!props?.pos && 'level' + props?.pos}`}>
    <div className='relative card--header w-full flex flex-row p-3'>
      <Image src={props.vaultImageSrc} width='254px' height='254px' alt='NFTs vault' className='rounded-lg' />

      <div className='absolute top-0 left-0 w-full flex flex-row justify-end items-center mt-4 px-4'>
        <div className='flex flex-row justify-center items-center'>
          <div className='bg-white rounded-full h-8 w-8 flex flex-row justify-center items-center'>
            <CheckIcon className='h-5 w-5 fill-green-500' />
          </div>
          <div className='bg-white rounded-full h-8 w-8 ml-2 flex flex-row justify-center items-center'>
            <HeartIcon className={classNames('h-5 w-5', props.isLike ? 'fill-red-500' : 'fill-gray-700')} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 left-0 w-full flex flex-row justify-center items-center mt-4 px-4'>
        <div className='bg-white rounded-full h-8 w-fit px-3 flex flex-row justify-center items-center'>
          <FireIcon className='h-5 w-5' />
          <span className='text-black ml-1 font-semibold text-sm'>05 : 12 : 07 : 45</span>
        </div>
      </div>
    </div>
    <div className='card--body px-3 pb-3 flex flex-1 w-full flex-row justify-start items-center'>
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
export default NFTCard;
