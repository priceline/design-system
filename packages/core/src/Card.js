import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'
import { borderRadius } from 'styled-system'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0]
    },
    md: {
      'box-shadow': props.theme.boxShadows[1]
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2]
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3]
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = ({ borderWidth, color, borderColor, ...props }) => ({
  border:
    borderWidth === 0
      ? '0'
      : `${borderWidth}px solid ${getPaletteColor('base')({
          color: color || borderColor,
          ...props
        })}`
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius}
  ${applyVariations('Card')}
`

Card.propTypes = {
  ...borderRadius.propTypes,
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
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
