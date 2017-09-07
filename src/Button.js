import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, space } from 'styled-system'
import { theme } from '../'

const size = props => {
  switch(props.size) {
    case 'small':
      return {
        height: '32px',
        fontSize: `${theme.fontSizes[0]}px`,
        padding: '0 12px'
      }
    case 'medium':
      return {
        height: '40px',
        fontSize: `${theme.fontSizes[1]}px`,
        padding: '0 18px'
      }
    case 'large':
      return {
        height: '48px',
        fontSize: `${theme.fontSizes[2]}px`,
        padding: '0 22px'
      }
    default:
      return {
        height: '40px',
        fontSize: `${theme.fontSizes[1]}px`,
        padding: '0 18px'
      }
  }
}

const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${props => props.radius ? props.radius : '2px'};
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;

  &:hover {
    background-color: ${props => props.theme.colors.blue1};
  }

  &:disabled {
    opacity: 0.25;
  }

  width: ${props => props.fullWidth ? '100%' : 'initial' };

  ${size}
`

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  radius: PropTypes.string,

  /** Size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,

  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Button.displayName = 'Button'

export default Button
