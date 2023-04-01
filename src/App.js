import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './common/layout/layout';
import Home from './components/home.component';
import About from './components/about.component';
import Project from './components/project.component';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/projectPage';
import Navbar from './common/navbar/navbar.component';
import Footer from './common/footer/footer.component';

const App = () => {
  return (
    <div className='container mx-auto box-border'>
      <Router>
        <Navbar />
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
