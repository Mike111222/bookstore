import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.itemId !== action.payload);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
