import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: "books",
    initialState: {
        book: []
    },
    reducers: {
        getBooks: (state, action) => {
            state.book = action.payload;
        }
    }
});

export const { getBooks } = bookSlice.actions;
export default bookSlice.reducer;