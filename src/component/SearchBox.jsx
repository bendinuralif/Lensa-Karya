import React,{useState} from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
return (
    <>
    <div className='flex justify-center '>
    <form  id='searchForm'>
        <input type="text" id='searchInput' placeholder='Apa yang anda cari...?' className='bg-[#D9D9D9] w-96 rounded-full justify-center items-center'/>
        <IoIosSearch className='inline-block h-10'/>
    </form>

    </div>
    </>
);
};

export default SearchBox;