import React from 'react'

const Participants = ({ solo, withOthers, selectParticipants }) => {
  return (
    <>
      <label htmlFor="solo">
        By Myself:
        <input
          name="solo"
          type="checkbox"
          checked={solo}
          onChange={() => selectParticipants("solo")}
        />
      </label>
      <br />
      <label htmlFor="withOthers">
        With Company:
        <input
          name="withOthers"
          type="checkbox"
          checked={withOthers}
          onChange={() => selectParticipants("withOthers")}
        />
      </label>
    </>
  )
}

export default Participants