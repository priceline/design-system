import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'
import theme from './theme'

const getColorCombination = props => {
  const StampColors = {
    gray: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.gray
    },
    blue: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.blue
    },
    green: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.green
    },
    red: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.red
    },
    orange: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.orange
    },
    purple: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.purple
    }
  }
  return StampColors[props.color]
}

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.disabled ? null : props.theme.colors.borderGray};
  ${space} ${fontSize} ${color};
`

Stamp.displayName = 'Stamp'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Stamp.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  theme: theme,
  color: 'gray',
  bg: 'lightGray',
  fontSize: 0
}

export default Stamp
