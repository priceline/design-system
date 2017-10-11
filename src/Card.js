import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'

function boxShadow(props) {

  const boxShadows = {
    'sm': {
      'box-shadow': props.theme.boxShadows[0]
    },
    'md': {
      'box-shadow': props.theme.boxShadows.slice(0,2).join(', ')
    },
    'lg': {
      'box-shadow': props.theme.boxShadows.slice(0,3).join(', ')
    },
    'xl': {
      'box-shadow': props.theme.boxShadows.join(', ')
    }
  }
  return boxShadows[props.boxShadowSize]
}

const Card = styled(Box)`
	${boxShadow}
`

Card.propTypes = {
	boxShadowSize: PropTypes.oneOf([
		'sm',
		'md',
		'lg',
		'xl'
    ])
}

export default Card