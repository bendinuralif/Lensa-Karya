import { Carousel } from 'flowbite-react';
import Images from '../assets/images/carousel1.png';
import Images2 from '../assets/images/carousel2.png';

const CarouselItem = () => {
  return (
    <>
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
        <Carousel>
          <img src={Images} alt='...' />
          <img src={Images2} alt='...' />
          <img src={Images} alt='...' />
          <img src={Images2} alt='...' />
          <img src={Images} alt='...' />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItem;