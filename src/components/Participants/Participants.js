import React from 'react'
import PropTypes from 'prop-types'
import classes from './Participants.module.scss'

const Participants = ({ solo, withOthers, selectParticipants }) => {
  return (
    <>
      <label htmlFor="solo">
        By Myself:
        <input
          className={classes.checkbox}
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
      <br />
    </>
  )
}

export default Participants

Participants.propTypes = {
  solo: PropTypes.bool,
  withOthers: PropTypes.bool,
  selectParticipants: PropTypes.func,
}