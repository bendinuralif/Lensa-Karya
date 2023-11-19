import { useState } from 'react';
import Home from './pages/Home';
import Button from './component/Button';
import Navbar from './component/Navbar';
import Aboutus from './pages/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layanan from './pages/Layanan';
import Portfolio from './pages/Portofolio';
import Login from './pages/Login';
import Lupasandi from './pages/Lupasandi';
import Verifikasi from './pages/Verifikasi';
import Katasandibaru from './pages/Katasandibaru';
import Daftar from './pages/Daftar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/portofolio' element={<Portfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/lupasandi' element={<Lupasandi />} />
        <Route path='/verifikasi' element={<Verifikasi />} />
        <Route path='/katasandibaru' element={<Katasandibaru />} />
        <Route path='/daftar' element={<Daftar />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
