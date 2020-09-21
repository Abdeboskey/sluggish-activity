import React from 'react'
import { Route } from 'react-router-dom'
import ChalkSlug from '../ChalkSlug/ChalkSlug'
import Home from '../Home/Home'
import TextBubble from '../TextBubble/TextBubble'
import classes from './App.module.scss'

function App() {
  return (
    <main className={classes.App}>
      <Route
        exact path="/"
        render={() => <Home />}
      />
      <Route
        exact path="/activity"
        render={() => <TextBubble />}
      />
      
      <ChalkSlug />
    </main>
  )
}

export default App;