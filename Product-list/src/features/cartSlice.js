import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
} 
// console.log(items)


export const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload._id);

            if (existingItem) {
                // If the item is already in the cart, increase its quantity
                existingItem.quantity += 1;
            } else {
                // If the item is not in the cart, add it with quantity 1
                const cartItem = {
                    id: action.payload._id,
                    img: action.payload.img,
                    name: action.payload.name,
                    price: Number(action.payload.price).toFixed(2),
                    quantity: 1
                };
                state.items.push(cartItem);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        deleteItem:(state,action)=>{
            state.items = state.items.filter(item => item.id !== action.payload);
            // Update local storage
            localStorage.setItem("carts", JSON.stringify(state.items));
        }
    }
})

export const {addToCart, increaseQuantity, decreaseQuantity,deleteItem}=cartSlice.actions

export default cartSlice.reducer