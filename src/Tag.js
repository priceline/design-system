import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from './theme'

const type = props => {
  const tagColors = {
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
  return tagColors[props.color]
}

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.disabled ? null : props.theme.colors.borderGray};
  ${space} ${type};
`

Tag.displayName = 'Tag'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Tag.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Tag.defaultProps = {
  px: 2,
  py: 1,
  theme: theme,
  color: 'text'
}

export default Tag
