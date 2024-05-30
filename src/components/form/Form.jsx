import React from 'react'
import './index.css'
import { IoMdCreate } from "react-icons/io";


const Form = ({postData,setNewTask,newTask}) => {

  return (
    <form onSubmit={e => postData(e)} className='form-ctn mb-[30px] w-[100%] flex-col sm:flex-row flex gap-[15px] sm:items-center justify-between'>
        <input value={newTask} 
        onChange={(e)=>setNewTask(e.target.value)} type="text" 
        className="input main-f sm:w-[75%] w-[100%] text-[15px]"
         placeholder="What's your task for now?"/>
        <button className=' main-f flex items-center w-[100px] justify-center py-[5px] btn'>
    <IoMdCreate  />
    <p>Create</p>
        </button>
    </form>
  )
}

export default Form