import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import './footer.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='w-full bg-[#2d2e32]'>
      <Container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              py: 5,
              maxWidth: '990px',
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }}
            >
              &copy; {date}. Все права защищены.
            </Typography>
            <div className='footer'>
              <a
                className='mr-5 hover:text-[#147efb] duration-300 text-white footer_icons'
                href='https://github.com/dev-tokumei '
              >
                <GitHubIcon fontSize='large' />
              </a>
              <a
                className='mr-5 hover:text-[#147efb] duration-300 text-white footer_icons'
                href='https://t.me/tokumei_dev'
              >
                <TelegramIcon fontSize='large' />
              </a>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
