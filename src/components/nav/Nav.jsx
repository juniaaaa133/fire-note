import React, { useContext } from 'react'
import './index.css'
import { IoAdd } from "react-icons/io5";

const Nav = () => {

  return (
    <div className='nav-ctn bg-white'>
        <h2 className=" main-f t-main text-[20px] ">FireNote</h2>
        <button 
        onClick={()=>{
          window.scrollTo(0, 0);
        }} 
        className=' main-f flex items-center w-[100px] justify-center py-[5px] btn'>
    <IoAdd  />
    <p>Add</p>
        </button>
    </div>
  )
}

export default Nav