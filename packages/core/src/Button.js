import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, space, themeGet } from 'styled-system'
import { mapProps, deprecatedPropType, applyVariant } from './utils'

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

const variants = {
  primary: css`
    background-color: ${themeGet('palette.primary.base')};
    color: ${themeGet('palette.primary.contrast')};

    &:hover {
      background-color: ${themeGet('palette.primary.hover')};
    }
  `,
  secondary: css`
    background-color: ${themeGet('palette.secondary.base')};
    color: ${themeGet('palette.secondary.contrast')};

    &:hover {
      background-color: ${themeGet('palette.secondary.hover')};
    }
  `,
  outline: css`
    color: ${themeGet('palette.primary.base')};
    box-shadow: inset 0 0 0 2px ${themeGet('palette.primary.base')};
    background-color: transparent;

    &:hover {
      color: ${themeGet('palette.primary.hover')};
      box-shadow: inset 0 0 0 2px ${themeGet('palette.primary.hover')};
      background-color: transparent;
    }
  `,
  disabled: css`
    background-color: ${themeGet('colors.lightGray')};
    color: ${themeGet('palette.textPrimary')};
    cursor: default;

    &:hover {
      background-color: null;
    }
  `,
  negative: css`
    background-color: ${themeGet('palette.error')};
    color: ${themeGet('colors.white')};

    &:hover {
      background-color: ${themeGet('colors.darkRed')};
    }
  `
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

  ${applyVariant('Button', variants)}

  ${width} ${size} ${space};
`)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType('width'),
  variant: PropTypes.oneOf(Object.keys(variants))
}

Button.defaultProps = {
  variant: 'primary'
}

Button.displayName = 'Button'

export default Button
