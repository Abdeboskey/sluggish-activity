import React from 'react'
import PropTypes from 'prop-types'
import classes from './ActivityPrompts.module.scss'

const ActivityPrompts = ({ solo, withOthers }) => {
  return (
    <>
      {!solo && !withOthers && (
        <h3 className={classes.prompt}>
          Would you like to do something by yourself
          <br />
          or would you like some company?
        </h3>
      )}
      {(solo || withOthers) && (
        <h3 className={classes.prompt}>
          What kind of activity would you like to do?
        </h3>
      )}
    </>
  );
}

export default ActivityPrompts

ActivityPrompts.propTypes = {
  solo: PropTypes.bool,
  withOthers: PropTypes.bool,
}