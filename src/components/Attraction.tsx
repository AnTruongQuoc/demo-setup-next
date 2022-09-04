import React from 'react';
const Attraction = () => {
  const attractionList = [
    {
      title: 'Create Your Collections',
      text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.',
    },
    {
      title: 'Fractionalize NFTs',
      text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.',
    },
    {
      title: 'Lending Your NFTs',
      text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.',
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <h3 className='flex-1 font-bold text-5xl leading-section self-center'>
        Create, Fractionalize <br />
        and Lend your NFTs
      </h3>
      <div className='flex-row justify-between'>
        {attractionList.map((attraction) => (
          <>avc</>
        ))}
      </div>
    </div>
  );
};
export default Attraction;
