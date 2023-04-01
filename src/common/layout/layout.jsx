import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

const Layout = ({ children }) => {
  return (
    <Container maxWidth='xl'>
      {children}
    </Container>
  );
};

export default Layout;
