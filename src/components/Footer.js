import React from 'react'
import PropTypes from 'prop-types'
const Footer = props => (
  <footer>
    <p>Copyright {props.copyRight}</p>
  </footer>
)

Footer.propTypes = {
  copyRight: PropTypes.number.isRequired
}

export default Footer
