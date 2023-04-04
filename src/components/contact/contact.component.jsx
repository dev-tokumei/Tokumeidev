import React from 'react';
import { Container } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

const Contact = () => {
  return (
    <div className='w-full bg-white py-20'>
      <Container>
        <div className='w-full flex flex-col'>
          <div>
            <p className='text-[#147efb] font-bold text-lg mb-4'>CONTACT</p>
            <p className='text-[#2d2e32] font-bold text-3xl'>
              Не стесняйтесь связи со мной. 👇
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-24 pt-20 items-center justify-center'>
            <div className='w-[293px] h-[80px] flex justify-between items-center'>
              <div className='w-[79px] h-[79px] flex justify-center items-center scikls_shadow cursor-pointer text-[#147efb]'>
                <LocationOnOutlinedIcon fontSize='large' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-[#2d2e32] font-bold text-[1.5rem]'>
                  Location
                </h1>
                <p>Душанбе, Таджикистан.</p>
              </div>
            </div>
            <div className='w-[350px] h-[80px] flex justify-between items-center'>
              <div className='w-[79px] h-[79px] flex justify-center items-center scikls_shadow cursor-pointer text-[#147efb]'>
                <DraftsOutlinedIcon fontSize='large' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-[#2d2e32] font-bold text-[1.5rem]'>Mail</h1>
                <a href='mailto:subhoniddinodinaev@gmail.com'>
                  subhoniddinodinaev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
