import React from 'react'
import IconButton from './IconButton'
import PropTypes from 'prop-types'

const CloseButton = props => <IconButton {...props} name="closeLight" />

CloseButton.defaultProps = {
  size: 14,
  title: 'close'
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
