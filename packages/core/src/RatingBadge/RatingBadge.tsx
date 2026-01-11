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

const StyledRatingBadge = styled(Box).attrs<RatingBadgeProps>((props) => ({
  ...getBgAndColorProps(props),
  ...borderRadiusAttrs(props),
}))<RatingBadgeProps>`
  display: inline-block;
  line-height: 1.5;
  ${(props) => compose(fontWeight, borderRadius)(props)}
`

/**
 * A compact badge for displaying numerical ratings or scores.
 *
 * Renders a small rounded badge with bold text, typically for hotel/product ratings.
 * Supports `color` for semantic styling or `colorScheme` for themed palettes.
 * Default styling uses alert color with white text.
 *
 * @public
 */
export const RatingBadge = React.forwardRef<HTMLDivElement, RatingBadgeProps>(
  ({ fontWeight = 'bold', px = 2, color = 'alert', borderRadius = 'md', bg = 'alert', ...props }, ref) => (
    <StyledRatingBadge
      ref={ref}
      fontWeight={fontWeight}
      px={px}
      color={color}
      borderRadius={borderRadius}
      bg={bg}
      {...props}
    />
  )
)
RatingBadge.displayName = 'RatingBadge'
