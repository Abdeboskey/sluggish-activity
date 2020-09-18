import React, { useState } from 'react';
import classes from './TextBubble.module.scss'
import { getActivity } from '../../ApiCalls'

const TextBubble = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activity, setActivity] = useState({})
  const [request, setRequest] = useState({
    solo: false,
    withOthers: false,
    type: ''
  })

  const suggestActivity = async (event) => {
    event.preventDefault()
    setLoading(true)
    const type = request.type === 'any' ? '' : request.type
    try {
      const activity = await getActivity(request.withOthers, type)
      setActivity({...activity})
    } catch (error) {
      setActivity({})
      setError(error.error)
    }
    setLoading(false)
  }

  return (
    <section className={classes.TextBubble}>
      <h2>Oh, Hi friend!</h2>
      {!activity.activity && (
        <form onSubmit={suggestActivity}>
          {(!request.solo && !request.withOthers) &&
          <h3>
            Would you like to do something by yourself <br />
            or would you like some company?
          </h3>}
          {(request.solo || request.withOthers) &&
          <h3>
            What kind of activity would you like to do?
          </h3>}
          <label htmlFor="solo">
            By Myself:
            <input
              name="solo"
              type="checkbox"
              checked={request.solo}
              onChange={() =>
                setRequest({
                  ...request,
                  solo: !request.solo,
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
              checked={request.withOthers}
              onChange={() =>
                setRequest({
                  ...request,
                  solo: false,
                  withOthers: !request.withOthers,
                })
              }
            />
          </label>
          <br />
          {(request.solo || request.withOthers) && (
            <label htmlFor="type">
              Type of Activity:
              <select 
                name="type" 
                value={request.type} 
                onChange={event => setRequest({
                  ...request,
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
          {request.type && <button type="submit">Suggest Activity</button>}
        </form>
      )}
      {loading && <p>hmmmmmm...</p>}
      {activity.activity && <h3>What if you {activity.activity}?</h3>}
      {(activity.error || error.error )&& <h3>I'm sorry, {activity.error || error.error}</h3>}
    </section>
  );
}

export default TextBubble;