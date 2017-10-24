import React from 'react'
import Flex from './Flex'
import Icon from './Icon'
import PropTypes from 'prop-types'

const HugBanner = (props) => (
  <Flex p={3}>
    <Icon mr={3} name={props.iconName} size={props.size} />
    {props.text}
  </Flex>
)

HugBanner.defaultProps = {
  iconName: 'star', // This should be a thumbs up
  size: 20
}

HugBanner.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default HugBanner
