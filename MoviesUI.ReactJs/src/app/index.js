import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import MovieSearch from '../pages/MovieSearch';
import './style.module.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => (
  <>
    <Header />
    <main>
      <ErrorBoundary>
        <Provider store={store}>
          <MovieSearch />
        </Provider>
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);
