import { Link } from 'react-router-dom';
import Images from '../assets/images/andre3.png';
import Photo1 from '../assets/images/Photo1.png';
import Photo2 from '../assets/images/Photo2.png'
import Photo3 from '../assets/images/Photo3.png'
import Photo4 from '../assets/images/Photo4.png'
import Video1 from '../assets/images/Video1.png'
import Video2 from '../assets/images/Video2.png'
import Video3 from '../assets/images/Video3.png'
import Video4 from '../assets/images/Video4.png'
import { IoMdPricetag } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCamera } from "react-icons/lu";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ModalHubungi from './ModalHubungi';

const Profilephoto2 = () => {
  return (
    

      <>
      <div className='box-sizing rounded-xl mx-auto h-[1000px] w-[950px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

            <img src={Images} alt="Wedding Photography" className="box-content  h-[250px] w-[200px] mx-[20px] mt-6" />
            <div>
          <p className='text-center text-[30px] mt-6 font-bold'>Abie Arief Setiawan</p>
          </div>
          <div className='mt-[75px] ml-[55px]'>
          <p className='italic font-light '>
              <BiLogoGmail className='inline-block me-5' />
              abieariefsetiawan@gmail.com
            </p>
            <p>
              <FaWhatsapp className='inline-block me-5' />
              +62 895-3130-7070
            </p>
            <p><FaInstagram className='inline-block me-5' />
            @abieariefsetiawan</p>
          </div>
          <div className='mt-[75px] ml-[-510px]'>
          <p className='italic font-light'>
              <IoMdPricetag className='inline-block me-5' />
              Rp. 190.000/jam
            </p>
            <p>
              <IoLocationSharp className='inline-block me-5' />
              Medan
            </p>
            <p><LuCamera className='inline-block me-5' />Photografer, Videografer</p>
            <div className='flex'>
        
            <ModalHubungi/>
    
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
          <a href="/layananporto">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="" >
            <img src={Photo1} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Photo2} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Photo3} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Photo4} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

      </div>

      <div className='flex justify-between items-center px-8'>
        <p className='pt-6 pb-4 text-xl font-bold'>
          <span className='text-red-600 ml-2 mt-10'>Video</span>
        </p>
        <p>
          <a href="/layananporto2">Selengkapnya <FaAngleDoubleRight className='inline-block me-5' /></a>
        </p>
      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px]  '>
  
        <Link to="/layananporto2" >
            <img src={Video1} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Video2} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Video3} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Video4} alt="" className="box-content rounded-lg h-[200px] w-[200px] mx-[20px]" />
          </Link>

      </div>
        </div>
        </>
  );
};

export default Profilephoto2;
