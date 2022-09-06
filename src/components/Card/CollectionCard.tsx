import React from 'react';
import Image from 'next/image';
import ETHIcon from 'assets/icons/ethIcon.svg';
import { numberFormatter } from 'utils/numberFormatter';
interface ICardProps {
  collectionName: string;
  collectionAvatar: string;
  collectionCover: string;
  vaults: number;
  totalPrice: number;
}
//now is same with NFTCard, will update later
const CollectionCard = (props: ICardProps) => {
  return (
    <div className='collection-card flex flex-col drop-shadow-md p-2 shadow-attraction'>
      <div className='relative'>
        <Image src={props.collectionCover} alt='collection cover' width='266' height='225' className='rounded-lg' />
        <div className='flex justify-center items-center absolute bottom-0 right-1/2 translate-y-2/4 translate-x-2/4 p-px rounded-full bg-white w-[6.5rem] h-[6.5rem]'>
          <Image
            src={props.collectionAvatar}
            alt='collection avatar'
            width='104'
            height='104'
            className='rounded-full'
          />
        </div>
      </div>
      <p className='font-bold text-2xl text-center mt-16'>{props?.collectionName}</p>
      <div className='flex items-center justify-between px-8 mt-3'>
        <div className='flex'>
          <ETHIcon className='eth-icon' />
          <span className='font-bold ml-4'>{numberFormatter(props?.totalPrice)}</span>
        </div>
        <div className='font-bold'>{props.vaults} Vaults</div>
      </div>
    </div>
  );
};

export default CollectionCard;
