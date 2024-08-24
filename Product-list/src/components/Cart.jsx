import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, deleteItem } from "../features/cartSlice";

function Cart() {
  const list = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const totalPrice = list.reduce((total, item) => total + (item.quantity * item.price), 0);

  const cartItem = list.map((item) => (
    <div key={item.id} className="">
      <li className="px-2 py-3 items-center flex flex-row gap-1 my-2">
        <img src={item.img} className="h-12 w-12" alt={item.name} />
        <div className="flex flex-col">
          <p className="w-32 text-sm">{item.name}</p>
          <p className="text-xs">
            {item.quantity}x <span>${item.price}</span> = {item.quantity * item.price}
          </p>
        </div>
        <div className="flex text-center items-center h-min gap-1 bg-orange-300 ">
          <button 
            className="bg-orange-400 px-2 text-white" 
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>
          <p className="">{item.quantity}</p>
          <button 
            className="bg-orange-400 px-2 text-white" 
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>
        <button className="border-[#caafa7] border rounded-full ml-2" onClick={()=>{dispatch(deleteItem(item.id))}}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>
      </li>
    </div>
  ));

  return (<ul>
    {cartItem} 
    <div className="total-price mt-4">
        <p className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
      </div> 
     <div className="w-full h-[2px] bg-black"></div> 
     <button className="w-full bg-orange-600 rounded-2xl mt-2 py-1 text-white">Confirm Order</button>
    </ul>)
  
}

export default Cart;
