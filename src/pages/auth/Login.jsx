import React from 'react'
import '../../assets/css/login.css'
import Layoutlogin from '../Layoutlogin'

const Signin = () => {
  return (
    <Layoutlogin>
        <div className="page">
      <div className="cover">
            <h3>MASUK</h3>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Kata Sandi" />
            <p className="textlupasandi"><a href="Lupasandi">Lupa Kata Sandi?</a></p> 
            <div className="login-btn"><a href="/Profile">Masuk</a></div>
            <p className="textdaftar">Belum punya akun? <a href="Daftar"><b>Daftar</b></a></p> 
            <p className="text">Atau</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                </div>
            </div> 
        </div>
        </div>
    </Layoutlogin>
  )
}

export default Signin