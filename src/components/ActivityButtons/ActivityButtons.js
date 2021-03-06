import React, { useState } from 'react'
import classes from './ActivityButtons.module.scss'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from '../../localStorageCalls'

const ActivityButtons = ({ activity, link, suggestActivity, startOver }) => {
  const [ saved, setSaved ] = useState(false)

  const saveActivity = () => {
    const activityToSave = {
      date: DateTime.local().toLocaleString(),
      description: activity,
      link: link || null,
    }
    addToLocalStorage(activityToSave)
  }
  
  const addToLocalStorage = (activityToSave) => {
    let activities = getFromLocalStorage('savedActivities')
    if (activities === null) {
      activities = [activityToSave]
      localStorage.setItem('savedActivities', JSON.stringify(activities))
      setSaved(true)
    } else {
      activities = JSON.parse(activities)
      activities.push(activityToSave)
      localStorage.setItem('savedActivities', JSON.stringify(activities))
      setSaved(true)
    }
  }

  return (
    <>
      {!saved && (
        <>
          <h3>
            What if you {activity[0].toLowerCase() + activity.substring(1)}?
          </h3>
          {link && (
            <h4>
              Check it out{" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                here!
              </a>
            </h4>
          )}
          <div className={classes.btnBar}>
            <button className={classes.activityBtn} onClick={saveActivity}>
              Thanks! I'll try that.
            </button>
            {/*activity.includes("stargazing") && (
              <button className={classes.activityBtn}>
                Can we do that together?
              </button>
            )*/}
            <button className={classes.activityBtn} onClick={suggestActivity}>
              Can you suggest something else?
            </button>
            <button className={classes.activityBtn} onClick={startOver}>
              Can I start over?
            </button>
          </div>
          <Link to="/">
            <button
              className={classes.goHomeBtn}
            >
              Can I Go Home?
            </button>
          </Link>
          <br />
        </>
      )}
      {saved && (
        <>
          <h3>Ok! I'll add "{activity}" to your activity journal.</h3>
          <div className={classes.btnBar}>
            <Link to="/journal">
              <button
                className={classes.journalBtn}
                onClick={() => setSaved(false)}
              >
                View My Journal
              </button>
            </Link>
            <button
              className={classes.activityBtn}
              onClick={(event) => {
                startOver(event);
                setSaved(false);
              }}
            >
              Pick Another Activity
            </button>
            <Link to="/">
              <button
                className={classes.journalBtn}
                onClick={() => setSaved(false)}
              >
                Go Home
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default ActivityButtons

ActivityButtons.propTypes = {
  activity: PropTypes.string,
  link: PropTypes.string,
  suggestActivity: PropTypes.func,
  startOver: PropTypes.func,
}