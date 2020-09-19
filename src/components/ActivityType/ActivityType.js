import React from 'react'
import PropTypes from 'prop-types'

const ActivityType = ({ solo, withOthers, type, selectType }) => {
  return (
    <>
      {solo &&
        <label htmlFor="type">
          Type of Activity:
          <select
            name="type"
            value={type}
            onChange={(event) => selectType(event)}
          >
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
      }
      {withOthers &&
        <label htmlFor="type">
          Type of Activity:
          <select
            name="type"
            value={type}
            onChange={(event) => selectType(event)}
          >
            <option value="">Please choose one</option>
            <option value="any">Any</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="cooking">Cooking</option>
            <option value="music">Music</option>
          </select>
        </label>
      }
      <br />
    </>
  )
}

export default ActivityType

ActivityType.propTypes = {
  solo: PropTypes.bool,
  withOthers: PropTypes.bool, 
  type: PropTypes.string,
  selectType: PropTypes.func,
}