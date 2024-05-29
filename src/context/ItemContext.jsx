import React, { createContext, useReducer } from 'react'
import { initialState, itemReducer } from '../reducer/ItemReducer';

 export const ItemContext = createContext({
  items : [],
  totalPrice : 0,
  add : (item) => {},
  remove: (id) => {},
  subtract : (id) => {},
 });

const ItemContextCtn = ({children}) => {

//add reducer
let [state,dispatch] = useReducer(itemReducer,initialState);

 let add = (item) => dispatch({type : "ADD_ITEM",payload :item})

let remove = (id) => dispatch({type:"REMOVE_ITEM",payload : id})

let subtract = (id) => dispatch({type: "DECREASE_QTY",payload : id})

let itemContextObj = {
  items : state.items,
  totalPrice : state.totalPrice,
  add,
  remove ,
  subtract,
}

  return (
    <ItemContext.Provider value={itemContextObj}>
        {children}
    </ItemContext.Provider>
    
  )
}

export default ItemContextCtn