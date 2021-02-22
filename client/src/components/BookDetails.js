import React from 'react';
import {useQuery} from '@apollo/client';
import {GETBOOKQUERY} from '../queries/queries';

const BookDetails = ({bookId}) => {
  const {loading, error, data} = useQuery(GETBOOKQUERY, {
    variables: {id: bookId},
  });

  if (loading || error) return null;

  const {book} = data;

  return (
    <div id="book-details">
      {book ? (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books from auhtor: </p>
          <ul>
            {book.author.books.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No book selected</p>
      )}
    </div>
  );
};

export default BookDetails;
