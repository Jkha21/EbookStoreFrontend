import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './BookSlice';
import cartSlice from './CartSlice';

const appStore = configureStore({
    reducer: {
        books: bookSlice,
        cart: cartSlice
    },
});

export default appStore;