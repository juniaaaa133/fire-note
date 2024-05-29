import React, { useContext } from 'react'
import './index.css'
import { RxCross1 } from "react-icons/rx";
import CartItem from './CartItem';
import { ItemContext } from '../../context/ItemContext';
import Empty from './Empty';

const Cart = ({css,isOpened,setIsOpened}) => {

let {items,totalPrice} = useContext(ItemContext)

  return (
    <>
    <div onClick={()=>setIsOpened(false)} className={isOpened ? 'cart-ctn' : ''}></div>
    <div className={css}>
    <div className="cart-nav">
      <h2 className="cart-title main-f">Cart</h2>
      <RxCross1 className='cart-icn' onClick={()=>setIsOpened(false)}/>
    </div>
    {
      items.length == 0 ?
<Empty setIsOpened={setIsOpened}/>
      :
<>
<div className="cart-item-ctn">
      {
       items.map((item,index) => (
         <CartItem key={index} item={item}/>
       ))
      }
       </div>
   <div className="cart-final-ctn">
   <div className="cart-total-ctn main-f">
         <p className="cart-text">Subtotal</p>
         <p className="main-f cart-text price"> $ {totalPrice.toFixed(2)}</p>
       </div>
       <button onClick={()=>{
        alert('Your package is on the way!')
       }} className="btn cart-btn main-f">Checkout</button>
   </div>
</>
    }
   
  </div>
    
    </>
  )
}

export default Cart