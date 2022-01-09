import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontWeight } from 'styled-system'
import { Box } from '../Box'
import { deprecatedPropType } from '../utils'

// TODO remove once we delete deprecated bg prop
function getBgAndColorProps(color, bg) {
  const { bg: defaultBg, color: defaultColor } = RatingBadge.defaultProps
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

const RatingBadge = styled(Box).attrs(({ color, bg }) => ({
  ...getBgAndColorProps(color, bg),
}))`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight};
`

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  bg: 'orange',
  borderRadius: 'xsm',
}

RatingBadge.propTypes = {
  ...fontWeight.propTypes,
  bg: deprecatedPropType('color'),
  color: PropTypes.string,
}

export default RatingBadge
