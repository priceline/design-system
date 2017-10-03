import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { theme } from '../'

function type (props) {
  const badgeColors = {
    'green': {
      backgroundColor: theme.colors.green,
      color: theme.colors.white
    },
    'green-light': {
      backgroundColor: theme.colors.green0,
      color: theme.colors.black
    },
    'red': {
      backgroundColor: theme.colors.red,
      color: theme.colors.white
    },
    'red-light': {
      backgroundColor: theme.colors.red0,
      color: theme.colors.black
    },
    'orange': {
      backgroundColor: theme.colors.orange,
      color: theme.colors.white
    },
    'orange-light': {
      backgroundColor: theme.colors.orange0,
      color: theme.colors.black
    },
    'blue': {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white
    },
    'blue-light': {
      backgroundColor: theme.colors.blue0,
      color: theme.colors.black
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
