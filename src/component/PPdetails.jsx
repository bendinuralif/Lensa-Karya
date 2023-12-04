import { Link } from 'react-router-dom';
import Wedding from '../assets/images/thumwedding/f1.png'
import Event from '../assets/images/thumwedding/f2.png'
import PreWedding from '../assets/images/thumwedding/f3.png'
import Potrait from '../assets/images/thumwedding/f4.png'
import Family from '../assets/images/thumwedding/f5.png'
import Food from '../assets/images/thumwedding/f6.png'
import Product from '../assets/images/thumwedding/f7.png'
import Newborn from '../assets/images/thumwedding/f8.png'




const PPdetails = () => {

  return (
    
<>
      <div className='box-sizing rounded-xl mx-auto h-[650px] w-[1150px] mt-24 mb-10 bg-[#fff] drop-shadow-md'>
        <p className='text-center text-3xl leading-normal font-bold font-inter'> Portofolio</p>
        <div className='relative flex justify-items-stretch ml-[20px] mr-[37px] mt-2 '>

        <Link to="#">
            <img src={Wedding} alt="Wedding Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link >

          <Link to="">
            <img src={PreWedding} alt="Prewed Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Potrait} alt="Potrait Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Family} alt="Family Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

      </div>

      <div  className='flex justify-items-stretch ml-[20px] mr-[37px] mt-6 '>
        <Link to="" >
            <img src={Food} alt="Food Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Event} alt="Event Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

          <Link to="">
            <img src={Product} alt="Product Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px] " />
          </Link>

          <Link to="">
            <img src={Newborn} alt="Newborn Photography" className="box-content rounded-2xl h-[250px] w-[250px] mx-[20px]" />
          </Link>

      </div>
        </div>
</>
  );
};

export default PPdetails;
