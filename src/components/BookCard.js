import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from 'prop-types';

const BookCard = ({ book }) => {
  const renderBooks = book.map((book) => (
    <>
      <div className="bookContainer">
        <div className="bookTitle">
          <p>{ book.category }</p>
          <p>{ book.title }</p>
          <p>{ book.author }</p>
          <ul className="buttonsList">
            <li><button type="button">Comments</button></li>
            <li><button type="button">Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="bookChart">
          <div>Chart</div>
          <div>
            <p>{ book.progres }</p>
            <p>COMPLETED</p>
          </div>
        </div>
        <div className="bookChapter">
          <p>{ book.currentChapter }</p>
          <p>{ book.chapterNumber }</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  ));
  return (
    <div className="mainContainer">
      { renderBooks }
    </div>
  );
};

BookCard.propTypes = {
  book: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default BookCard;
