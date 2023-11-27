import React from 'react';
import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdPricetag } from 'react-icons/io';

const Photographer = () => (
  <>
    <div className='pb-[65px]'>
      <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          Rekomendasi <span className='text-red-600'>Pilihan</span>
        </p>
        <p>Selengkapnya >></p>
      </div>
      <div className='flex flex-row justify-center w-full mx-auto gap-8'>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Andre Firmansyah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Andre Firmansyah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Andre Firmansyah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        <div
          className='w-72 max-w-sm h-96 p-8 bg-white border-[15px] border-gray-200 rounded-lg shadow sm:p-4 flex flex-col items-center justify-end drop-shadow-2xl'
          style={{ backgroundImage: `url(${Images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          <div className='text-white w-full'>
            <img src='' alt='' />
            <p className='text-center text-xl font-bold'>Andre Firmansyah</p>
            <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
          </div>
          <div className='w-full mx-16 flex justify-center'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non'>
              Default
            </button>
          </div>
        </div>
        {/* <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
          <img src={Images2} alt='' />
          <div className='px-8'>
            <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
              Default
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
