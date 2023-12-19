import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import DropdownTextbox from "./DropdownTextbox";
import FileUploadButton from "./FileUploadButton";

const ModalPorto = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div>
  <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer">
    Tambah Portofolio
  </div>
  <Modal
    show={openModal}
    size="md"
    onClose={onCloseModal}
    popup
    className="bg-transparent backdrop-brightness-75 absolute "
  >
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
          Tambah Portofolio
        </h3>
        <div className="flex justify-between items-center p-8">
          <div className="flex flex-col">
            {/* Konten di sisi kiri */}
            <div className="bg-gray-400 w-40 h-32 rounded p-4 mb-4"></div>
            <FileUploadButton
             />
          </div>

          <div className="flex flex-col pl-2">
            <input
              type="text"
              className="w-full h-10 px-4 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Judul Portofolio..."
            />
            
            <DropdownTextbox />
            
            <input
              type="text"
              className="w-full h-32 px-4 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan deskripsi Portofolio..."
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCloseModal}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onCloseModal}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Simpan
          </button>
        </div>
      </div>
  


        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalPorto;
