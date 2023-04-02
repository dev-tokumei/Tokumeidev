import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/userImg.jpg';
import Mobile from './mobilenav.component';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='w-full flex items-center px-10 h-[90px] py-[20px] justify-between backdrop-blur-sm bg-white/30 fixed z-[100] shadow-md'>
        <a href='#home'>
          <div className='font-bold text-black text-2xl cursor-pointer flex items-center justify-between font-[Poppins]'>
            <img
              className='mobile w-[60px] h-[60px] rounded-full img_shadow'
              src={logo}
              alt='logo'
            />
            <span className='sm:text-2xl md:text-3xl mr-1 ml-4 '>Tokumei</span>
          </div>
        </a>
        <div className='flex items-center contentListNav '>
          <a className='mr-4 font-bold' href='#home'>
            Главный
          </a>
          <a className='mr-4 font-bold' href='#about'>
            Обо мне
          </a>
          <a className='mr-4 font-bold' href='#project'>
            Проекты
          </a>
          <a className='mr-4 font-bold' href='#contact'>
            Контакт
          </a>
        </div>
        <Mobile />
      </nav>
    </>
  );
};

export default Navbar;
