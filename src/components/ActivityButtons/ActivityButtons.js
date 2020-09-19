import React from 'react'
import classes from './ActivityButtons.module.scss'
import PropTypes from 'prop-types'

const ActivityButtons = ({ activity, suggestActivity, startOver }) => {
  return (
    <>
      <h3>What if you {activity.toLowerCase()}?</h3>
      <div className={classes.btnBar}>
        <button className={classes.activityBtn}>Thanks! I'll try that.</button>
        {activity.includes("stargazing") && (
          <button className={classes.activityBtn}>
            Can we do that together?
          </button>
        )}
        <button className={classes.activityBtn} onClick={suggestActivity}>
          Can you suggest something else?
        </button>
        <button className={classes.activityBtn} onClick={startOver}>
          Can I start over?
        </button>
      </div>
    </>
  );
}

export default ActivityButtons

ActivityButtons.propTypes = {
  activity: PropTypes.string,
  suggestActivity: PropTypes.func,
  startOver: PropTypes.func,
}