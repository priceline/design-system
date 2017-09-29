import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { theme } from '../'

const type = props => {
  switch(props.type) {
    case 'success':
      return {
        backgroundColor: theme.colors.green,
        color: theme.colors.white
      }
    case 'success-light':
      return {
        backgroundColor: theme.colors.green0,
        color: theme.colors.black
      }
    case 'warning':
      return {
        backgroundColor: theme.colors.red,
        color: theme.colors.white
      }
    case 'warning-light':
      return {
        backgroundColor: theme.colors.red0,
        color: theme.colors.black
      }
    case 'attention':
      return {
        backgroundColor: theme.colors.orange,
        color: theme.colors.white
      }
    case 'attention-light':
      return {
        backgroundColor: theme.colors.orange0,
        color: theme.colors.black
      }
    case 'information':
      return {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white
      }
    case 'information-light':
      return {
        backgroundColor: theme.colors.blue0,
        color: theme.colors.black
      }
    default:
      return {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white
      }
  }
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
  px:2,
  py:1
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Badge.propTypes = {
  type: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Badge.displayName = 'Badge'

export default Badge
