import React from 'react';
import Layout from './Layout';
import '../assets/css/aboutus.css';

const Aboutus = () => {
  return (
    <Layout>
      <div className='aboutContent'>ABOUT</div>
      <p className='additionalText'>Lensa Karya menyediakan fotografer dan videografer profesional untuk mengabadikan momen berharga dalam hidup Anda</p>
      <div className='featureTitle'>MENGAPA HARUS</div>
      <div className='companyName'>LENSA KARYA</div>
      <p className='descriptionText'>Lensa Karya, ahli cerita visual, menangkap ratusan momen istimewa dengan kreativitas dan keahlian. Kami berbagi keindahan melalui gambar dan film unik Anda.</p>
    </Layout>
  );
};

export default Aboutus;
