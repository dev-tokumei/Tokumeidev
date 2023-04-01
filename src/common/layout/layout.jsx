import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

const Layout = () => {
  return (
    <Container maxWidth='xl'>
      <Navbar />
      <Footer />
    </Container>
  );
};

export default Layout;
