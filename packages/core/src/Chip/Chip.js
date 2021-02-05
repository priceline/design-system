import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { ArrowRight } from 'pcln-icons'
import { getPaletteColor } from '../utils'
import { Box } from '../Box'
import { Label } from '../Label'
import { Text } from '../Text'

const ChipInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  width: 1px;
  height: 1px;
`

const ChipContent = styled(Box)`
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  color: ${getPaletteColor('base')};
  background-color: ${getPaletteColor('background.lightest')};
  border: 1px solid ${getPaletteColor('border.base')};
  border-radius: 2px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
    border: 1px solid ${getPaletteColor('base')(props)};
    background-color: ${getPaletteColor('light')(props)};
  `}

  ${(props) =>
    props.disabled
      ? `
      border: 1px solid transparent;
      background-color: ${getPaletteColor('background.light')(props)};
      color: ${getPaletteColor('text.light')(props)};
      cursor: default;
    `
      : `
      &:hover {
        border: 1px solid ${getPaletteColor('base')(props)};
        background-color: ${getPaletteColor('background.lightest')(props)};
      }
    `}
  ${space};
  ${fontSize};
`

const ChipLabel = styled(Label)`
  display: inline-flex;
  width: auto;
  user-select: none;
  padding: 0;
  margin: 0;

  > input:focus ~ ${ChipContent} {
    box-shadow: 0 0 0 1px ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  }
`

const evaluateFontSize = (size) => (size === 'md' ? 1 : 0)

const evaluateIconSize = (size) => (size === 'md' ? '24px' : '20px')

const evaluateChipHeight = (size) => (size === 'md' ? '38px' : '32px')

const getSize = (size, evaluate) =>
  typeof size === 'string' ? evaluate(size) : size.map((s) => evaluate(s))

const Chip = ({
  id,
  disabled,
  selected,
  children,
  onClick,
  label,
  Icon,
  facet,
  ActionIcon,
  image,
  size,
  bridgeLabel,
  ...props
}) => {
  const fontSize = getSize(size, evaluateFontSize)

  return (
    <ChipLabel htmlFor={id} {...props}>
      <ChipInput
        id={id}
        disabled={disabled}
        type='checkbox'
        role='checkbox'
        checked={selected}
        onChange={onClick}
      />
      <ChipContent
        height={!children && getSize(size, evaluateChipHeight)}
        disabled={disabled}
        selected={selected}
        size={size}
        {...props}
      >
        {children}
        {image}
        {!!Icon && <Icon size={getSize(size, evaluateIconSize)} />}
        {!!label && (
          <Text fontSize={fontSize} regular ml={!!Icon || !!image ? 2 : 0}>
            {label}
          </Text>
        )}
        {!!facet && (
          <Text fontSize={fontSize} regular ml={1}>
            {facet}
          </Text>
        )}
        {!!bridgeLabel && <ArrowRight size='16px' ml={2} />}
        {!!bridgeLabel && (
          <Text fontSize={fontSize} regular ml={2}>
            {bridgeLabel}
          </Text>
        )}
        {!!ActionIcon && <ActionIcon size='16px' ml={2} />}
      </ChipContent>
    </ChipLabel>
  )
}

Chip.displayName = 'Chip'

Chip.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  Icon: PropTypes.node,
  ActionIcon: PropTypes.node,
  Image: PropTypes.object,
  bridgeLabel: PropTypes.string,
}

Chip.defaultProps = {
  size: 'sm',
  color: 'primary',
  px: 2,
  py: 1,
  m: 0,
}

export default Chip
