import React,{useState} from "react";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

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
        <Modal show={openModal} size="md" onClose={onCloseModal} popup className="bg-transparent backdrop-brightness-75 absolute">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">Edit Data Photographer</h3>
              <div>
              <div className="potoprofil ml-auto mr-auto scale-90"></div>
              <div className="text-center font-light text-base leading-normal hover:cursor-pointer">Ganti Foto</div>
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
              <button type="button"  onClick={onCloseModal} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Batal</button> 
              <button type="button"  onClick={onCloseModal} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Simpan</button>
              </div> 
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  } ;
  
  export default ModalEditProfile;