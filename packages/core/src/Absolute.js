import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import { responsiveStyle, style } from 'styled-system'

const top = responsiveStyle({
  prop: 'top',
  cssProperty: 'top',
  numberToPx: true
})

const bottom = responsiveStyle({
  prop: 'bottom',
  cssProperty: 'bottom',
  numberToPx: true
})

const left = responsiveStyle({
  prop: 'left',
  cssProperty: 'left',
  numberToPx: true
})

const right = responsiveStyle({
  prop: 'right',
  cssProperty: 'right',
  numberToPx: true
})

const zIndex = style({
  prop: 'zIndex',
  cssProperty: 'z-index',
  numberToPx: false
})

const Absolute = styled(Box)`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Absolute.propTypes = {
  top: numberStringOrArray,
  bottom: numberStringOrArray,
  left: numberStringOrArray,
  right: numberStringOrArray,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Absolute.displayName = 'Absolute'

export default Absolute
