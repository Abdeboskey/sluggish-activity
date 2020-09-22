import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <section className={classes.HomeView}>
      <h1>Oh, Hi!</h1>
      <h2>What can I do for you today, friend?</h2>
      <h4>
        I can help you find something to do if you're feeling sluggish, 
        and I'll keep track of the things you've tried in your journal.
      </h4>
      <div className={classes.btnBar}>
        <Link to="/activity">
          <button className={classes.activityBtn}>Find an Activity</button>
        </Link>
        <Link to="/journal">
          <button className={classes.journalBtn}>Look at My Journal</button>
        </Link>
        {/* This is a future feature that will also give the user the ability to 
            view NASA's photo of the day with the snail if they would like.
        <Link>
          <button className={classes.stargazeBtn}>Let's Go Stargazing</button>
        </Link> */}
      </div>
    </section>
  );
}

export default Home
