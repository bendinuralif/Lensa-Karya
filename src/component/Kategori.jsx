import React from 'react';
import Images from '../assets/images/kategori.png';

const Kategori = () => {
  return (
    <>
      <div className='pb-[130px]'>
        <p className='pt-6 pb-4 ml-28 text-xl font-bold'>Kategori</p>
        <div className='flex flex-row gap-4 justify-center items-center'>
          <img src={Images} alt='' />
          <img src={Images} alt='' />
          <img src={Images} alt='' />
          <img src={Images} alt='' />
          <img src={Images} alt='' />
        </div>
      </div>
    </>
  );
};

export default Kategori;
