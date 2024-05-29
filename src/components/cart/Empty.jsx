import React from 'react'
import './index.css'

const Empty = ({setIsOpened}) => {
  return (
    <div className='main-f ectn'>
        <h2 className="etitle">Your cart is empty.</h2>
        <button className="btn cart-btn" onClick={()=>setIsOpened(false)}>Shop Now</button>
    </div>
  )
}

export default Empty