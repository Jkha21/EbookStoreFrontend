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
                existList.quantity = action.payload.quantity;
                console.log(JSON.stringify(existList));
                
            }else{
                state.cartlist.push(action.payload);
            }
        },
        removeItem: (state, action) =>{
            let existList = state.cartlist.filter(book => book._id !== action.payload._id);
            state.cartlist = [...existList];
        },

        getData: (state, action) => {
            let existList = state.cartlist.find(book => book._id === action.payload.bookId);

            if(existList){
                const res = state.cartlist.filter(book => book._id !== action.payload.bookId);
                state.cartlist = [...res, {...existList, quantity: action.payload.quantity}];
                // console.log(action.payload);
                // existList.quantity = action.payload.quantity; 
                // console.log(JSON.stringify(existList));
                // state.cartlist.push(existList);
                
            }else{
                state.cartlist.push(action.payload);
            }
        },

        resetCartList: (state, action) => {
            state.cartlist = [];
        }
    }
});

export const { getCart, removeItem, getData, resetCartList } = cartSlice.actions;
export default cartSlice.reducer;