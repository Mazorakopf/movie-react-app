import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import MovieSearch from '../pages/MovieSearch';
import './style.module.scss';

export default () => (
  <>
    <Header />
    <main>
      <ErrorBoundary>
        <MovieSearch />
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);
