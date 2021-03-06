import React from 'react'
import chalk_slug from '../../assets/chalk_slug.png'
import classes from './ChalkSlug.module.scss'

const ChalkSlug = () => {
  return (
    <div className={classes.slugjug}>
      <img data-testid="324" className={classes.ChalkSlug} src={chalk_slug} alt="a chalk slug" />
    </div>
  );
}

export default ChalkSlug