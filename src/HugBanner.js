import React from 'react'
import Box from './Box'
import Icon from './Icon'
import PropTypes from 'prop-types'

const HugBanner = (props) => (
  <Box>
    <Icon name={props.iconName} />
    {props.textNode}
  </Box>
)

HugBanner.defaultProps = {
  iconName: 'star'
}

HugBanner.propTypes = {
  iconName: PropTypes.string,
  textNode: PropTypes.node
}

export default HugBanner
