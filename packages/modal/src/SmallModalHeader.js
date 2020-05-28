import React from 'react'
import styled from 'styled-components'
import { Box, deprecatedPropType } from 'pcln-design-system'

const HeaderBar = styled(Box)`
  height: 8px;
`

const SmallModalHeader = ({ bg }) => <HeaderBar bg={bg} />

SmallModalHeader.displayName = SmallModalHeader

SmallModalHeader.propTypes = {
  bg: deprecatedPropType('color'),
}

SmallModalHeader.defaultProps = {
  bg: 'green',
}

export default SmallModalHeader
