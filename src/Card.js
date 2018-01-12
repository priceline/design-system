import styled from 'styled-components'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'
import { borderRadius, propTypes } from 'styled-system'

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows.boxShadowSm
    },
    md: {
      'box-shadow': props.theme.boxShadows.boxShadowMd
    },
    lg: {
      'box-shadow': props.theme.boxShadows.boxShadowLg
    },
    xl: {
      'box-shadow': props.theme.boxShadows.boxShadowXl
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = props => ({
  border: `${props.borderWidth}px solid ${
    props.theme.colors[props.borderColor]
  }`
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
`

Card.propTypes = {
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: PropTypes.string,
  ...propTypes.borderRadius,
  borderWidth: PropTypes.oneOf([1, 2])
}

Card.defaultProps = {
  borderColor: 'borderGray',
  borderRadius: 1,
  borderWidth: 1,
  theme: theme
}

Card.displayName = 'Card'

export default Card
