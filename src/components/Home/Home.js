import React from 'react'
import classes from './Home.module.scss'

const Home = () => {
  return(
    <section className={classes.HomeView}>
      <h2>Oh, Hi Friend!</h2>
      <h3>How Are You?</h3>
      <button className={classes.answerBtn}>I'm well!</button>
      <button className={classes.answerBtn}>I'm ok...</button>
      <button className={classes.answerBtn}>Not so great.</button>
    </section>
  )
}

export default Home
