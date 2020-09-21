import React from 'react'
import { Link } from 'react-router-dom'
import classes from './DoesNotExist.module.scss'

const DoesNotExist = () => {
  return (
    <section className={classes.DoesNotExist}>
      <h2>I'm sorry, there is nothing here, friend.</h2>
      <Link to="/">
        <button className={classes.goBack}>Go Back</button>
      </Link>
    </section>
  );
}

export default DoesNotExist