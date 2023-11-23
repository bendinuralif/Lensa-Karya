import React,{useState} from 'react';

const Dropdown = () => {
  return (
    <>
    <div className=' text-white flex justify-center gap-x-4 text-sm '>
    <select  className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect">
        <option className='text-white' value="" disabled selected>Abjad</option>
        <option className='text-white' value="1">A - Z</option>
        <option className='text-white' value="2">Z - A</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect">
    <option className='text-white' value="" disabled selected>Harga</option>
        <option className='text-white' value="1">Rendah - Tinggi</option>
        <option className='text-white' value="2">Tinggi - Rendah</option>
        <option className='text-white' value="3">Min - Max</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs' id="mySelect">
    <option className='text-white' value="" disabled selected>Lokasi</option>
        <option className='text-white' value="1">Aceh</option>
        <option className='text-white' value="2">Batam</option>
        <option className='text-white' value="3">Lampung</option>
        <option className='text-white' value="1">Medan</option>
        <option className='text-white' value="2">Padang</option>
        <option className='text-white' value="3">Palembang</option>
    </select>
    <select className='bg-[#EC0000] border-0 rounded-full w-40 h-8 text-xs ' id="mySelect">
    <option value="" disabled selected>Skill</option>
        <option className='text-white' value="1">Fotografer</option>
        <option className='text-white' value="2">Videografer</option>
    </select>
    </div>

    </>

  );
};

export default Dropdown;