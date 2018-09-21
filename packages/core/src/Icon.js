import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import icons from '../icons.json'
import theme from './theme'

const getPath = ({ name }) => icons[name]

const Svg = styled.svg`
  flex: none;
  ${space} ${color};
`

const Icon = ({ name, size, ...props }) => {
  const icon = getPath({ name })
  if (!icon) return false

  return (
    <Svg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={icon.path} />
    </Svg>
  )
}

Icon.displayName = 'Icon'

Icon.isIcon = true

Icon.defaultProps = {
  theme,
  name: 'checkLight',
  size: 24
}

const keys = Object.keys({
  ...icons
})

Icon.propTypes = {
  size: PropTypes.number,
  ...space.propTypes,
  ...color.propTypes,
  name: ({ name }) => {
    if (!keys.includes(name)) {
      return new Error(
        `Failed prop type: Invalid prop name of value '${name}' supplied to Icon, expected one of ${keys.toString()} is expected`
      )
    }
  }
}

export default Icon
