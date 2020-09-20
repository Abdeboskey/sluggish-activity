import React from 'react'
import classes from './ActivityButtons.module.scss'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'

const ActivityButtons = ({ activity, link, suggestActivity, startOver }) => {
  const saveActivity = () => {
    const activityToSave = {
      date: DateTime.local().toLocaleString(),
      description: activity,
      link: link || null,
    }
    
    if (localStorage.getItem('savedActivities') === null) {
      let activities = [activityToSave]
      localStorage.setItem('savedActivities', JSON.stringify(activities))
    } else {
      const activities = JSON.parse(localStorage.getItem('savedActivities'))
      activities.push(activityToSave)
      localStorage.setItem('savedActivities', JSON.stringify(activities))
    }
  }

  return (
    <>
      <h3>What if you {activity[0].toLowerCase() + activity.substring(1)}?</h3>
      {link && <h4>Check it out <a href={link} target='_blank'>here!</a></h4>}
      <div className={classes.btnBar}>
        <button className={classes.activityBtn} onClick={saveActivity}>Thanks! I'll try that.</button>
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