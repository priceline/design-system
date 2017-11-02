import styled from 'styled-components'
import { fontWeight, borderRadius, propTypes } from 'styled-system'
import Box from './Box'

const RatingBadge = styled(Box)`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
`

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'white',
  bg: 'orange',
  borderRadius: 2
}

RatingBadge.propTypes = {
  ...propTypes.fontWeight,
  ...propTypes.borderRadius
}

export default RatingBadge
