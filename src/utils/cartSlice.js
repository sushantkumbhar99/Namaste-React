import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

   name: "cart",
   initialState:{
    item:[]
    
   },
   reducers : {
    additem : (state, action) =>{
        state.item.push(action.payload);
    },
    removeItem : (state)=>{
        state.item.pop();
    },
    clearCart: (state)=>{
        state.item.length = 0;
    }
 
   } 

})

export const {additem, removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer