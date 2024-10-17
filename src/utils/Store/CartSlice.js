import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        getCart: (state, action) => {
            state.cart = action.payload;
        }
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;