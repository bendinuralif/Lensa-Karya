// import { useState } from 'react';
import Home from './pages/home/Home'
// import Button from './component/Button';
// import Navbar from './component/Navbar';
import Aboutus from './pages/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layanan from './pages/Layanan';
import Portfolio from './pages/Portofolio';
import Login from './pages/auth/Login';
import Lupasandi from './pages/Lupasandi';
import Verifikasi from './pages/Verifikasi';
import Katasandibaru from './pages/Katasandibaru';
import Daftar from './pages/auth/Daftar';
import Navbarlogin from './component/Navbarlogin';
import Layoutlogin from './pages/Layoutlogin';
import Profile from './pages/Profile';
import Portowedd from './pages/Portowedd';
import Layananprofile from './pages/Layananprofile';
import Layananporto from './pages/Layananporto';
import Layananporto2 from './pages/Layananporto2';
import Layananprofile1 from './pages/Layananprofile1';
import Layananprofile2 from './pages/Layananprofile2';
import Layananprofile3 from './pages/Layananprofile3';





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
        <Route path='/navbarlogin' element={<Navbarlogin />} />
        <Route path='/layoutlogin' element={<Layoutlogin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/portowedd' element={<Portowedd/>}/>
        <Route path='/layananprofile' element={<Layananprofile/>}/>
        <Route path='/layananporto' element={<Layananporto/>}/>
        <Route path='/layananporto2' element={<Layananporto2/>}/>
        <Route path='/layananprofile1' element={<Layananprofile1/>}/>
        <Route path='/layananprofile2' element={<Layananprofile2/>}/>
        <Route path='/layananprofile3' element={<Layananprofile3/>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
