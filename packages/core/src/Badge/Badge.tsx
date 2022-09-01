import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, borderRadius } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import {
  applySizes,
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
  borderRadiusAttrs,
} from '../utils'

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

const Badge = styled.div.attrs(borderRadiusAttrs)`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Badge')};
  ${space} ${type} ${color};

  ${borderRadius}
`

Badge.displayName = 'Badge'

Badge.propTypes = {
  ...space.propTypes,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
}

Badge.defaultProps = {
  size: 'medium',
  px: 2,
  py: 1,
  borderRadius: 'full',
}

export default Badge
