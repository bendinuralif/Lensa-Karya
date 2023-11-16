import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/lenka.png';
import Icon from '../assets/images/icon/login.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Ensure that the state is updated before the rendering completes
    // This will help in applying styles on the first click
    // and removing styles from the previously clicked link
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLink]);

  return (
    <>
      <div className='w-full h-16 bg-white drop-shadow-lg flex justify-between px-[57px] items-center'>
        <div className='brand flex items-center font-bold text-[#EC0000] text-[25px]'>
          <p className='font-fontQuantico'>LenKa</p>
          <img src={Logo} alt='' className='w-10 ml-[-5px]' />
        </div>
        <div className='link flex gap-[77px] text-[16px]'>
          <Link
            to='/'
            onClick={() => handleLinkClick('Beranda')}
            className={`${
              activeLink === 'Beranda' ? 'text-[#EC0000] font-bold' : ''
            } text-[16px]`}
          >
            Beranda
          </Link>
          <Link
            to='/aboutus'
            onClick={() => handleLinkClick('Tentang Kami')}
            className={`${
              activeLink === 'Tentang Kami' ? 'text-[#EC0000] font-bold' : ''
            } text-[16px]`}
          >
            Tentang Kami
          </Link>
          <Link
            to='/layanan'
            onClick={() => handleLinkClick('Layanan')}
            className={`${
              activeLink === 'Layanan' ? 'text-[#EC0000] font-bold' : ''
            } text-[16px]`}
          >
            Layanan
          </Link>
          <Link
            to='/portofolio'
            onClick={() => handleLinkClick('Portofolio')}
            className={`${
              activeLink === 'Portofolio' ? 'text-[#EC0000] font-bold' : ''
            } text-[16px]`}
          >
            Portofolio
          </Link>
        </div>
        <div className='button text-[#EC0000] font-medium flex items-center'>
          <img src={Icon} alt='' className='w-[17px] mr-2' />
          <p>SayaPhotographer</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
