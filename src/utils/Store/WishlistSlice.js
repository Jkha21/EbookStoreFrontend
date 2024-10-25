import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        getWishlist: (state, action) => {
            const obj = state.wishlist.find(item => item._id === state.payload._id);
            if(!obj){
                state.wishlist.push(action.payload);
            }
        }
    }
});

export const { getWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;