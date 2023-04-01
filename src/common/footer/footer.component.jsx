import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <Container>
      <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography>Copyright &copy; {date}. Все права защищены.</Typography>
        <Box>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
