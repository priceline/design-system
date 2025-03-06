import { Box, deprecatedColorValue } from 'pcln-design-system'
import React from 'react'
import styled from 'styled-components'

const HeaderBar = styled(Box)`
  height: 8px;
`

const SmallModalHeader = ({ bg = 'green', color = 'secondary.base' }) => <HeaderBar bg={bg} color={color} />

SmallModalHeader.displayName = SmallModalHeader

SmallModalHeader.propTypes = {
  bg: deprecatedColorValue(),
  color: deprecatedColorValue(),
}

export default SmallModalHeader
