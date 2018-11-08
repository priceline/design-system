import React from 'react'
import CloseIcon from 'pcln-icons/lib/Close'
import IconButton from './IconButton'
import theme from './theme'

const CloseButton = props => (
  <IconButton {...props}>
    <CloseIcon />
  </IconButton>
)

CloseButton.defaultProps = {
  title: 'close'
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
