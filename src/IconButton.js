import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'
import PropTypes from 'prop-types'

const StyledButton = styled(Button)`
  padding: 0;
  height: auto;
  background-color: transparent;
  color: currentcolor;

  hover: {
    background-color: transparent;
  }
`

const IconButton = props => (
  <StyledButton {...props} title={props.title} onClick={props.onClick}>
    <Icon name={props.name} size={props.size} color={props.color} />
  </StyledButton>
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default IconButton
