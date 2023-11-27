import React from 'react';
import Layout from './Layout';
import Carousel from '../component/Carousel';
import Sidebar from '../component/Sidebar';
import Intro from '../component/Intro';
import Photographer from '../component/Photographer';
import Kategori from '../component/Kategori';
import Images from '../assets/images/carousel1.png';
import Images2 from '../assets/images/carousel2.png';

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Sidebar />
      <Intro />
      <Photographer />
      <Kategori />
    </Layout>
  );
};

export default Home;