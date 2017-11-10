import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${props.theme.fontSizes[0]}px`, // 12px / 18
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '7px', // 18px + 14px = 32px
        paddingBottom: '7px'
      }
    case 'large':
      return {
        fontSize: `${props.theme.fontSizes[2]}px`, // 16px / 24
        paddingLeft: '22px',
        paddingRight: '22px',
        paddingTop: '12px', // 24px + 24px = 48px
        paddingBottom: '12px'
      }
    case 'medium':
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`, // 14px / 21
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '9.5px', // 21px + 19px = 40px
        paddingBottom: '9.5px'
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
  line-height: 1.5;
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

Button.displayName = 'Button'

export default Button
