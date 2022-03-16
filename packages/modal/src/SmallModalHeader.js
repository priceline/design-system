import { Box, deprecatedPropType } from 'pcln-design-system'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderBar = styled(Box)`
  height: 8px;
`

const SmallModalHeader = ({ bg, color }) => <HeaderBar bg={bg} color={color} />

SmallModalHeader.displayName = SmallModalHeader

SmallModalHeader.propTypes = {
  bg: deprecatedPropType('color'),
  color: PropTypes.string,
}

SmallModalHeader.defaultProps = {
  bg: 'green',
  color: 'secondary.base',
}

export default SmallModalHeader
