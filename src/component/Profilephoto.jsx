import { Link } from 'react-router-dom';
import Images from '../assets/images/andre.png';
import Event from '../assets/images/portofolio/event.png'
import PreWedding from '../assets/images/portofolio/pre-wed.png'
import Potrait from '../assets/images/portofolio/potrait.png'
import Family from '../assets/images/portofolio/family.png'
import Food from '../assets/images/portofolio/food.png'
import Product from '../assets/images/portofolio/product.png'
import Newborn from '../assets/images/portofolio/newborn.png'
import { IoMdPricetag } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCamera } from "react-icons/lu";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Portofolio = () => {
  return (
    

      <>
      <div className='box-sizing rounded-xl mx-auto h-[1000px] w-[950px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>
        <Link to="">
            <img src={Images} alt="Wedding Photography" className="box-content  h-[250px] w-[250px] mx-[20px] mt-6" />
          </Link>
          <p className='text-center text-[30px] mt-6 font-bold'>Andre Firmansyah</p>
          <div className='mt-[75px]'>
          <p className='italic font-light '>
              <BiLogoGmail className='inline-block me-5' />
              andrefirmansyah@gmail.com
            </p>
            <p>
              <FaWhatsapp className='inline-block me-5' />
              +62 858-3130-7378
            </p>
            <p><FaInstagram className='inline-block me-5' />
            @andrefirmansyah</p>
          </div>
          <div className='mt-[75px] ml-[-510px]'>
          <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 220.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <p><LuCamera className='inline-block me-5' />Photografer, Videografer</p>
            <div className='w-full mx-16 flex justify-center'>
        
        <Link to='../layanan3'>
        <button type='button' className='text-[#F3EEEA] bg-[#EC0000] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non mt-5 ml-[-170px]' >
        Hubungi
        </button>
    </Link>
    
      </div>
          </div>
            </div>

            <div>
            <p className='text-center text-[30px] mt-2 ml-[-730px] font-bold'>Portofolio</p>
          </div>
          
          <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Foto</span>
        </p>
        <p>
          Selengkapnya <FaAngleDoubleRight className='inline-block me-5' />
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="" >
            <img src={Food} alt="Food Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Event} alt="Event Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Product} alt="Product Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Newborn} alt="Newborn Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

      </div>

      <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Video</span>
        </p>
        <p>
          Selengkapnya <FaAngleDoubleRight className='inline-block me-5' />
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="" >
            <img src={Food} alt="Food Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Event} alt="Event Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Product} alt="Product Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Newborn} alt="Newborn Photography" className="box-content rounded-2xl h-[200px] w-[200px] mx-[20px]" />
          </Link>

      </div>
        </div>
        </>
  );
};

export default Portofolio;
