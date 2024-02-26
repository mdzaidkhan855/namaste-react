import React, { useState } from 'react'
import { useSelector } from "react-redux";
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {  

// subscribing to the store using a selector
const cartItems = useSelector((store) => store.cart.items);
console.log("Cart details: ",cartItems);

const dispatch = useDispatch();
const handleClearCart = ()=>{
    dispatch(clearCart());    
}

  return (
    <div>
        { cartItems.length != 0  &&<button type="button" className='cursor-pointer m-2 p-2 bg-black text-white rounded-lg'
         onClick={handleClearCart}>
            Clear Cart
        </button>
        }
         <ItemList items={cartItems}/>
    </div>
  )
}

export default Cart