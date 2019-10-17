import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'
import { applyVariations } from './utils'

const TransparentButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: transparent;
    color: inherit;
  }
  & > div {
    display: flex;
  }

  ${applyVariations('IconButton')}
`

const IconButton = ({ name, size, color, ...props }) => (
  <TransparentButton {...props}>
    <div>
      <Icon
        name={name}
        size={size}
        color={color}
        title={props.title}
        desc={props.desc}
        titleId={props.titleId}
        descId={props.descId}
      />
    </div>
  </TransparentButton>
)

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

export default IconButton
