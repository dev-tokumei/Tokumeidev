import React from 'react';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/js.svg';
import tailwind from '../../assets/icons/tailwind.svg';
import react from '../../assets/icons/react.svg';
import ts from '../../assets/icons/typescript.png';
import './skils.css';

const Skils = () => {
  return (
    <div className='flex items-center w-[693px] icons mt-10'>
      <div className='w-full flex justify-between items-center mobile_skils '>
        <p className='w-[130px] text-[17px] text-[#2d2e32] font-semibold border-r-2 mr-4 border-[#767676] techstack_text'>
          Tech Stack
        </p>
        <ul className='w-full flex icons justify-between'>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer '>
            <img className='w-[34px] h-[34px]' src={html} alt='' />
          </li>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer '>
            <img className='w-[34px] h-[34px]' src={css} alt='' />
          </li>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer '>
            <img className='w-[34px] h-[34px]' src={js} alt='' />
          </li>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer '>
            <img className='w-[34px] h-[34px]' src={tailwind} alt='' />
          </li>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer '>
            <img className='w-[34px] h-[34px]' src={react} alt='' />
          </li>
          <li className='w-[65px] h-[65px] flex justify-center items-center scikls_shadow cursor-pointer'>
            <img className='w-[34px] h-[34px]' src={ts} alt='' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skils;
