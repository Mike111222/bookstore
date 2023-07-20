import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL
// API URL
const booksAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UUD89QFWkJvMJew3gPgt';

// fetching the books from the API.
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${booksAPI}/books`);
  const books = Object.entries(response.data).map((item) => (
    {
      ...item[1][0],
      item_id: item[0],
    }
  ));
  return books;
});
// AsyncThunk for adding the books.
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`${booksAPI}/books`, book);
  } catch (e) {
    throw new Error(e);
  }
  return book;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    await axios.delete(`${booksAPI}/books/${bookId}`);
  } catch (e) {
    throw new Error(e);
  }
  return bookId;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${booksAPI}/books`);

  const books = Object.entries(response.data).map((item) => (
    {
      ...item[1][0],
      item_id: item[0],
    }
  ));
  return books;
});

const initialState = {
  books: [],
  isLoading: false,
  isError: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default booksSlice.reducer;
