import { useState } from 'react';
import Home from './pages/Home';
import Button from './component/Button';
import Navbar from './component/Navbar';
import Aboutus from './pages/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layanan from './pages/Layanan';
import Portfolio from './pages/Portofolio';
import Portowedd from './pages/Portowedd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/portofolio' element={<Portfolio />} />
        <Route path='/portowedd' element={<Portowedd/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
