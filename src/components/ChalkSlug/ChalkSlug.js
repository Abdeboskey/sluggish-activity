import React from 'react'
import moment from 'moment'
import chalk_slug from '../../assets/chalk_slug.png'
import classes from './ChalkSlug.module.scss'

const ChalkSlug = () => {
  return (
    <>
    <div className={classes.slugjug}>
      <img className={classes.ChalkSlug} src={chalk_slug} alt="a chalk slug" />
    </div>
    </>
  );
}

export default ChalkSlug