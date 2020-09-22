import React from 'react'
import classes from './HowAreYou.module.scss'

// This component is not currently implemented, but would be a future feature that 
// checks in with the user about their feelings, and allows them to journal about it. 

const HowAreYou = () => {
  return (
    <section className={classes.HowAreYou}>
      <h2>Oh, Hi Friend!</h2>
      <h3>How Are You?</h3>
      <button className={classes.answerBtn}>I'm well!</button>
      <button className={classes.answerBtn}>I'm ok...</button>
      <button className={classes.answerBtn}>Not so great.</button>
    </section>
  )
}

export default HowAreYou;
