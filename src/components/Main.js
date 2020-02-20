import React from 'react'
import PropTypes from 'prop-types'
const Main = ({ techs }) => {
  const techsList = techs.map(tech => <li key={'key-' + tech}>{tech}</li>)
  return (
    <main>
      <p>Prerequisite to get started React</p>
      <ul>{techsList}</ul>
    </main>
  )
}

Main.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Main
