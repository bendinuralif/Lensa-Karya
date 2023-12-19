import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import whatsappLogo from '../assets/images/icon/whatsapp.png';
import instagramLogo from '../assets/images/icon/instagram.png';
import gmailLogo from '../assets/images/icon/gmail.png';

const ModalHubungi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div>
  <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer text-white bg-[#EC0000] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1 focus:outline-non mt-5">
    Hubungi
  </div>
  <Modal
    show={openModal}
    size="sm"
    onClose={onCloseModal}
    popup
    className="bg-transparent backdrop-brightness-75 absolute pt-60"
  >
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
       
          <img src={whatsappLogo} alt="Facebook Logo" className="mx-4 cursor-pointer" onClick={() => window.open('https://www.whatsapp.com/')} />
          <img src={instagramLogo} alt="Twitter Logo" className="mx-4 cursor-pointer" onClick={() => window.open('https://www.instagram.com/')} />
          <img src={gmailLogo} alt="Instagram Logo" className="mx-4 cursor-pointer" onClick={() => window.open('https://www.gmail.com/')} />
        

        </div>
      </div>
  


        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalHubungi;
