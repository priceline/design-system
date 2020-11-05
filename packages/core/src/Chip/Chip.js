import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import { applyVariations, getPaletteColor } from '../utils'
import { Close as CloseIcon } from 'pcln-icons'

const variations = {
  choice: css`
    ${(props) =>
      props.selected &&
      `
            border: 1px solid ${getPaletteColor('base')(props)};
            background-color: ${getPaletteColor('base')(props)};
            color: ${getPaletteColor('text.lightest')(props)};

            &:hover {
                border: 1px solid ${getPaletteColor('dark')(props)};
                background-color: ${getPaletteColor('dark')(props)};
            }
        `}
  `,
  filter: css`
    ${(props) =>
      props.selected &&
      `
            border: 1px solid ${getPaletteColor('base')(props)};
            background-color: ${getPaletteColor('light')(props)};
        `}
  `,
  input: css`
    border: 1px solid ${getPaletteColor('border.base')};
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.light')};

    &:hover:not(:disabled) {
      border: 1px solid ${getPaletteColor('border.dark')};
      background-color: ${getPaletteColor('background.base')};
      color: ${getPaletteColor('text.base')};
    }
  `,
}

const StyledChip = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: ${themeGet('fontSizes.0')}px;
  color: ${getPaletteColor('base')};
  border: 1px solid ${getPaletteColor('border.base')};
  background-color: ${getPaletteColor('background.lightest')};
  border-radius: 2px;
  cursor: pointer;
  font-family: Montserrat;

  &:hover {
    border: 1px solid ${getPaletteColor('base')};
    background-color: ${getPaletteColor('background.light')};
  }

  &:disabled {
    border: 1px solid transparent;
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.light')};
    cursor: not-allowed;
  }

  & > svg {
    width: 20px;
    height: 20px;

    ${(props) =>
      props.selected &&
      (props.variation === 'filter' || props.variation === 'input') &&
      `
            &:last-child {
                width: 16px;
                height: 16px;
            }
        `}
  }

  ${space};
  ${fontSize};
  ${applyVariations('Chip', variations)}
`

function Chip({ selected, variation, children, ...props }) {
  return (
    <StyledChip selected={selected} variation={variation} {...props}>
      {children}
      {selected && (variation === 'filter' || variation === 'input') && (
        <CloseIcon ml={2} size={16} />
      )}
    </StyledChip>
  )
}

Chip.displayName = 'Chip'

Chip.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

Chip.defaultProps = {
  variation: 'filter',
  color: 'primary',
  px: 2,
  py: 1,
}

export default Chip
