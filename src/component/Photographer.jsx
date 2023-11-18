import React from 'react';
import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';

const Photographer = () => {
  return (
    <>
      <div className='pb-[65px]'>
        <div>
          <p className='pt-6 pb-4 ml-28 text-xl font-bold'>Rekomendasi Pilihan</p>
        </div>
        <div className='flex flex-row w-3/4 mx-auto gap-16'>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 '>
            <img src={Images} alt='' />
            <div className='px-8'>
              <button type='button' className='text-[#EC0000] bg-[#F3EEEA] focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non'>
                Default
              </button>
            </div>
          </div>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Photographer;
