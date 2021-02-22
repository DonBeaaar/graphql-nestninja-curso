import {gql} from '@apollo/client';

export const AUTHORSQUERY = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const GETBOOKSQUERY = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

export const GETBOOKQUERY = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const ADDBOOKMUTATION = gql`
  mutation AddBook($name: String!, $genre: String!, $author: ID!) {
    addBook(name: $name, genre: $genre, authorID: $author) {
      id
      name
    }
  }
`;
