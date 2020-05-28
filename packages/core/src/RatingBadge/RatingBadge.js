import styled from 'styled-components'
import { fontWeight, borderRadius } from 'styled-system'
import { Box } from '../Box'
import { applyVariations, deprecatedPropType } from '../utils'

const RatingBadge = styled(Box)`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
  ${applyVariations('RatingBadge')}
`

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'white',
  bg: 'orange',
  borderRadius: 1,
}

RatingBadge.propTypes = {
  ...fontWeight.propTypes,
  ...borderRadius.propTypes,
  bg: deprecatedPropType('color'),
}

export default RatingBadge
