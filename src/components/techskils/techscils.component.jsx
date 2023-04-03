import React from 'react';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/js.svg';
import tailwind from '../../assets/icons/tailwind.svg';
import react from '../../assets/icons/react.svg';
import ts from '../../assets/icons/typescript.png';

const Skils = () => {
  return (
    <div className='flex items-center w-[693px] h-[63px]'>
      <div className='w-full flex justify-between items-center'>
        <p className='w-[130px] text-[17px] text-[#2d2e32] font-semibold border-r-2 mr-4 border-[#767676]'>
          Tech Stack
        </p>
        <ul className='w-full flex justify-between items-center'>
          <li className='w-[34px] h-[34px]'>
            <img src={html} alt='' />
          </li>
          <li className='w-[34px] h-[34px]'>
            <img src={css} alt='' />
          </li>
          <li className='w-[34px] h-[34px]'>
            <img src={js} alt='' />
          </li>
          <li className='w-[34px] h-[34px]'>
            <img src={tailwind} alt='' />
          </li>
          <li className='w-[34px] h-[34px]'>
            <img src={react} alt='' />
          </li>
          <li className='w-[34px] h-[34px]'>
            <img src={ts} alt='' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skils;
