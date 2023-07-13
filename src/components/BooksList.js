import React from 'react';
import AddBook from './AddBook';
import BookCard from './BookCard';

const Books = () => {
  const books = [{
    id: '1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progres: '63%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter17: *Get Busy Living*',
  },
  {
    id: '2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progres: '18%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter3: *A Lesson Learned*',
  },
  {
    id: '3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progres: '20%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter2: *Introduction To World Order*',
  }];
  return (
    <div>
      <BookCard key={books.id} book={books} />
      <AddBook />
    </div>
  );
};
export default Books;
