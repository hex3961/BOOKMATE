import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="book-card" onClick={() => navigate(`/book/${book.id}`)}>
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      {book.progress && <p>{book.progress}% done</p>}
    </div>
  );
};

export default BookCard;
