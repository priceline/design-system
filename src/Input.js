import styled, { keyframes } from 'styled-components'
import { space, theme, propTypes } from 'styled-system'
import PropTypes from 'prop-types'
import defaultTheme from './theme'

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.gray300
  const focusColor = color ? borderColor : theme.colors.primary
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

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: '7px 12px'
      }
    case 'medium':
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
    case 'large':
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: '12px 22px'
      }
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
  }
}

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: ${theme('fontSizes.1')}px;
  background-color: transparent;
  border-radius: ${theme('radius')};
  border-width: 0px;
  border-style: solid;
  border-color: ${theme('colors.gray300')};
  box-sizing: border-box;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${theme('colors.gray600')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${size};
`

Input.displayName = 'Input'
Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...propTypes.borders,
  ...propTypes.space
}

Input.defaultProps = {
  theme: defaultTheme
}

export default Input
