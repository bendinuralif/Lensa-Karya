import React from 'react';
import Logo from '../assets/images/lenka.png';
import Icon from '../assets/images/icon/login.png';

const Navbar = () => {
  return (
    <>
      <div className='w-full h-16 bg-white drop-shadow-lg flex justify-between px-[57px] items-center'>
        <div className='brand flex items-center font-bold text-[#EC0000] text-[25px]'>
          <p className='font-fontQuantico'>LenKa</p>
          <img src={Logo} alt='' className='w-10 ml-[-5px]' />
        </div>
        <div className='link flex gap-[77px] text-[16px]'>
          <p className='text-[#EC0000] font-bold text-[16px]'>Beranda</p>
          <p>Tentang Kami</p>
          <p>Layanan</p>
          <p>Portofolio</p>
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
