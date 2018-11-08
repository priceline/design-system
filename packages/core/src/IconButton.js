import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import theme from './theme'

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

const IconButton = props => (
  <TransparentButton {...props}>
    <div>{props.children}</div>
  </TransparentButton>
)

IconButton.displayName = 'IconButton'

IconButton.defaultProps = {
  theme: theme
}

export default IconButton
