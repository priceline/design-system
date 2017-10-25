import React from 'react'
import Box from './Box'
import Flex from './Flex'
import PropTypes from 'prop-types'

const BannerRow = props => (
  <Flex justify="space-between" align="center">
    {!!props.showIcon && props.icon}
    <Box width={1} align={props.textAlign}>
      {props.text}
    </Box>
    {!!props.showCloseButton && props.closeButton}
  </Flex>
)

BannerRow.displayName = 'BannerRow'

BannerRow.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.text,
  closeButton: PropTypes.node,
  showIcon: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  textAlign: PropTypes.string
}

export default BannerRow
