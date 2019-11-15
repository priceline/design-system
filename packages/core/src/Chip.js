import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import Flex from './Flex'
import Text from './Text'
import { applyVariations, getPaletteColor } from './utils'

const variations = {
  outline: css`
    color: ${props =>
      getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    box-shadow: inset 0 0 0 1px
      ${props => getPaletteColor(props.disabled ? 'light' : 'base')(props)};

    &:hover {
      background-color: transparent;
      ${props =>
        props.disabled
          ? ''
          : `
        color: ${getPaletteColor('dark')(props)};
        box-shadow: inset 0 0 0 1px ${getPaletteColor('dark')(props)};
      `}
    }
  `,
  input: css`
    background: ${props => getPaletteColor('background.light')(props)};
    color: ${props => getPaletteColor('text.light')(props)};
  `
}
const ChipButton = styled(Button)`
  border-width: 1px;
  font-weight: 500;
  border-radius: ${props => props.borderRadius};

  ${props => (props.size === 'large' ? 'height: 56px;' : '')}

  ${applyVariations('Chip', variations)}
`

const ACTION_ICON_SIZES = {
  small: '16px',
  medium: '20px',
  large: '24px'
}

const BORDER_RADII = {
  small: '2px',
  medium: '4px',
  large: '6px'
}

function Chip(props) {
  const { actionIcon, size, description } = props
  let variation

  if (props.variation === 'choice') {
    variation = props.selected ? 'fill' : 'outline'
  } else if (props.variation === 'input') {
    variation = 'input'
  }

  return (
    <ChipButton
      {...props}
      variation={variation}
      px={3}
      py={!!description ? 0 : undefined}
      borderRadius={BORDER_RADII[size]}
    >
      <Flex flexDirection="column">
        <Flex align="center">
          {props.children}

          {!!actionIcon &&
            React.cloneElement(actionIcon, {
              size: ACTION_ICON_SIZES[size],
              ml: '12px'
            })}
        </Flex>
        {!!description && <Text fontSize={'12px'}>{description}</Text>}
      </Flex>
    </ChipButton>
  )
}

Chip.displayName = 'Chip'

Chip.defaultProps = {
  size: 'small'
}

Chip.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  actionIcon: PropTypes.node
}

export default Chip
