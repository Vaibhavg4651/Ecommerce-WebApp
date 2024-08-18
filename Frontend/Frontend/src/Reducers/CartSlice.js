import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        price:[]
    },
    reducers: {
      setprice(state,action){
        const {productId,userId,subprice}=action.payload;      
        if (!state.price) {
          state.price = []; 
        }  
        const userIndex = state.price.findIndex(p => p.userId === userId);
        if (userIndex !== -1) {
          // User exists
          const productIndex = state.price.findIndex(p => p.productId === productId && p.userId === userId);
          if (productIndex !== -1) {
            // Product exists
            state.price[productIndex].subprice = subprice;
          } else {
            // Product does not exist
            state.price.push({ productId, userId, subprice });
          }
        } else {
          // User does not exist
          state.price.push({ productId, userId, subprice });
        }
  
        console.log('Updated price array:', state.price.map(p => ({ ...p })));
      },
      removeprice(state,action){
        const{productId,userId}=action.payload;
        // const updateCart=state.find(user=>user.productId===productId && user.userId===userId);
        // if(updateCart){
        //   return state.filter(f=>f.userId!==userId && f.productId!==productId);
        // }
        const updatedCart = state.price.filter(item => !(item.productId === productId && item.userId === userId));
        state.price = updatedCart;
        console.log(updatedCart);
      },
      clearCart(state) {
        state.price = [];
      }

    },
  })


  export default cartSlice.reducer
  export const {setprice,removeprice,clearCart}=cartSlice.actions