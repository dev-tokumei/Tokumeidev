import React from 'react';
import { Container, IconButton } from '@mui/material';
import helloimg from '../../assets/img/helloimg.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Skils from '../techskils/techscils.component';
import TelegramIcon from '@mui/icons-material/Telegram';
import './home.css';

const Home = () => {
  return (
    <div className='w-full bg-[#f9f9f9]'>
      <Container>
        <div
          id='#home'
          className='w-full h-screen mobile_heght snap-center flex flex-col justify-center pb-32'
        >
          <div className='w-full sm flex justify-between mt-36 '>
            <div className='flel hero_block w-[500px]'>
              <div className='relative'>
                <h1 className='text-[3rem] h1_text font-bold text-[#2d2e32] mb-5 sm_pt'>
                  Front-End React Developer
                </h1>
                <img
                  className='w-[60px] hello h-[60px] absolute right-[12rem] top-[5rem]'
                  src={helloimg}
                  alt='hello'
                />
              </div>
              <p className='sm_text_hero flex text-[#767676] text-[1.1rem] m-3'>
                Привет, я Cубхониддин. Опитный Front-end React разработчик из
                Душанбе, Таджикистан.
              </p>
              <div className='w-full flex items-center pl-2 hero_icons pt-3'>
                <a className='mr-5' href='https://github.com/dev-tokumei'>
                  <GitHubIcon fontSize='large' />
                </a>
                <a className='mr-5' href='https://t.me/tokumei_dev'>
                  <TelegramIcon fontSize='large' />
                </a>
              </div>
            </div>
            <div className='flex'>
              <div className='shape'></div>
            </div>
          </div>
          <Skils />
        </div>
      </Container>
    </div>
  );
};

export default Home;
