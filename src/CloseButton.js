import React from 'react'
import IconButton from './IconButton'
import PropTypes from 'prop-types'

const CloseButton = props => (
  <IconButton
    {...props}
    style={{ height: `${props.size}px` }}
    legacy={false}
    name="close"
  />
)

CloseButton.defaultProps = {
  size: 24,
  title: 'close'
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
