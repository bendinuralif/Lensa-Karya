import React from "react";
import "../assets/css/profile.css";
import Layoutlogin from "./Layoutlogin";

const Profile = () => {
  return (
    <Layoutlogin>
      <div class="container">
        <div class="box1">
          <h1>Profil Saya</h1>
          <div className="potoprofil"></div>
          <button><p>Edit Data</p></button>
          <h1>Andre Firmansyah</h1>
          <div className="data">
            <p>
              <i>Rp.220.000/jam</i>
            </p>
            <p>Medan</p>
            <p>Fotografer, Videografer</p>
            <p>andrefirmansyah@gmail.com</p>
            <p>+62 858-3130-7378</p>
            <p>@andrefirmansyah</p>
          </div>

          <div className="pengaturan">
            <h1>Pengaturan</h1>
            <div className="pengaturanisi">
              <p>Pengiklanan Akun</p>
              <p>Hapus Akun</p>
              <div className="out">
                <a href="/">
                  <p>Keluar</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="box2">
          <h1>Portofolio</h1>

          <div className="portofoto">
            <h1>Foto</h1>
            <p>Tambah Portofolio</p>
          </div>

          <div className="portovideo">
            <h1>Video</h1>
            <p>Tambah Portofolio</p>
          </div>
        </div>
      </div>
    </Layoutlogin>
  );
};

export default Profile;
