import themeGet from '@styled-system/theme-get'
import React from 'react'
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

export const sizes = {
  captionSmall: css`
    ${themeGet('typography.caption')}
    padding: 2px 2px;
  `,
  captionMedium: css`
    ${themeGet('typography.caption')}
    padding: ${(props) => themeGet('space')(props)[1]};
  `,
  small: css`
    ${themeGet('typography.label')}
    padding: 3px 3px;
  `,
  medium: css`
    ${themeGet('typography.captionBold')}
    padding: ${(props) => themeGet('space')(props)[1]};
  `,
}

const letterSpacing = (props) => {
  return props.textTransform && props.textTransform !== 'uppercase'
    ? { letterSpacing: themeGet('letterSpacings.normal')(props) }
    : { letterSpacing: themeGet('letterSpacings.caps')(props) }
}

/**
 * @public
 */
export type BadgeProps = SpaceProps &
  React.HtmlHTMLAttributes<HTMLElement> & {
    size?: 'captionSmall' | 'captionMedium' | 'small' | 'medium'
    color?: string
    bg?: string
    borderRadius?: string
    colorScheme?: ColorSchemeName
    textTransform?: string
  }

/**
 * @public
 */
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

Badge.defaultProps = {
  size: 'medium',
  px: 2,
  borderRadius: 'full',
  textTransform: 'uppercase',
}

Badge.displayName = 'Badge'
