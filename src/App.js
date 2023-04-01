import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import { AppBar } from './components/AppBar';
import HomePage from './components/HomePage';
import Footer from './common/footer/footer.component';

const App = () => {
  return (
    <div className='container mx-auto box-border bg-slate-900'>
      <Router>
        <AppBar />
        <div className='pt-20'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
