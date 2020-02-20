import React, { Component } from 'react'
import reactLogo from '../react-logo.png'
import PropTypes from 'prop-types'

const headerStyles = {
  background: 'black',
  color: 'orange',
  padding: 25
}

class Header extends Component {
  render() {
    const { title, subtitle, author, date } = this.props
    return (
      <header style={headerStyles} className='header-wrapper'>
        <img src={reactLogo} alt='react logo' />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>
          Instructor:{author.firstName} {author.lastName}
        </p>
        <p>{date}</p>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.objectOf(PropTypes.string).isRequired
}

Header.defaultProps = {
  title: 'Any title can be a title',
  subtitle: 'Any subtitle can a subtitle'
}

export default Header

console.log(React)
