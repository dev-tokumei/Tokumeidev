import React from 'react';
import { Container } from '@mui/material';
import logo from '../../assets/img/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container maxWidth='xl'>
      <nav className='flex items-center py-[25px] justify-between bg-white'>
        <Link to='/'>
          <div className='font-bold text-black text-2xl cursor-pointer flex items-center w-[180px] justify-between font-[Poppins]'>
            <div className='w-[60px] flex items-center justify-center h-[60px] rounded-full select-none  bg-slate-900'>
              <img className='w-[55px] h-[55px]' src={logo} alt='' />
            </div>
            <span className='text-3xl mr-1 '>Tokumei</span>
          </div>
        </Link>
        <div className='flex items-center contentListNav '>
          <a className='mr-4 font-bold' href='/'>
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
      </nav>
    </Container>
  );
};

export default Navbar;
