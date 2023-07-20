import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/booksSlice';

const BookCard = () => {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: try again</div>;
  }

  const renderBooks = books.map((book) => (
    <div key={book.item_id} className="bookContainer">
      <div className="bookTitle">
        <p className="category">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul className="buttonsList">
          <li><button className="bookBtn" type="button">Comments</button></li>
          <li><button className="bookBtn" type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button></li>
          <li><button className="bookBtn" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div className="chart">
          <div className="ProgressBar">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="percentages">
          <h2>33%</h2>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="currentChapter">currentChapter</p>
        <p>chapter3</p>
        <button className="updateProgress" type="button">Update Progress</button>
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
