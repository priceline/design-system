import styled from 'styled-components'
import { space, width, borderColor } from 'styled-system'
import PropTypes from 'prop-types'

const Divider = styled.hr`
  ${space}
  ${width}
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  ${borderColor}
`

Divider.displayName = 'Divider'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Divider.propTypes = {
  borderColor: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

export default Divider
