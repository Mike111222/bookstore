import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = () => {
  const books = useSelector((store) => store.books.books);
  const dispatch = useDispatch();

  const renderBooks = books.map((book) => (
    <div key={book.item_id} className="bookContainer">
      <div className="bookTitle">
        <p>{book.category}</p>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <ul className="buttonsList">
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="bookChart">
        <div>Chart</div>
        <div>
          <p>progres</p>
          <p>COMPLETED</p>
        </div>
      </div>
      <div className="bookChapter">
        <p>currentChapter</p>
        <p>chapterNumber</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  ));

  return (
    <div className="mainContainer">
      {renderBooks}
    </div>
  );
};

export default BookCard;
