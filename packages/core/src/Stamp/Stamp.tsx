import themeGet from '@styled-system/theme-get'
import React from 'react'
import styled, { css } from 'styled-components'
import {
  BorderRadiusProps,
  FontSizeProps,
  SpaceProps,
  borderRadius,
  compose,
  fontSize,
  space,
} from 'styled-system'
import type { ColorSchemeName } from '../theme'
import { borderRadiusAttrs } from '../utils/attrs'
import { applySizes, applyVariations, colorScheme, getPaletteColor, getTextColorOn } from '../utils/utils'

const sizes = {
  small: css`
    ${themeGet('textStyles.small')}
    line-height: ${themeGet('lineHeights.display')};
    min-height: 20px;
    & > svg {
      width: 12px;
      height: 12px;
    }
  `,
  medium: css`
    ${themeGet('textStyles.display0')}
    line-height: ${themeGet('lineHeights.standard')};
    min-height: 24px;
    & > svg {
      width: 14px;
      height: 14px;
    }
  `,
}

const variations = {
  outline: css`
    color: ${getPaletteColor('base')};
    border-color: ${(props) => getPaletteColor(props.borderColor, 'base')(props)};
    ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}
  `,
  fill: css`
    color: ${getTextColorOn('base')};
    background-color: ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  `,
  // todo: remove this copy of the fill variation in v4 as its name does not follow conventions
  solid: css`
    color: ${getTextColorOn('base')};
    background-color: ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  `,
}

/**
 * @public
 */
export type StampProps = SpaceProps &
  FontSizeProps &
  BorderRadiusProps & {
    bg?: string
    borderColor?: string
    children?: React.ReactNode
    color?: string
    size?: 'small' | 'medium'
    variation?: 'outline' | 'fill' | 'solid'
    colorScheme?: ColorSchemeName
  }

/**
 * @public
 */
export const Stamp: React.FC<StampProps> = styled.div.attrs(borderRadiusAttrs)`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  color: ${getPaletteColor('base')};

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Stamp', variations)};
  ${colorScheme}

  ${(props) => compose(space, fontSize, borderRadius)(props)}
`

Stamp.displayName = 'Stamp'

Stamp.defaultProps = {
  px: 1,
  py: 0,
  color: 'border.light',
  bg: 'background.light',
  borderColor: 'border.base',
  borderRadius: 'md',
  size: 'medium',
  variation: 'outline',
}
