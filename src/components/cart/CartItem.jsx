import React, { useContext } from 'react'
import './index.css'
import { RxCross1 } from "react-icons/rx";
import { ItemContext } from '../../context/ItemContext';

const CartItem = ({item}) => {

let {remove,add,subtract} = useContext(ItemContext);

let {
  id,
  img ,
  name,
  price,
  qty,
} = item;

let addQty = (_) => add({
    ...item,
    qty : 1
})

let subtractQty = (_) => {
  if(item.qty == 1){
    console.log('hi')
    return;
  }else{
    console.log('fuck')
  subtract(id)
  }
}

  return (
    <div className="cart-item main-f">
    <div className="cart-info-ctn">
      <img src={img} alt="" className="cart-img" />
      <div className="cart-info ">
        <div className="cart-stat-ctn">
        <p className="cart-name">{name}</p>
        <RxCross1 onClick={() => remove(id)} className='cart-icn2' />
        </div>
        <div className="cart-stat-ctn">
        <div className="cart-qty-ctn">
          <div onClick={subtractQty} className="cart-qty-btn">-</div>
          <p className="cart-qty-data">{qty}</p>
          <div onClick={addQty} className="cart-qty-btn">+</div>
        </div>
        <p className="cart-price">$ {price}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem