import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ChalkSlug from '../ChalkSlug/ChalkSlug'
import Home from '../Home/Home'
import Journal from '../Journal/Journal'
import TextBubble from '../TextBubble/TextBubble'
import DoesNotExist from '../DoesNotExist/DoesNotExist'
import classes from './App.module.scss'

function App() {
  return (
    <main className={classes.App}>
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          exact path="/activity"
          render={() => <TextBubble />}
        />
        <Route
          exact path="/journal"
          render={() => <Journal />}
        />
        <Route 
          render={() => <DoesNotExist/>}
        />
      </Switch>
      <ChalkSlug />
    </main>
  )
}

export default App;