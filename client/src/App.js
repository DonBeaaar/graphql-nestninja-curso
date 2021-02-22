import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book App</h1>
        <BookList />
	<AddBook />
      </div>
    </ApolloProvider>
  );
};
    
export default App;
