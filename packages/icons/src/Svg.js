import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')(
  {
    flex: 'none'
  },
  space,
  color
)

Svg.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

const Icon = ({ size, ...props }) => (
  <Svg {...props} width={size} height={size} fill="currentcolor" />
)

Icon.defaultProps = {
  size: 24
}

export default Icon
