import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { Close as CloseIcon } from 'pcln-icons'
import { getPaletteColor } from '../utils'
import { Box } from '../Box'
import { Label } from '../Label'

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
        background-color: ${getPaletteColor('background.light')(props)};
      }
    `}

  & > svg {
    width: 20px;
    height: 20px;

    ${(props) =>
      props.selected &&
      `
      &:last-child {
          width: 16px;
          height: 16px;
      }
    `}
  }

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
    background-color: ${getPaletteColor('background.base')};
    border: 1px solid ${getPaletteColor('base')};
  }
`

function Chip({
  id,
  disabled,
  selected,
  selectedIcon,
  children,
  onClick,
  ...props
}) {
  const SelectedIcon = selectedIcon || CloseIcon

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
      <ChipContent disabled={disabled} selected={selected} {...props}>
        {children}
        {selected && <SelectedIcon title='Close' ml={2} />}
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
  selectedIcon: PropTypes.node,
}

Chip.defaultProps = {
  color: 'primary',
  px: 2,
  py: 1,
  m: 0,
}

export default Chip
