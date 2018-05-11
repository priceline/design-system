import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'
import PropTypes from 'prop-types'
import theme from './theme'

const TransparentButton = styled(Button)`
  padding: 0;
  height: auto;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: transparent;
  }
`

const IconButton = ({ name, size, legacy, color, ...props }) => (
  <TransparentButton {...props}>
    <Icon name={name} size={size} color={color} legacy={legacy} />
  </TransparentButton>
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

IconButton.defaultProps = {
  theme: theme
}

export default IconButton
