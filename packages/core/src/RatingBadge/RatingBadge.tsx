import React from 'react'
import styled from 'styled-components'
import { borderRadius, compose, fontWeight } from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'

const defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  borderRadius: 'md',
  bg: 'alert',
}

/**
 * @public
 */
export type RatingBadgeProps = BoxProps & {
  bg?: string
  color?: string
  fontWeight?: string
}

function getBgAndColorProps({ color, bg }) {
  const { bg: defaultBg, color: defaultColor } = defaultProps

  if (bg && color && bg !== defaultBg && color !== defaultColor) {
    // bg and color
    return { bg, color }
  } else if (bg === defaultBg && color === defaultColor) {
    // no bg, no color
    return { bg: undefined, color }
  } else if (bg === defaultBg && color !== defaultColor) {
    // color, no bg
    return { bg: undefined, color }
  } else if (color === defaultColor) {
    // bg, no color
    return { color: bg, bg: undefined }
  }
}

/**
 * @public
 */
export const RatingBadge: React.FC<RatingBadgeProps> = styled(Box).attrs((props) => ({
  ...getBgAndColorProps(props),
  ...borderRadiusAttrs(props),
}))`
  display: inline-block;
  line-height: 1.5;
  ${(props) => compose(fontWeight, borderRadius)(props)}
`

RatingBadge.defaultProps = defaultProps
