import React from 'react';
import Navbarlogin from '../component/Navbarlogin';
import Footer from '../component/Footer';
// import { Carousel } from '@material-tailwind/react';

const Layoutlogin = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbarlogin />
      {children}
      <Footer />
    </div>
  );
};

export default Layoutlogin;
