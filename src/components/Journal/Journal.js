import React from 'react'
import classes from './Journal.module.scss'

const Journal = () => {

  const makeActivityList = () => {
    let activities = localStorage.getItem('savedActivities')
    if (!activities) {
      return <h4>I'm sorry, I don't think you've logged any activities yet</h4>
    } else {
      activities = JSON.parse(activities)
      return activities.map((activity, index) => {
        return (
          <li className={classes.activity} key={index}>
            <p className={classes.date}>{activity.date} -</p>
            <p className={classes.description}>{activity.description}</p>
            {activity.link && (
              <p>
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out!
                </a>
              </p>
            )}
          </li>
        );
      })
    }
  }

  return (
    <section className={classes.Journal}>
      <h2>My Journal</h2>
      <h3>Activities I've tried:</h3>
      <ul className={classes.activityList}>{makeActivityList()}</ul>
    </section>
  )
}

export default Journal;