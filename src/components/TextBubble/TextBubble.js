import React, { useState } from 'react';
import classes from './TextBubble.module.scss'
import { getActivity } from '../../ApiCalls'

const TextBubble = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activity, setActivity] = useState({})
  const [form, setForm] = useState({
    solo: false,
    withOthers: false,
    type: ''
  })

  // to pass hook methods, maybe you need to build a local method that keeps it scoped here, and pass the new method?

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
            Would you like to do something by yourself <br />
            or would you like some company?
          </h3>}
          {(form.solo || form.withOthers) &&
          <h3>
            What kind of activity would you like to do?
          </h3>}
          <label htmlFor="solo">
            By Myself:
            <input
              name="solo"
              type="checkbox"
              checked={form.solo}
              onChange={() =>
                setForm({
                  ...form,
                  solo: !form.solo,
                  withOthers: false,
                })
              }
            />
          </label>
          <br />
          <label htmlFor="withOthers">
            With Company:
            <input
              name="withOthers"
              type="checkbox"
              checked={form.withOthers}
              onChange={() =>
                setForm({
                  ...form,
                  solo: false,
                  withOthers: !form.withOthers,
                })
              }
            />
          </label>
          <br />
          {(form.solo || form.withOthers) && (
            <label htmlFor="type">
              Type of Activity:
              <select 
                name="type" 
                value={form.type} 
                onChange={event => setForm({
                  ...form,
                  type: event.target.value
                })}>
                <option value="">Please choose one</option>
                <option value="any">Any</option>
                <option value="education">Education</option>
                <option value="recreational">Recreational</option>
                <option value="social">Social</option>
                <option value="diy">DIY</option>
                <option value="charity">Charity</option>
                <option value="cooking">Cooking</option>
                <option value="relaxation">Relaxation</option>
                <option value="music">Music</option>
                <option value="busywork">Busywork</option>
              </select>
            </label>
          )}
          <br />
          {form.type && <button type="submit">Suggest Activity</button>}
        </form>
      )}
      {loading && <p>hmmmmmm...</p>}
      {(activity.activity && !loading) &&
        <>
          <h3>What if you {activity.activity.toLowerCase()}?</h3>
          <button>Thanks! I'll try that.</button>
          {activity.activity.includes('stargazing') && 
            <button>Can we do that together?</button>}
          <button onClick={suggestActivity}>Can you suggest something else?</button>
          <button onClick={() => {
            setForm({
              solo: false,
              withOthers: false,
              type: "",
            })
            setActivity({})
          }}>Can I start over?</button>
        </>
      }
      {(activity.error || error.error )&& <h3>I'm sorry, {activity.error || error.error}</h3>}
    </section>
  );
}

export default TextBubble;