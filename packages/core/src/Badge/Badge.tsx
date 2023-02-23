import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { applySizes, applyVariations, color, deprecatedColorValue, borderRadiusAttrs } from '../utils'
import { space, borderRadius, SpaceProps } from 'styled-system'

const type = (props) => {
  const badgeColors = {
    blue: {
      backgroundColor: props.theme.colors.blue,
      color: props.theme.colors.white,
    },
    lightBlue: {
      backgroundColor: props.theme.colors.lightBlue,
      color: props.theme.colors.darkBlue,
    },
    green: {
      backgroundColor: props.theme.colors.green,
      color: props.theme.colors.white,
    },
    lightGreen: {
      backgroundColor: props.theme.colors.lightGreen,
      color: props.theme.colors.darkGreen,
    },
    red: {
      backgroundColor: props.theme.colors.red,
      color: props.theme.colors.white,
    },
    lightRed: {
      backgroundColor: props.theme.colors.lightRed,
      color: props.theme.colors.darkRed,
    },
    orange: {
      backgroundColor: props.theme.colors.orange,
      color: props.theme.colors.text,
    },
    gray: {
      backgroundColor: props.theme.colors.gray,
      color: props.theme.colors.white,
    },
    lightGray: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.text,
    },
  }
  return !(props.bg && props.color) && (badgeColors[props.bg] || badgeColors.lightGray)
}

const sizes = {
  small: css`
    ${themeGet('textStyles.small')}
    line-height: ${themeGet('lineHeights.display')};
  `,
  medium: css`
    ${themeGet('textStyles.display0')}
    line-height: ${themeGet('lineHeights.standard')};
  `,
}

const badgeStyles = {
  primary: {
    backgroundColor: themeGet('palette.primary.base'),
    color: themeGet('palette.text.lightest'),
  },
  primaryLight: {
    backgroundColor: themeGet('palette.primary.light'),
    color: themeGet('palette.primary.base'),
  },
  primaryDark: {
    backgroundColor: themeGet('palette.primary.dark'),
    color: themeGet('palette.text.lightest'),
  },
  primaryDarkLight: {
    backgroundColor: themeGet('palette.primary.light'),
    color: themeGet('palette.primary.dark'),
  },
  secondary: {
    backgroundColor: themeGet('palette.secondary.base'),
    color: themeGet('palette.text.lightest'),
  },
  secondaryLight: {
    backgroundColor: themeGet('palette.secondary.light'),
    color: themeGet('palette.secondary.base'),
  },
  backgroundDarkest: {
    backgroundColor: themeGet('palette.background.darkest'),
    color: themeGet('palette.text.lightest'),
  },
  backgroundLightest: {
    backgroundColor: themeGet('palette.background.lightest'),
    color: themeGet('palette.text.base'),
  },
  neutral: {
    backgroundColor: themeGet('palette.background.dark'),
    color: themeGet('palette.text.lightest'),
  },
  neutralLight: {
    backgroundColor: themeGet('palette.background.base'),
    color: themeGet('palette.text.light'),
  },
  warning: {
    backgroundColor: themeGet('palette.warning.base'),
    color: themeGet('palette.text.lightest'),
  },
  warningLight: {
    backgroundColor: themeGet('palette.warning.light'),
    color: themeGet('palette.warning.base'),
  },
  highlight: {
    backgroundColor: themeGet('palette.highlight.light'),
    color: themeGet('palette.highlight.shade'),
  },
  notify: {
    backgroundColor: themeGet('palette.notify.light'),
    color: themeGet('palette.text.base'),
  },
  success: {
    backgroundColor: themeGet('palette.success.base'),
    color: themeGet('palette.text.lightest'),
  },
  successLight: {
    backgroundColor: themeGet('palette.success.light'),
    color: themeGet('palette.success.base'),
  },
}

export const badgeStyleValues = Object.keys(badgeStyles)

const badgeStyle = (props) => {
  return (
    !props.bg &&
    !props.color &&
    css`
      ${badgeStyles[props.badgeStyle] || {}}
    `
  )
}
export interface IBadgeProps extends SpaceProps, React.HtmlHTMLAttributes<HTMLElement> {
  size?: 'small' | 'medium'
  color?: string
  bg?: string
  borderRadius?: string
  badgeStyle?:
    | 'primary'
    | 'primaryLight'
    | 'primaryDark'
    | 'primaryDarkLight'
    | 'secondary'
    | 'secondaryLight'
    | 'backgroundDarkest'
    | 'backgroundLightest'
    | 'neutral'
    | 'neutralLight'
    | 'warning'
    | 'warningLight'
    | 'highlight'
    | 'notify'
    | 'success'
    | 'successLight'
}

const Badge: React.FC<IBadgeProps> = styled.div.attrs(borderRadiusAttrs)`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Badge')};
  ${space}
  ${type} 
  ${color}
  
  ${borderRadius}
  ${badgeStyle}
`

Badge.displayName = 'Badge'

Badge.propTypes = {
  ...space.propTypes,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
  borderRadius: PropTypes.string,
  badgeStyle: PropTypes.oneOf(badgeStyleValues),
}

Badge.defaultProps = {
  size: 'medium',
  px: 2,
  py: 1,
  borderRadius: 'full',
}

export default Badge
