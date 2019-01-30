import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'pcln-design-system'

const HeaderBar = styled(Box)`
  height: 8px;
`

const SmallModalHeader = ({ bg }) => <HeaderBar bg={bg} />

SmallModalHeader.displayName = SmallModalHeader

SmallModalHeader.propTypes = {
  bg: PropTypes.string
}

SmallModalHeader.defaultProps = {
  bg: 'green'
}

export default SmallModalHeader
