import styled from 'styled-components'
import { space, width, color, responsiveStyle } from 'styled-system'
import PropTypes from 'prop-types'

const align = responsiveStyle('text-align', 'align')


function boxShadow(props) {
  const shadowColor = 'rgba(0,0,0,0.08)'
  const shadows = [
    `0 0 4px 0 ${shadowColor}`, 
    `0 8px 8px 0 ${shadowColor}`, 
    `0 16px 16px 0 ${shadowColor}`, 
    `0 32px 32px 0 ${shadowColor}`
  ]
  const boxShadows = {
    'small': {
      'box-shadow': shadows[0]
    },
    'medium': {
      'box-shadow': shadows.slice(0,2).join(", ")
    },
    'large': {
      'box-shadow': shadows.slice(0,3).join(", ")
    },
    'xlarge': {
      'box-shadow': shadows.join(", ")
    }
  }
  return boxShadows[props.boxShadowSize]
}

const Box = styled.div`
  ${space}
  ${width}
  ${color}
  ${align}
  ${boxShadow}
`

Box.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
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
  py: numberStringOrArray,
  /** Box Shadow */
  boxShadowSize: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'xlarge'
  ])
}

export default Box
