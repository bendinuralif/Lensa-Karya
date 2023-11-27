import { Carousel } from 'flowbite-react';
import Images from '../assets/images/carousel1.png';
import Images2 from '../assets/images/carousel2.png';

const CarouselItem = () => {
  return (
    <>
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8'>
        <Carousel style={{ width: '100%', height: '160%' }}>
          <img src={Images} alt='...' className='object-cover w-full h-full' />
          <img src={Images2} alt='...' className='object-cover w-full h-full' />
          {/* <img src={Images} alt='...' />
          <img src={Images2} alt='...' />
          <img src={Images} alt='...' /> */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItem;