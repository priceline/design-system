import React from 'react'
import styled from 'styled-components'
import { borderRadius, compose, fontWeight } from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'

/**
 * @public
 */
export type RatingBadgeProps = BoxProps & {
  bg?: string
  color?: string
  fontWeight?: string
}

function getBgAndColorProps({ color, bg }) {
  const defaultBg = 'alert'
  const defaultColor = 'alert'

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

const _RatingBadge: React.FC<RatingBadgeProps> = styled(Box).attrs((props) => ({
  ...getBgAndColorProps(props),
  ...borderRadiusAttrs(props),
}))`
  display: inline-block;
  line-height: 1.5;
  ${(props) => compose(fontWeight, borderRadius)(props)}
`

/**
 * @public
 */
export const RatingBadge: React.FC<RatingBadgeProps> = ({
  fontWeight = 'bold',
  px = 2,
  color = 'alert',
  borderRadius = 'md',
  bg = 'alert',
  ...props
}) => {
  return (
    <_RatingBadge
      fontWeight={fontWeight}
      px={px}
      color={color}
      borderRadius={borderRadius}
      bg={bg}
      {...props}
    />
  )
}
