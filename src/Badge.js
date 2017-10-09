import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

function type (props) {
  const badgeColors = {
    'green': {
      backgroundColor: props.theme.colors.green,
      color: props.theme.colors.white
    },
    'lightGreen': {
      backgroundColor: props.theme.colors.green0,
      color: props.theme.colors.black
    },
    'red': {
      backgroundColor: props.theme.colors.red,
      color: props.theme.colors.white
    },
    'lightRed': {
      backgroundColor: props.theme.colors.red0,
      color: props.theme.colors.black
    },
    'orange': {
      backgroundColor: props.theme.colors.orange,
      color: props.theme.colors.white
    },
    'lightOrange': {
      backgroundColor: props.theme.colors.orange0,
      color: props.theme.colors.black
    },
    'blue': {
      backgroundColor: props.theme.colors.blue,
      color: props.theme.colors.white
    },
    'lightBlue': {
      backgroundColor: props.theme.colors.blue0,
      color: props.theme.colors.black
    }
  }

  return badgeColors[props.bg]
}

const Badge = styled.div`
  border-radius: 99999px; 
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: 600;
  ${type}
  ${space}
`

Badge.defaultProps = {
  px: 2,
  py: 1
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Badge.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Badge.displayName = 'Badge'

export default Badge
