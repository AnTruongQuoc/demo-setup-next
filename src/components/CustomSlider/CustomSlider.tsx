import React, { useState } from 'react';
import Carousel from './Carousel';


const CARDS = 3;
const MAX_VISIBILITY = 2;

interface ICardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: ICardProps) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);


const App = () => (
  <div className='app'>
    <Carousel MAX_VISIBILITY={MAX_VISIBILITY}>
      {[...new Array(CARDS)].map((_, i) => (
        <Card key={i} title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      ))}
    </Carousel>
  </div>
);

const CustomSlider = () => {
  return (
    <App />
  )
}

export default CustomSlider