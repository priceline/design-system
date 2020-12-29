import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontWeight, borderRadius, } from 'styled-system';
import { Box } from '../Box'
import { deprecatedPropType } from '../utils';

const RatingBadge = styled(Box).attrs(({color, bg}) => ({
  bg: color ? "" : bg // TODO delete once we remove the bg prop
}))`
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
}

RatingBadge.propTypes = {
  ...fontWeight.propTypes,
  ...borderRadius.propTypes,
  bg: deprecatedPropType('color'),
  color: PropTypes.string
}

export default RatingBadge
