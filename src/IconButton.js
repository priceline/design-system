import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import PropTypes from 'prop-types'

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const IconButton = (props) => (
  <StyledIcon {...props} onClick={props.onClick} />
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  onClick: PropTypes.func
}

export default IconButton
