import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { fontWeight, borderRadius } from 'styled-system'
import { Box } from '../Box'
import { deprecatedPropType, borderRadiusAttrs } from '../utils'

const defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  bg: 'orange',
  borderRadius: 'md',
}

const propTypes = {
  ...fontWeight.propTypes,
  bg: deprecatedPropType('color'),
  color: PropTypes.string,
}

// TODO remove once we delete deprecated bg prop
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
  } else if (bg !== defaultBg && color === defaultColor) {
    // bg, no color
    return { color: bg, bg: undefined }
  }
}

const RatingBadge: React.FC<InferProps<typeof propTypes>> = styled(Box).attrs((props) => ({
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
