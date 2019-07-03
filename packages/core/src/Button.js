import styled from 'styled-components'
import PropTypes from 'prop-types'
import { width, space } from 'styled-system'
import theme from './theme'
import createTheme from './createTheme'
import { mapProps, deprecatedPropType, getVariantStyle } from './utils'

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

const Button = mapProps(({ fullWidth, ...props }) => ({
  width: fullWidth ? 1 : undefined,
  ...props
}))(styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  border-width: 0;
  border-style: solid;

  &:disabled {
    opacity: 0.25;
  }
  
  ${getVariantStyle('button')}

  ${width} ${size} ${space};
`)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType('width'),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'disabled',
    'negative'
  ])
}

Button.defaultProps = {
  theme: createTheme(theme),
  variant: 'primary'
}

Button.displayName = 'Button'

export default Button
