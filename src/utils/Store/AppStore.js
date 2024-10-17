import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './BookSlice';

const appStore = configureStore({
    reducer: {
        books: bookSlice
    },
});

export default appStore;