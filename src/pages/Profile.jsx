import React,{useState} from "react";
import "../assets/css/profile.css";
import { Link } from "react-router-dom";
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
              
                <Link to="">
                  <p>Pengiklanan Akun</p>
                </Link>
            
              
                <Link to="">
                  <p>Hapus Akun</p>
                </Link>
            
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
            <Link to="">
              <p>Tambah Portofolio</p>
            </Link>
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
            <Link to="">
              <p>Tambah Portofolio</p>
            </Link>
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

const ModalEditProfile = () =>{
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return(
    <div>
      {/* <Button onClick={() => setOpenModal(true)} className="text-black border-white mr-auto ml-auto">Edit Data</Button> */}
      <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer">Edit Data</div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup className="bg-transparent backdrop-blur-sm absolute pt-36">
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">Edit Data Photographer</h3>
            <div>
            <div className="potoprofil ml-auto mr-auto scale-90"></div>
            <div className="text-center font-light text-base leading-normal">Ganti Foto</div>
            <div className=" font-bold text-base leading-normal">Data Diri</div>
            <div class="mb-6 flex items-center gap-10 w-full">
                <label for="large-input" class="block text-sm font-medium text-gray-900 dark:text-white w-1/4">Nama</label>
                <input type="text" id="large-input" class="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"/>
            </div> 
            <div class="mb-6 flex items-center gap-10 w-full">
                <label for="large-input" class="block text-sm font-medium text-gray-900 dark:text-white w-1/4">Domisili</label>
                <input type="text" id="large-input" class="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"/>
            </div>   
            <div class="mb-6 flex items-center gap-10 w-full">
                <label for="large-input" class="block text-sm font-medium text-gray-900 dark:text-white w-1/4">No Telp</label>
                <input type="text" id="large-input" class="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"/>
            </div> 
            <div class="mb-6 flex items-center gap-10 w-full">
                <label for="large-input" class="block text-sm font-medium text-gray-900 dark:text-white w-1/4">Harga</label>
                <input type="text" id="large-input" class="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"/>
            </div> 
            <div>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Batal</button> 
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Simpan</button>
            </div> 
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}; 

export default Profile;
