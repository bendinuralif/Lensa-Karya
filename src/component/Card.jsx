import React from 'react';
import Images from '../assets/images/andre.png';
import Images2 from '../assets/images/andre2.png';
import Images3 from '../assets/images/andre3.png';
import Images4 from '../assets/images/andre4.png';

const Card = () => {
  return (
    <>
      <div className='pb-[65px]'>
        <div className='flex flex-row w-3/4 mx-auto gap-8'>
          <div className='w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow '>
            <img  src={Images} alt=''/>
            <div className='px-8'>
            </div>
          </div>
          <div className='w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow '>
            <img src={Images2} alt='' />
            <div className='px-8'>
            </div>
          </div>
          <div className='w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow '>
            <img src={Images3} alt='' />
            <div className='px-8'>
            </div>
          </div>
          <div className='w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow '>
            <img src={Images4} alt='' />
            <div className='px-8'>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;