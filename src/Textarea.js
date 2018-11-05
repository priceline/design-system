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

const Textarea = styled.textarea`
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

  resize: none;
  ::placeholder {
    color: ${theme('colors.gray600')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
`

Textarea.displayName = 'Textarea'
Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...propTypes.borders,
  ...propTypes.space
}

Textarea.defaultProps = {
  theme: defaultTheme
}

export default Textarea
