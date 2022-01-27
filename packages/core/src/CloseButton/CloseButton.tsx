import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Close } from 'pcln-icons'

import { IconButton } from '../IconButton'

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string,
}

const CloseButton: React.FC<InferProps<typeof propTypes>> = (props) => (
  <IconButton {...props} icon={<Close size={props.size} />} />
)

CloseButton.defaultProps = {
  size: 24,
  title: 'close',
}

CloseButton.propTypes = {}

CloseButton.displayName = 'CloseButton'

export default CloseButton
