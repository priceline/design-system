import styled from 'styled-components'
import { space, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const borders = props => {
  const borderColor = props.color
    ? getPaletteColor('base')(props)
    : getPaletteColor('border.base')(props)
  const focusColor = props.color
    ? borderColor
    : getPaletteColor('primary.base')(props)
  return {
    'border-color': borderColor,
    'box-shadow': `0 0 0 1px ${borderColor}`,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 2px ${focusColor}`
    }
  }
}

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.1')}px;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 0px;
  border-style: solid;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${themeGet('colors.gray')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
  ${applyVariations('Input')}
`

Input.displayName = 'Input'
Input.isField = true
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  ...borders.propTypes,
  ...space.propTypes
}

export default Input
