import React from 'react'
import moment from 'moment'
import chalk_slug from '../../assets/chalk_slug.png'
import './ChalkSlug.scss'

const ChalkSlug = () => {
  return (
    <>
    <div className="slugjug">
      <img className="ChalkSlug" src={chalk_slug} alt="a chalk slug" />
    </div>
    </>
  );
}

export default ChalkSlug