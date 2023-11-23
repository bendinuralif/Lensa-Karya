import React from 'react'
import Layout from './Layout'
import '../assets/css/login.css'

const Daftar = () => {
  return (
    <Layout>
        <div className="page">
      <div className="cover">
            <h3>LUPA SANDI</h3>
            <input type="text" placeholder="Nama Pengguna" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Kata Sandi" />
            <input type="text" placeholder="Konfirmasi Kata Sandi" />
            <input type="text" placeholder="No Telp" />
            <div className="login-btn"><a href="Login">Daftar</a></div>
            <p className="textdaftar">Sudah punya akun? <a href="Login"><b>Masuk</b></a></p> 

        </div>
        </div>
    </Layout>
  )
}

export default Daftar