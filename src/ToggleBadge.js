import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space } from 'styled-system'
import theme from './theme'

const ToggleBadge = styled.div`
  border-radius: 2px;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: 600;
  background-color: ${props =>
    props.selected ? props.theme.colors[props.bg] : null};
  color: ${props => props.theme.colors[props.color]};
  ${space};
  &:hover {
    background-color: ${props => props.theme.colors[props.bg]};
  }
`

ToggleBadge.displayName = 'ToggleBadge'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

ToggleBadge.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
  px: numberStringOrArray,
  py: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray
}

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  theme: theme,
  color: 'darkBlue',
  bg: 'lightBlue'
}

export default ToggleBadge
