import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  id: '',
  category: '',
  title: '',
  author: '',
  progres: '',
  currentChapter: '',
  chapterNumber: '',
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => ({
      books: state.filter((book) => book.id !== action.payload),
    }),
    addBook: (state, action) => ({
      books: [...state.books, action.payload],
    }),
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
