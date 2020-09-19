import React from 'react'

const ActivityButtons = ({ activity, suggestActivity, startOver }) => {
  return (
    <>
      <h3>What if you {activity.toLowerCase()}?</h3>
      <button>Thanks! I'll try that.</button>
      {activity.includes("stargazing") && (
        <button>Can we do that together?</button>
      )}
      <button onClick={suggestActivity}>Can you suggest something else?</button>
      <button onClick={startOver}>Can I start over?</button>
    </>
  )
}

export default ActivityButtons