import React from 'react';
import Layout from './Layout';
import Images from '../assets/images/andre.png'

const Aboutus = () => {
  return (
    <Layout>
      <div>
        <div className='text-center font-inter text-4xl font-bold pt-10 mt-[256px] text-[#EC0000]'>
          ABOUT <span className='text-[#000]'>.</span>
        </div>
        <p className='text-center font-inter text-2xl font-normal p-4 mr-11 ml-11'>
          Lensa Karya menyediakan fotografer dan videografer profesional untuk mengabadikan momen berharga dalam hidup Anda
        </p>
      </div>
      <div className='flex m-[188px] mt-[600px]'>
        <div>
          <div className='font-inter text-4xl font-bold pt-10 pl-4'>
            MENGAPA HARUS
          </div>
          <div className='font-inter text-4xl font-bold pl-4 text-[#EC0000]'>
            LENSA KARYA ?
          </div>
          <p className='font-inter text-xl font-normal p-4'>
            Lensa Karya, ahli cerita visual, menangkap ratusan momen istimewa dengan kreativitas dan keahlian. Kami berbagi keindahan melalui gambar dan film unik Anda.
          </p>
        </div>
        <div className='rounded-lg bg-white p-4 shadow-md mr-[]'>
          <img src={Images} alt=""  />
        </div>
      </div>
      <div className='flex '>
        <div className='rounded-lg bg-white p-4 shadow-md ml-[190px]'>
          <img src={Images} alt="" />
        </div>
        <div className='ml-11 mr-11'>
        <div className='font-inter text-4xl font-bold pl-4 '>
          GABUNG BERSAMA  <span className='text-[#EC0000]'>KAMI</span>
        </div>
          <p className='font-inter text-xl font-normal p-4'>
          "Bergabunglah dengan Lensa Karya, sampaikan kisah unik Anda melalui lensa kami. Dukungan pertumbuhan dan ciptakan seni inspiratif bersama."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
