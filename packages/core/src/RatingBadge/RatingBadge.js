import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontWeight, borderRadius, } from 'styled-system';
import { Box } from '../Box'

const RatingBadge = styled(Box)`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
`

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  bg: 'orange',
  borderRadius: 1,
}

RatingBadge.propTypes = {
  ...fontWeight.propTypes,
  ...borderRadius.propTypes,
  color: PropTypes.string
}

export default RatingBadge
