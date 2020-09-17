import React from 'react';
import ChalkSlug from '../ChalkSlug/ChalkSlug';
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <ChalkSlug />
    </main>
  );
}

export default App;

// give something else the className App-Logo