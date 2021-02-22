import React, {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {ADDBOOKMUTATION, AUTHORSQUERY, GETBOOKSQUERY} from '../queries/queries';

const AddBook = () => {
  const {loading, error, data} = useQuery(AUTHORSQUERY);

  const [addBook] = useMutation(ADDBOOKMUTATION, {
    refetchQueries: [{query: GETBOOKSQUERY}],
  });

  const [addBookForm, setAddBookForm] = useState({
    name: '',
    genre: '',
    author: '',
  });

  const {name, genre, author} = addBookForm;

  const handleInputForm = ({target}) => {
    setAddBookForm({
      ...addBookForm,
      [target.name]: target.value,
    });
  };

  const submitAddBookForm = e => {
    e.preventDefault();
    addBook({variables: {name, genre, author}});
  };

  return (
    <>
      <form id="add-book" onSubmit={submitAddBookForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleInputForm}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            name="genre"
            type="text"
            value={genre}
            onChange={handleInputForm}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select name="author" value={author} onChange={handleInputForm}>
              <option>Select author</option>
            {loading ? (
              <option disabled>Loading authors...</option>
            ) : (
              data.authors.map(({id, name}) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))
            )}
          </select>
        </div>

        <button>+</button>
      </form>
    </>
  );
};

export default AddBook;
