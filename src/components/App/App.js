import React from 'react';
import ChalkSlug from '../ChalkSlug/ChalkSlug';
import TextBubble from '../TextBubble/TextBubble'
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <TextBubble />
      <ChalkSlug />
    </main>
  );
}

export default App;

// give something else the className App-Logo