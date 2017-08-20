import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, space } from 'styled-system'
import { theme, Icon } from './'

const size = props => 
  props.small 
    ? { 
        height: '32px',
        fontSize: `${theme.fontSizes[0]}px`,
        padding: '0 12px'
      }
    : (props.large
      ? {
          height: '48px',
          fontSize: `${theme.fontSizes[2]}px`,
          padding: '0 22px'
        }
      : (props.medium
        ? {
            height: '40px',
            fontSize: `${theme.fontSizes[1]}px`,
            padding: '0 18px'
          }
        : {
            height: '40px',
            fontSize: `${theme.fontSizes[1]}px`,
            padding: '0 18px'
          }
      ))

const bgColor = props =>
  props.primary 
    ? theme.colors.blue
    : (props.secondary 
      ? theme.colors.green
      : (props.error
        ? theme.colors.red
        : (props.bg
          ? props.bg
          : theme.colors.blue
      )))

const bgHover = props =>
  props.primary 
    ? theme.colors.blue1
    : (props.secondary 
      ? theme.colors.green1
      : (props.error
        ? theme.colors.red1
        : (props.bgHover
          ? props.bgHover
          : theme.colors.blue1
      )))

const color = props =>
  props.outline ? 
    { 
      color: bgColor(props),
      '&:hover': {
        color: bgHover(props),
      }
    } : {
      color: theme.colors.white,
      '&:hover': {
        color: theme.colors.white,
      }
    }

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${props => props.radius ? props.radius : '2px'};
  
  background-color: ${props => props.outline ? theme.colors.white : bgColor};
  border: ${props => props.outline ? `2px solid ${bgColor(props)}` : '0'};
  
  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    background-color: ${props => props.outline ? theme.colors.white : bgHover};
    border: ${props => props.outline ? `2px solid ${bgHover(props)}` : '0'};
  }

  width: ${props => props.fullWidth ? '100%' : 'initial' };

  ${color}
  ${size}
`
const StyledIcon = styled(Icon)`
  &:not(:last-child) {
    margin-right: 7px;
  }
  vertical-align: middle;
`

const Button = (props) => 
  <StyledButton {...props}>
    {
      props.icon ? 
        <StyledIcon
          color={color(props)}
          size={16}
          name={props.icon}
        />
      : null 
    }
    { props.children ? <span>{ props.children }</span> : null }
  </StyledButton>

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  bg: PropTypes.string,
  bgHover: PropTypes.string,
  radius: PropTypes.string,

  /** Size */
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  fullWidth: PropTypes.bool,

  /** Color */
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  error: PropTypes.bool,

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
