import React, { useState } from 'react'
import classes from './TextBubble.module.scss'
import { getActivity } from '../../ApiCalls'
import Participants from '../Participants/Participants'
import ActivityType from '../ActivityType/ActivityType'
import ActivityButtons from '../ActivityButtons/ActivityButtons'

const TextBubble = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activity, setActivity] = useState({})
  const [form, setForm] = useState({
    solo: false,
    withOthers: false,
    type: ''
  })
  
  const selectParticipants = count => {
    setForm({
      ...form,
      solo: count === 'solo' ? true : false,
      withOthers: count === 'withOthers' ? true : false,
    })
  }
  
  const selectType = event => {
    setForm({
      ...form,
      type: event.target.value,
    })
  }
  
  const startOver = event => {
    event.preventDefault()
    setForm({
      solo: false,
      withOthers: false,
      type: '',
    })
    setActivity({})
  }

  const suggestActivity = async (event) => {
    event.preventDefault()
    setLoading(true)
    const type = form.type === 'any' ? '' : form.type
    try {
      const activity = await getActivity(form.withOthers, type)
      setTimeout(() => {
        setActivity({...activity})
        setLoading(false)
      }, 700)
    } catch (error) {
      setActivity({})
      setError(error.error)
    }
  }

  return (
    <section className={classes.TextBubble}>
      <h2>Oh, Hi friend!</h2>
      {!activity.activity && (
        <form onSubmit={suggestActivity}>
          {(!form.solo && !form.withOthers) &&
          <h3>
            Would you like to do something by yourself
            <br />
            or would you like some company?
          </h3>}
          {(form.solo || form.withOthers) &&
          <h3>
            What kind of activity would you like to do?
          </h3>}
          <Participants
            solo={form.solo}
            withOthers={form.withOthers}
            selectParticipants={selectParticipants}
          />
          {(form.solo || form.withOthers) && (
          <ActivityType type={form.type} selectType={selectType} />
          )}
          {form.type && <button type="submit">Suggest Activity</button>}
        </form>
      )}
      {loading && <p>hmmmmmm...</p>}
      {(activity.activity && !loading) &&
        <ActivityButtons 
          activity={activity.activity}
          suggestActivity={suggestActivity}
          startOver={startOver}
        />
      }
      {(activity.error || error.error )&& <h3>I'm sorry, {activity.error || error.error}</h3>}
    </section>
  )
}

export default TextBubble;