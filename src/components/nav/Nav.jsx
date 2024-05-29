import React, { useContext } from 'react'
import './index.css'
import { CiShoppingCart } from "react-icons/ci";
import { ItemContext } from '../../context/ItemContext';

const Nav = ({openCart}) => {

let {items} = useContext(ItemContext)

let totalQty = items.reduce((currentVal,item) => {
return currentVal + item.qty;
},0) 

  return (
    <div className='nav-ctn'>
        <h2 className="title2 main-f fontcl2">Whtiebox</h2>
        <div onClick={()=>openCart(true)} className="nav-cart-ctn">
        <CiShoppingCart  className='icn'/>
      {
        totalQty == 0 ? <></>
        :
        <div className="nav-qty-ctn main-f ">
        <p className="nav-qty">{totalQty}</p>
            </div>
      }
        </div>
    </div>
  )
}

export default Nav