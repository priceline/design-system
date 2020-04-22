import React from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton'
import { Close } from 'pcln-icons'
import { refPropType } from './utils'

const CloseButton = props => (
  <IconButton {...props} icon={<Close size={props.size} />} />
)

CloseButton.defaultProps = {
  size: 24,
  title: 'close'
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  dsRef: refPropType,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
