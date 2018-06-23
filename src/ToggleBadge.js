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
    props.selected ? props.theme.colors.lightBlue : props.theme.colors.white};
  color: ${props => props.theme.colors.darkBlue};
  ${space};
  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`

ToggleBadge.displayName = 'ToggleBadge'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

ToggleBadge.propTypes = {
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
  theme: theme
}

export default ToggleBadge
