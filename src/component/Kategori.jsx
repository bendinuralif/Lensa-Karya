import React from 'react';
import Images from '../assets/images/kategori.png';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Kategori = () => {
  return (
    <>
      <div className='pb-[130px]'>
        <div className='flex justify-between items-center px-28'>
          <p className='pt-6 pb-4 text-xl font-bold'>Kategori</p>
          <p>
            Selengkapnya <FaAngleDoubleRight className='inline-block' />
          </p>
        </div>
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
