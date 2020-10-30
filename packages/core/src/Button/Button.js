import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, space } from 'styled-system'
import {
  deprecatedPropType,
  applyVariations,
  getPaletteColor,
  getTextColorOn,
  deprecatedColorValue,
} from '../utils'

const size = (props) => {
  const smallSize = {
    fontSize: `${props.theme.fontSizes[0]}px`,
    padding: '7px 12px',
  }
  const mediumSize = {
    fontSize: `${props.theme.fontSizes[1]}px`,
    padding: '9.5px 18px',
  }
  const largeSize = {
    fontSize: `${props.theme.fontSizes[2]}px`,
    padding: '12px 22px',
  }

  switch (props.size) {
    case 'small':
      return smallSize

    case 'medium':
      return mediumSize

    case 'large':
      return largeSize

    default:
      return mediumSize
  }
}

const variations = {
  fill: css`
    background-color: ${(props) =>
      getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    color: ${(props) =>
      getTextColorOn(props.disabled ? 'light' : 'base')(props)};

    &:hover {
      background-color: ${(props) =>
        getPaletteColor(props.disabled ? 'light' : 'dark')(props)};
      ${(props) =>
        props.disabled ? '' : `color: ${getTextColorOn('dark')(props)};`}
    }
  `,
  outline: css`
    color: ${(props) =>
      getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    box-shadow: inset 0 0 0 2px
      ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      ${(props) =>
        props.disabled
          ? ''
          : `
        color: ${getPaletteColor('dark')(props)};
        box-shadow: inset 0 0 0 2px ${getPaletteColor('dark')(props)};
      `}
    }
  `,
  link: css`
    -webkit-font-smoothing: inherit;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${getPaletteColor('base')};
    line-height: ${(props) => props.theme.lineHeights.standard};
    vertical-align: inherit;
    padding: 0;
    background-color: transparent;
    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
}

export const buttonStyles = css`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: ${(props) => props.theme.radius};
  border-width: 0;
  border-style: solid;
  ${width} ${size} ${space};
  ${applyVariations('Button', variations)}

  &:disabled {
    cursor: not-allowed;
    color: ${getPaletteColor('text.light')};
    background-color: ${getPaletteColor('background.base')};
  }
`

/**
 * Use the <Button /> component to render a primitive button. Use the `variation` prop to change the look of the button.
 */
const Button = styled.button.attrs({
  width: ({ fullWidth, width }) => (fullWidth ? 1 : width),
  'aria-label': ({ title }) => title,
})`
  ${buttonStyles}
`

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType('width'),
  variation: PropTypes.oneOf(Object.keys(variations)),
  color: deprecatedColorValue(),
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  variation: 'fill',
}

Button.displayName = 'Button'

export default Button
