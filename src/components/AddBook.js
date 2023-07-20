import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const template = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

const AddBook = () => {
  const [values, setValue] = useState({ template });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values,
      item_id: crypto.randomUUID(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  };

  return (
    <section className="addBook">
      <h2>ADD NEW BOOK</h2>
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
        <select name="category" value={values.category || ''} type="text" onChange={handleChange}>
          <option>category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Comic">Comic</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Science">Science</option>
        </select>

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
