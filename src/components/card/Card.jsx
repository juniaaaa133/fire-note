import React, { useContext, useState } from 'react'
import './index.css'
import '../cart/index.css'
import { FaCartPlus } from "react-icons/fa";
import { ItemContext } from '../../context/ItemContext';

const Card = ({id,name,img,desc,price}) => {

let [qty,setQty] = useState(1);
let {add} = useContext(ItemContext)

let increaseQty = () => {
  if(qty >= 10) {
return;
  }else{
setQty(qty +1);
  }
}

let decreaseQty = () => {
  if(qty <= 1) {
return;
  }else{
setQty(qty -1);
  }
}

let addItem = () => {
  let itemToAdd = {
    id,
    name,
    img,
    price,
    qty,
  }
  add(itemToAdd)
}

  return (
    <div className='card bg-main main-f'>
        <img src={img} alt="" className="card-img" />
       <div className="card-info-ctn">
       <h3 className="card-title main-f">{name} </h3>
        <p className="card-desc main-f">{desc}</p>
       </div>
       <div className="card-sec-ctn">
       <div className="price main-f">
          <p className=''>$</p>
          <p className="">{price}</p>
      </div>
       <div className="card-price-ctn">
      <div  className="cart-qty-ctn">
        <div onClick={decreaseQty} className="cart-qty-btn">-</div>
        <p className="cart-qty-data">{qty}</p>
        <div onClick={increaseQty} className="cart-qty-btn">+</div>
      </div>
      <div onClick={addItem} className="btn card-btn">
            <p>Add</p>
            <FaCartPlus />
        </div>
     </div>
    
       
       </div>
    </div>
  )
}

export default Card