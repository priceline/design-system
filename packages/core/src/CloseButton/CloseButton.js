import React from 'react'
import PropTypes from 'prop-types'
import { Close } from 'pcln-icons'
import { refPropType } from '../utils'

import { IconButton } from '../IconButton'

const CloseButton = (props) => (
  <IconButton {...props} icon={<Close size={props.iconSize} />} />
)

CloseButton.defaultProps = {
  iconSize: 24,
  title: 'close',
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  iconSize: PropTypes.number,
  dsRef: refPropType,
  title: PropTypes.string,
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
