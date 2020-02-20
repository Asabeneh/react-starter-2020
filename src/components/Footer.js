import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright {this.props.copyRight}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  copyRight: PropTypes.number.isRequired
}

export default Footer
