import React from 'react';
import MonitorIcon from 'assets/icons/monitor.svg';
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
    <div className='align-center w-full my-20 '>
      <h3 className='text-center font-bold sm:text-5xl sm:leading-section text-3xl leading-7'>
        Create, Fractionalize <br />
        and Lend your NFTs
      </h3>
      <div className='attraction-list flex flex-wrap justify-between mt-4 notphont:mt-14 sm:flex-nowrap'>
        {attractionList.map((attraction, index) => (
          <div key={index} className='flex-col justify-center w-96 h-96 rounded-2xl shadow-attraction dark:bg-zinc-900 mb-5'>
            <div className='mt-14 flex justify-center'>
              <div className='flex justify-center items-center rounded-full bg-primary dark:bg-red-500 w-20 h-20'>
                <MonitorIcon className='monitor-icon' />
              </div>
            </div>
            <p className='mt-12 font-bold text-2xl text-center'>{attraction.title}</p>
            <p className='mt-6 mx-8 text-center text-sm font'>{attraction.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Attraction;
