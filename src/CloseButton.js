import React from 'react'
import IconButton from './IconButton'
import PropTypes from 'prop-types'
import theme from './theme'

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
  title: 'close',
  theme: theme
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
