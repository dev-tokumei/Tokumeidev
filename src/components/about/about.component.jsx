import React from 'react';
import { Container } from '@mui/material';
import note from '../../assets/img/nout.webp';

const About = () => {
  return (
    <Container>
      <div
        id='about'
        className='w-full flex flex-col h-screen snap-center justify-center items-center'
      >
        <div className='flex justify-between items-center'>
          <div className='w-[410px] h-[350px]'>
            <img
              className='w-full h-full  rounded-3xl'
              src={note}
              alt='notebook'
            />
          </div>
          <div>
            <div>ABOUT ME</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
