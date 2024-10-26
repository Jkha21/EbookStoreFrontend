import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        getWishlist: (state, action) => {
            const obj = state.wishlist.find(item => item._id === action.payload._id || item._id === action.payload.bookId );
            if(!obj){
                state.wishlist.push(action.payload);
            }
        },

        resetWishList: (state, action) => {
            state.wishlist = [];
        },

        removeItemWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item._id !== action.payload._id);
        }
    }
});

export const { getWishlist, resetWishList, removeItemWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;