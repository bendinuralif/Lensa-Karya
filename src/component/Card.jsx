import React from 'react';
import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';
import Images5 from '../assets/images/andre5.png';
import Images6 from '../assets/images/andre6.png';
import Images7 from '../assets/images/andre7.png';
import Images8 from '../assets/images/andre8.png';
import Images9 from '../assets/images/andre9.png';
import Images10 from '../assets/images/andre10.png';
import Images11 from '../assets/images/andre11.png';
import Images12 from '../assets/images/andre12.png';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdPricetag } from 'react-icons/io';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { LuCamera } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Photographer = () => (
  <>
    <div className='pb-[65px] '>
      <div className='flex flex-row justify-center w-full mx-auto gap-8 mt-[10px]'>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Andre Firmansyah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 250.000/jam
            </p>
            
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
            
          </div>
          <div className='w-full mx-16 flex justify-center'>
        
            <Link to='/layananprofile'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
            Detail
            </button>
        </Link>       
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Syamsul Ma'arif</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 180.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
          <Link to='/layananprofile1'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
            </Link>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Abie Arief Setiawan</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 190.000/jam
            </p> 
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
          <Link to='/layananprofile2'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
            </Link>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Bagus Rahmat</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
          <Link to='/layananprofile3'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
            </Link>
          </div>
        </div>
        {/* <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images2} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images3} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images4} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div> */}
      </div>
    </div>
    <div className='pb-[65px] mt-[-25px]'>
      <div className='flex flex-row justify-center w-full mx-auto gap-8'>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Wahyu Adi Romadhon</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 240.000/jam
            </p>
            
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images6})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Youfan Althoriq</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 200.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images7})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Arya Fadhil Dinata</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 190.000/jam
            </p> 
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images8})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Maya Yuningsih</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 180.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        {/* <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images2} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images3} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images4} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div> */}
      </div>
    </div>
    <div className='pb-[65px] mt-[-25px]'>
      <div className='flex flex-row justify-center w-full mx-auto gap-8'>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images9})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Tegar Sehan</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 210.000/jam
            </p>
            
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images10})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Putri Yayang</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 200.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images11})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Kurniawati</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 180.000/jam
            </p> 
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images12})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Qomar Abdullah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 240.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <div className='flex justify-center items-center gap-x-4'>
            <LuCamera />
            <LuVideo />
            </div>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        {/* <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images2} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Detail
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images3} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images4} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
            </button>
          </div>
        </div> */}
      </div>
    </div>
  </>
);

export default Photographer;
