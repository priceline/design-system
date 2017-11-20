import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import theme from './theme'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        height: '32px',
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: '0 12px'
      }
    case 'medium':
      return {
        height: '40px',
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '0 18px'
      }
    case 'large':
      return {
        height: '48px',
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: '0 22px'
      }
    default:
      return {
        height: '40px',
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '0 18px'
      }
  }
}

const fullWidth = props => (props.fullWidth ? { width: '100%' } : null)

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkBlue};
  }

  ${fullWidth} ${space} ${size};
`

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
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

Button.defaultProps = {
  theme: theme
}

Button.displayName = 'Button'

export default Button
