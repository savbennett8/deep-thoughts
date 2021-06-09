import React from 'react';
import {
  //provide data to all other componenets
  ApolloProvider,
  //constructor function to help initialize connection to GraphQL API server
  ApolloClient,
  //enables ApolloClient instance to cache API response to perform requests efficiently
  InMemoryCache,
  //controls how ApolloClient makes a request(kind of like middleware)
  createHttpLink
} from "@apollo/client";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
