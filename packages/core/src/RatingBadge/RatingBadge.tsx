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
  borderRadius: 'md',
}

const propTypes = {
  ...Box.propTypes,
  ...fontWeight.propTypes,
  bg: deprecatedPropType('color'),
  color: PropTypes.string,
}

function getBgAndColorProps({ color, bg }) {
  if (bg && color === 'alert') {
    return { bg: undefined, color: bg }
  }
  return { bg, color }
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
