import themeGet from '@styled-system/theme-get'
import styled, { css } from 'styled-components'
import { SpaceProps, borderRadius, compose, space } from 'styled-system'
import type { ColorSchemeName } from '../theme/theme'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
import { applySizes, applyVariations, color, colorScheme, textTransform } from '../utils/utils'

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

const letterSpacing = (props) => {
  return props.textTransform && props.textTransform !== 'uppercase'
    ? { letterSpacing: themeGet('letterSpacings.normal')(props) }
    : { letterSpacing: themeGet('letterSpacings.caps')(props) }
}

export type BadgeProps = SpaceProps &
  React.HtmlHTMLAttributes<HTMLElement> & {
    size?: 'small' | 'medium'
    color?: string
    bg?: string
    borderRadius?: string
    colorScheme?: ColorSchemeName
    textTransform?: string
  }

export const Badge: React.FC<BadgeProps> = styled.div.attrs(borderRadiusAttrs)`
  display: inline-block;
  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Badge')};
  ${type}
  ${color}
  ${colorScheme}
  ${textTransform}
  ${letterSpacing}

  ${(props) => compose(space, borderRadius)(props)}
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  size: 'medium',
  px: 2,
  py: 1,
  borderRadius: 'full',
  textTransform: 'uppercase',
}
