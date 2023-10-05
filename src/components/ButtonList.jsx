import React from 'react';
import Button from './Button';

const list = [
  'All',
  'Gaming',
  'Songs',
  'Live',
  'soccer',
  'Cricket',
  'Cooking',
  'Music',
  'painting',
];

const ButtonList = () => {
  return (
    <div className='flex w-[900x] border border-red-500 overflow-x-scroll justify-center py-2'>
      {list.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
