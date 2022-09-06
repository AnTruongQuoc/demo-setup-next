import React from 'react';
import mockLiveAuction from '../__mocks__/feature-collections-card.json';
import CollectionCard from './Card/CollectionCard';
const FeatureCollections = () => {
  return (
    <>
      <div className='flex justify-between w-full mt-20 items-center'>
        <h3 className='text-center font-bold text-5xl leading-section'>FeatureCollections</h3>
        <button className='font-semibold border-2 border-primary hover:bg-primary hover:text-white rounded-full px-11 py-3 h-fit'>
          View More
        </button>
      </div>
      <div className='flex justify-between w-full mt-14'>
        {mockLiveAuction.map((item, i: number) => (
          <CollectionCard key={i} {...item} />
        ))}
      </div>
    </>
  );
};
export default FeatureCollections;
