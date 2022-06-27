import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

import { Button } from '../Button'
import { applyVariations, getPaletteColor, getTextColorOn } from '../utils'

const variations = {
  fill: css`
    background-color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    color: ${(props) => getTextColorOn(props.disabled ? 'light' : 'base')(props)};

    &:hover {
      background-color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'dark')(props)};
      ${(props) => (props.disabled ? '' : `color: ${getTextColorOn('dark')(props)};`)}
    }
    &:focus {
      outline: ${(props) => `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) => ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
  outline: css`
    color: ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    box-shadow: inset 0 0 0 2px ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      ${(props) =>
        props.disabled
          ? ''
          : `
      color: ${getPaletteColor('dark')(props)};
      box-shadow: inset 0 0 0 2px ${getPaletteColor('dark')(props)};
    `}
    }
  `,
  plain: css`
    background-color: transparent;
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  subtle: css`
    background-color: ${getPaletteColor('background.base')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  white: css`
    background-color: ${getPaletteColor('background.lightest')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  lightFill: css`
    background-color: ${getPaletteColor('primary.light')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: ${(props) => `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) => ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
}

const getPadding = (containerSize) => {
  switch (containerSize) {
    case 'small':
      return '8px'
    case 'medium':
      return '10px'
    case 'large':
      return '12px'
    case 'xlarge':
      return '16px'
    default:
      return '10px'
  }
}

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
  &:disabled {
    background-color: transparent;
  }
  ${applyVariations('IconButton', variations)}

  padding: ${(props) => getPadding(props.containerSize)};
`

const propTypes = {
  icon: PropTypes.node,
}

const IconButton: React.FC<InferProps<typeof propTypes>> = React.forwardRef(({ icon, ...props }, ref) => {
  return (
    <TransparentButton {...props} ref={ref}>
      <div>{icon}</div>
    </TransparentButton>
  )
})

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.defaultProps = {
  variation: 'plain',
  containerSize: 'medium',
}

IconButton.propTypes = propTypes

export default IconButton
