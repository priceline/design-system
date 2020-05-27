import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'
import { borderRadius } from 'styled-system'
import { shadow } from 'styled-system'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const boxShadow = props => {
  const boxShadows = {
    sm: props.theme.boxShadows[0],
    md: props.theme.boxShadows[1],
    lg: props.theme.boxShadows[2],
    xl: props.theme.boxShadows[3]
  }

  if (typeof props.boxShadowSize == 'string') {
    return {
      'box-shadow': boxShadows[props.boxShadowSize]
    }
  }

  return `
    @media only screen and (min-width: 520px) {
      box-shadow: ${boxShadows[props.boxShadowSize[0] || 'sm']}
    }
​
    @media only screen and (min-width: 768px) {
      box-shadow: ${boxShadows[props.boxShadowSize[1] || 'md']}
    }
​
    @media only screen and (min-width: 992px) {
      box-shadow: ${boxShadows[props.boxShadowSize[2] || 'lg']}
    }
​
    @media only screen and (min-width: 1200px)  {
      box-shadow: ${boxShadows[props.boxShadowSize[3] || 'xl']}
    }
  `
}

const boxBorder = ({ borderWidth, color, borderColor, ...props }) => ({
  border:
    borderWidth === 0
      ? '0'
      : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius}
  ${applyVariations('Card')}
`

Card.propTypes = {
  ...borderRadius.propTypes,
  boxShadowSize: PropTypes.oneOf([
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    PropTypes.arrayOf(PropTypes.oneOf(['sm', 'md', 'lg', 'xl']))
  ]),
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2])
}

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 1,
  borderWidth: 1
}

Card.displayName = 'Card'

export default Card
