import React,{useState} from "react";
import "../assets/css/profile.css";
import { Link } from "react-router-dom";
import ModalEditProfile from "../component/Modaleditprofile";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Layoutlogin from "./Layoutlogin";
import photo1 from "../assets/images/thumwedding/f1.png";
import photo2 from "../assets/images/thumwedding/f2.png";
import photo3 from "../assets/images/thumwedding/f3.png";
import photo4 from "../assets/images/thumwedding/f4.png";
import photo5 from "../assets/images/thumwedding/f5.png";
import photo6 from "../assets/images/thumwedding/f6.png";
import photo7 from "../assets/images/thumwedding/f7.png";
import photo8 from "../assets/images/thumwedding/f8.png";
import Thumb1 from "../assets/images/thumwedding/th1.png";
import Thumb2 from "../assets/images/thumwedding/th2.png";
import Thumb3 from "../assets/images/thumwedding/th3.png";
import Thumb4 from "../assets/images/thumwedding/th4.png";
import Thumb5 from "../assets/images/thumwedding/th5.png";
import Thumb6 from "../assets/images/thumwedding/th6.png";
import Thumb7 from "../assets/images/thumwedding/th7.png";
import Thumb8 from "../assets/images/thumwedding/th8.png";
import { IconsManifest } from "react-icons";
import ModalHapusAkun from "../component/ModalHapusAkun";
import ModalPromo from "../component/ModalPromo";
import ModalPorto from "../component/ModalPorto";

const Profile = () => {
  
  return (
    <Layoutlogin>
      <div class="container">
        <div class="box1">
          <h1>Profil Saya</h1>
          <div className="potoprofil ml-auto mr-auto"></div>
          {/* <Link to="">
            <p>Edit Data</p>
          </Link> */}
          <ModalEditProfile/>
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
              
                {/*{<Link to="">
                  <p>Pengiklanan Akun</p>
                   </Link>}*/}
                <ModalPromo/>
            
              
                {/*<Link to="">
                  <p>Hapus Akun</p>
                </Link>*/}
                <ModalHapusAkun/>
            
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
            {/*<Link to="">
              <p>Tambah Portofolio</p>
              </Link>*/}
              <ModalPorto/>
          </div>
          <div className="relative flex justify-center mt-2 gap-2">
            <Link to="">
              <img
                src={photo1}
                alt="Wedding Photography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>

            <Link to="">
              <img
                src={photo2}
                alt="Prewed Photography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
            <Link to="">
              <img
                src={photo3}
                alt="Potrait Photography"
                className="box-content rounded-2xl h-[200px] w-[200px] "
              />
            </Link>
            <Link to="">
              <img
                src={photo4}
                alt="Family Photography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
          </div>
          <div className="relative flex justify-center mt-2 gap-2">
            <Link to="">
              <img
                src={photo5}
                alt="Wedding fotography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>

            <Link to="">
              <img
                src={photo6}
                alt="Prewed Photography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>

            <Link to="">
              <img
                src={photo7}
                alt="Potrait Photography"
                className="box-content rounded-2xl h-[200px] w-[200px] "
              />
            </Link>

            <Link to="">
              <img
                src={photo8}
                alt="Family Photography"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
          </div>

          <div className="portovideo">
            <h1>Video</h1>
            {/*<Link to="">
              <p>Tambah Portofolio</p>
              </Link>*/}
              <ModalPorto/>
          </div>
          <div alt="video" className="relative flex justify-center mt-2 gap-2">
            <Link to="">
              <img
                src={Thumb1}
                alt="thumbnail video 1"
                className="box-content bg-footer-texture rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
            <Link to="">
              <img
                src={Thumb2}
                alt="thumbnail video 2"
                className="box-content rounded-2xl h-[200px] w-[200px] "
              />
            </Link>

            <Link to="">
              <img
                src={Thumb3}
                alt="thumbnail video 3"
                className="box-content rounded-2xl h-[200px] w-[200px]  "
              />
            </Link>

            <Link to="">
              <img
                src={Thumb4}
                alt="thumbnail video 4"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
          </div>
          <div className="relative flex justify-center mt-2 gap-2">
            <Link to="">
              <img
                src={Thumb5}
                alt="thumbnail video 5"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
            <Link to="">
              <img
                src={Thumb6}
                alt="thumbnail video 6"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
            <Link to="">
              <img
                src={Thumb7}
                alt="thumbnail video 7"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>

            <Link to="">
              <img
                src={Thumb8}
                alt="thumbnail video 8"
                className="box-content rounded-2xl h-[200px] w-[200px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </Layoutlogin>
  );
};

export default Profile;
