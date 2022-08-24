import React from 'react'
import styled from 'styled-components'
import { InferProps } from 'prop-types'
import { fontWeight, borderRadius } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { Box } from '../Box'
import { deprecatedColorValue, borderRadiusAttrs } from '../utils'

const defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  borderRadius: 'md',
  bg: 'alert',
}

const ratingBadgePropTypes = {
  ...Box.propTypes,
  fontWeight: propTypes.typography.fontWeight,
  bg: deprecatedColorValue(),
  color: deprecatedColorValue(),
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

const RatingBadge: React.FC<InferProps<typeof ratingBadgePropTypes>> = styled(Box).attrs((props) => ({
  ...getBgAndColorProps(props),
  ...borderRadiusAttrs(props),
}))`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
`

RatingBadge.defaultProps = defaultProps
RatingBadge.propTypes = propTypes

export default RatingBadge
