import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GETBOOKSQUERY} from '../queries/queries';
import BookDetails from '../components/BookDetails';

const BookList = () => {
  const {loading, error, data} = useQuery(GETBOOKSQUERY);
  const [selectedBook, setSelectedBook] = useState(null);
  //const {books} = data;
  //console.log(books);
  //console.log(loading)

  return (
    <>
      <ul id="book-list">
        {!loading ? (
          data.books.map(({id, name}) => (
            <li
              key={id}
              onClick={() => {
                setSelectedBook(id);
              }}>
              {name}
            </li>
          ))
        ) : (
          <div>Cargando los libros</div>
        )}
      </ul>
      <BookDetails bookId={selectedBook} />
    </>
  );
};

export default BookList;
