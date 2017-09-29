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
  height: 24px;
  line-height:24px;
  border-radius: 100px; 
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 8px;
  ${type}
  ${space}
`


Badge.propTypes = {
  type: PropTypes.string
}

Badge.displayName = 'Badge'

export default Badge
