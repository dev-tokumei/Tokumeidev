import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/projectPage';
import Navbar from './common/navbar/navbar.component';
import Footer from './common/footer/footer.component';
import ContactPage from './pages/contactPage';

const App = () => {
  return (
    <div className='mx-auto box-border content-center'>
      <Router>
        <Navbar />
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
