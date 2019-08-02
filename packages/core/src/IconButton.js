import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'

const TransparentButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: transparent;
  }
  & > div {
    display: flex;
  }
`

const IconButton = ({ name, size, color, ...props }) => (
  <TransparentButton {...props}>
    <div>
      <Icon name={name} size={size} color={color} />
    </div>
  </TransparentButton>
)

IconButton.displayName = 'IconButton'

export default IconButton
