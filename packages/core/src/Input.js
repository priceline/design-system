import styled from 'styled-components'
import { space, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import defaultTheme from './theme'
import { getPaletteColor } from './utils'

const borders = ({ color, theme, ...props }) => {
  const borderColor = color
    ? getPaletteColor('base')({ color, theme, ...props })
    : getPaletteColor('borders.base')({ theme, ...props })
  const focusColor = color
    ? borderColor
    : getPaletteColor('primary.base')({ theme, ...props })
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
  border-color: ${themeGet('colors.borderGray')};

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
`

Input.displayName = 'Input'
Input.isField = true
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...borders.propTypes,
  ...space.propTypes
}

Input.defaultProps = {
  theme: defaultTheme
}

export default Input
