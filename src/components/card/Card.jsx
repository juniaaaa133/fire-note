import React, { useContext, useEffect, useState } from 'react'
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Card = ({data,methods}) => {

  let {id,isCompleted , task} = data;
  let {updateData,deleteData} = methods;

  return (
<div className='w-full h-[75px] flex justify-between items-center px-[10px] bg-[#f0f8fa] rounded-[5px]'>
  <div className="flex items-center gap-[10px]">
{
  isCompleted ? 
  <FaRegSquareCheck onClick={()=>updateData(id,false)} className='t-main cursor-pointer'/>
:
<FaRegSquare onClick={()=>updateData(id,true)} className='t-main cursor-pointer'/>

}
  <p className={`text-[13px] sm:text-[15px] main-f ${isCompleted ? 'line-through' : ''}`}>{task}</p>
  </div>
  <MdOutlineRemoveCircleOutline onClick={()=>deleteData(id)} className='t-main text-[20px] cursor-pointer' />
</div>
  )
}

export default Card