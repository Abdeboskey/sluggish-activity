import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <section className={classes.HomeView}>
      <h2>What can I do for you today, friend?</h2>
      <div className={classes.btnBar}>
        <Link to="/activity">
          <button className={classes.answerBtn}>Find an Activity</button>
        </Link>
        <Link to="/journal">
          <button className={classes.answerBtn}>Look at My Journal</button>
        </Link>
        {/* <Link>
          <button className={classes.answerBtn}>Let's Go Stargazing</button>
        </Link> */}
      </div>
    </section>
  );
}

export default Home