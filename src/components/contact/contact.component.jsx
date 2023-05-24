import React from 'react';
import { Container } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import './contact.css';

const Contact = () => {
  return (
    <div className='w-full bg-white py-20'>
      <Container>
        <div className='w-full flex flex-col'>
          <div className='text_block'>
            <p className='text-[#147efb] font-bold text-lg mb-4'>КОНТАКТ</p>
            <p className='text-[#2d2e32] font-bold text-3xl'>
              Не стесняйтесь связаться со мной. 👇
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-24 pt-20 items-center contact_item_block'>
            <div className='w-[293px] h-[80px] flex justify-between items-center contact_item_block'>
              <div className='w-[79px] h-[79px] flex justify-center items-center scikls_shadow cursor-pointer text-[#147efb]'>
                <LocationOnOutlinedIcon fontSize='large' />
              </div>
              <div className='flex flex-col contact_items'>
                <h1 className='text-[#2d2e32] font-bold text-[1.5rem] contact_items'>
                  Location
                </h1>
                <p className='contact_items text-[#767676] cursor-pointer'>
                  Душанбе, Таджикистан.
                </p>
              </div>
            </div>
            <div className='w-[360px] h-[80px] flex justify-between items-center contact_item_block'>
              <div className='w-[79px] h-[79px] flex justify-center items-center scikls_shadow cursor-pointer text-[#147efb]'>
                <DraftsOutlinedIcon fontSize='large' />
              </div>
              <div className='flex flex-col contact_items'>
                <h1 className='text-[#2d2e32] font-bold text-[1.5rem] contact_items'>
                  Mail
                </h1>
                <a
                  className='contact_items text-[#767676] cursor-pointer'
                  href='mailto:subhoniddinodinaev@gmail.com'
                >
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
