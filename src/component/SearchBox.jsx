import React,{useState} from 'react';

const SearchBox = () => {
return (
    <>
    <div className='flex justify-center '>
    <form id='searchForm'>
        <input type="text" id='searchInput' placeholder='Apa yang anda cari...?' className=' w-96 rounded-full justify-center items-center'/>
        <button type='submit'></button>
    </form>

    </div>
    </>
);
};

export default SearchBox;