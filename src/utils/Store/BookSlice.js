import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: []
    },
    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload;
        }
    }
});

export const { getBooks } = bookSlice.actions;
export default bookSlice.reducer;