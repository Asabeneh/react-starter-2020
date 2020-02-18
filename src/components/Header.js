import React from 'react'

const Header = ({ title, subtitle, authorFirstName, authorLastName, date }) => (
  <header>
    <div className='header-wrapper'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <p>Date: {date} </p>
    </div>
  </header>
)

export default Header
