import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [values, setValue] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
      itemId: crypto.randomUUID(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  };

  return (
    <section>
      <h2>Add New Book</h2>
      <form>
        <input
          value={values.title || ''}
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
        />

        <input
          value={values.author || ''}
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
