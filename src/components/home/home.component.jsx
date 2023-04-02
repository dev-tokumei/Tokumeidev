import React from 'react';
import { Container, IconButton } from '@mui/material';
import helloimg from '../../assets/img/helloimg.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './home.css';

const Home = () => {
  return (
    <Container>
      <div
        id='#home'
        className='w-full h-screen mobile_heght snap-center flex justify-center items-center'
      >
        <div className='w-full sm flex justify-between'>
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
              Привет, я Cубхониддин. Увлеченный Front-end React разработчик из
              Душанбе, Таджикистан.
            </p>
            <div className='hero_icons'>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
          <div className='flex'>
            <div className='shape'></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
