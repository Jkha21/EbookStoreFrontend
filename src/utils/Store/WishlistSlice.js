import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        getWishlist: (state, action) => {
            state.wishlist = action.payload
        }
    }
});

export const { getWishlist } = wishlistSlice.actions;
export default getWishlist.reducer;