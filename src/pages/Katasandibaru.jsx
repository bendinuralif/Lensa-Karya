import React from 'react'
import Layout from './Layout'
import '../assets/css/login.css'

const Katasandibaru = () => {
  return (
    <Layout>
        <div className="page">
      <div className="cover">
            <h3>LUPA SANDI</h3>
            <input type="text" placeholder="Kata Sandi Baru" />
            <input type="text" placeholder="Konfirmasi Kata Sandi Baru" />
     
            <div className="login-btn"><a href="Login">Ubah Kata Sandi</a></div>
            <p className="textdaftar">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 
            
        </div>
        </div>
    </Layout>
  )
}

export default Katasandibaru