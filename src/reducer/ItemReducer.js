export const initialState = {
items : [],
totalPrice : 0,
}

export const itemReducer = (state,{type,payload}) => {

if(type == 'ADD_ITEM') {
    let updatedItem ;
    let index = state.items.findIndex(({id}) => id === payload.id);

    if(index !== -1){
    let itemInCart =state.items[index]; //obj
    let itemWithUpdatedQty = { //modified obj with qty
        ...itemInCart,
        qty : itemInCart.qty + payload.qty,
    };
    updatedItem = [...state.items]; //destructured arr
    updatedItem[index] = itemWithUpdatedQty; //implement object
    }else {
        updatedItem = state.items.concat(payload)
    }
    let updatedAmount = state.totalPrice + payload.price * payload.qty;

return {
items : updatedItem,
totalPrice : updatedAmount,
}
}else if(type == 'REMOVE_ITEM') {
    let itemToRemove = state.items.filter(({id}) => id !== payload);
    let updatedAmount = itemToRemove.reduce((currentAmt,item) =>{
    return currentAmt + item.price * item.qty;
    },0)

    return {
        items : itemToRemove,
        totalPrice : updatedAmount,
    }
}else if(type == "DECREASE_QTY") {

let index = state.items.findIndex(({id}) => id === payload);
let filteredItem = state.items[index];

let itemWithNewQty = {
    ...filteredItem,
    qty : filteredItem.qty - 1,
}
let itemData = [...state.items];
itemData[index] = itemWithNewQty;

let updatedAmount = itemData.reduce((currentAmt,item) => {
    return currentAmt + item.price * item.qty;
},0)

return {
    items : itemData,
    totalPrice : updatedAmount,
}
}else{
        throw new Error();
}
}

