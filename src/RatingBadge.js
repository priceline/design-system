import styled from 'styled-components'
import { fontWeight, borderRadius, propTypes } from 'styled-system'
import Box from './Box'
import theme from './theme'

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
  borderRadius: 1,
  theme: theme
}

RatingBadge.propTypes = {
  ...propTypes.fontWeight,
  ...propTypes.borderRadius
}

export default RatingBadge
