import React, { useState } from 'react'
import classes from './TextBubble.module.scss'
import { getActivity } from '../../ApiCalls'
import ActivityPrompts from '../ActivityPrompts/ActivityPrompts'
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
      solo: count === 'solo' ? !form.solo : false,
      withOthers: count === 'withOthers' ? !form.withOthers : false,
      type: ''
    })
  }
  
  const selectType = selection => {
    setForm({
      ...form,
      type: selection,
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
      <h2>Let's find an activity!</h2>
      {!activity.activity && (
        <form onSubmit={suggestActivity}>
          <ActivityPrompts solo={form.solo} withOthers={form.withOthers} />
          <Participants
            solo={form.solo}
            withOthers={form.withOthers}
            selectParticipants={selectParticipants}
          />
          <ActivityType
            solo={form.solo}
            withOthers={form.withOthers}
            type={form.type}
            selectType={selectType}
          />
          {form.type && 
            <button className={classes.submitBtn} type="submit">
              Suggest Activity
            </button>
          }
        </form>
      )}
      {loading && <p>hmmmmmm...</p>}
      {(activity.activity && !loading) && (
        <ActivityButtons 
          activity={activity.activity}
          suggestActivity={suggestActivity}
          startOver={startOver}
        />
      )}
      {(activity.error || error.error ) && (
        <h3>I'm sorry, {activity.error || error.error}</h3>
      )}
    </section>
  )
}

export default TextBubble;