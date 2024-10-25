import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './BookSlice';
import cartSlice from './CartSlice';
import WishlistSlice from "./WishlistSlice";
import OrderlistSlice from "./OrderSlice";



const appStore = configureStore({
    reducer: {
        books: bookSlice,
        cart: cartSlice,
        wishlist: WishlistSlice,
        OrderList: OrderlistSlice
    },
});

export default appStore;