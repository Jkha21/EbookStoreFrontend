import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartlist: []
    },
    reducers: {
        getCart: (state, action) => {
            let existList = state.cartlist.find(book => book._id === action.payload._id);
            if(existList){
                console.log(action.payload)
                existList.quantity = action.payload.quantity;
                
            }else{
                state.cartlist.push(action.payload);
            }
        }
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;