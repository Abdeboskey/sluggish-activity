import React from 'react'

const ActivityPrompts = ({ solo, withOthers }) => {
  return (
    <>
      {!solo && !withOthers && (
        <h3>
          Would you like to do something by yourself<br />
          or would you like some company?
        </h3>
      )}
      {(solo || withOthers) && (
        <h3>What kind of activity would you like to do?</h3>
      )}
    </>
  )
}

export default ActivityPrompts