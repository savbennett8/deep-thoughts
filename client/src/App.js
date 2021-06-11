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
//rename 'BrowserRouter' to 'Router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  // uri: 'http://localhost:3001/graphql',
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/thought" component={SingleThought} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
