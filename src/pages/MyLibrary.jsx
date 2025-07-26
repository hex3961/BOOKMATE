import React from 'react';
import booksData from '../data/books.json';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import '../index.css';

const MyLibrary = () => {
  const recents = booksData.filter(b => b.category === 'recent');
  const favorites = booksData.filter(b => b.category === 'favorite');
  const saved = booksData.filter(b => b.category === 'saved');

  return (
    <div className="page-container">
      <Header title="My Library" />
      <h2>Recents</h2>
      <div className="book-grid">
        {recents.map(book => <BookCard key={book.id} book={book} />)}
      </div>
      <h2>Favourites</h2>
      <div className="book-grid">
        {favorites.map(book => <BookCard key={book.id} book={book} />)}
      </div>
      <h2>Saved for Later</h2>
      <div className="book-grid">
        {saved.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default MyLibrary;
