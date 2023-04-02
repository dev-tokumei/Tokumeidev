import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import helloimg from '../../assets/img/helloimg.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './home.css';

const Home = () => {
  return (
    <Container>
      <div
        id='#home'
        className='w-full h-screen snap-center flex justify-center items-center'
      >
        <div className='w-full sm sm_pt flex justify-between'>
          <div className='flel w-[500px]'>
            <div className='relative'>
              <h1 className='text-[3rem] sm_text_hero font-bold text-[#2d2e32] mb-5 sm_pt'>
                Front-End React Developer
              </h1>
              <img
                className='w-[60px] h-[60px] absolute right-[12rem] top-[5rem] sm_nonne'
                src={helloimg}
                alt='hello'
              />
            </div>
            <p className='text-[#767676] text-[1.1rem] mb-5'>
              Привет, я Cубхониддин. Увлеченный Front-end React разработчик из
              Душанбе, Таджикистан.
            </p>
            <Box>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </div>
          <div className='flelx'>
            <div className='shape'></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
