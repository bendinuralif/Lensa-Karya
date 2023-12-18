import React from 'react'
import '../../assets/css/login.css'
import Layoutlogin from '../Layoutlogin'

const Signup = () => {
  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover">
            <h3>DAFTAR</h3>
            <input type="text" placeholder="Nama Pengguna" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Kata Sandi" />
            <input type="text" placeholder="Konfirmasi Kata Sandi" />
            <input type="text" placeholder="No Telp" />
            <div className="login-btn"><a href="Login">Daftar</a></div>
            <p className="textdaftar">Sudah punya akun? <a href="Login"><b>Masuk</b></a></p> 

        </div>
        </div>
    </Layoutlogin>
  )
}

export default Signup