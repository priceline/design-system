import React from 'react'
import Box from './Box'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HugBanner = styled(Box)`
`

HugBanner.defaultProps = {
  iconName:
}

HugBanner.propTypes = {
  iconName: PropTypes.string,
  textNode: PropTypes.node
}

export default HugBanner
