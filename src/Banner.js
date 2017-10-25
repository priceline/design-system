import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import { palette } from './theme'
import PropTypes from 'prop-types'

const Banner = props => {
  const icon = props.iconName || palette[props.palette].icon

  return (
    <Box
      {...props}
      bg={palette[props.palette].backgroundColor}
      color={palette[props.palette].color}
    >
      <Flex justify="space-between" align="center">
        {!!icon &&
          !!props.showIcon && <Icon name={icon} mr={3} size={props.iconSize} />}
        <Box width={1} align={props.textAlign}>
          <Heading.h5>{props.header}</Heading.h5>
        </Box>
        {!!props.onClose && <CloseButton onClick={props.onClose} ml={3} />}
      </Flex>
      <Flex justify="space-between" align="center">
        <Box w={props.iconSize} mr={3} />
        <Box width={1} align={props.textAlign}>
          <Text.span fontSize={1}>{props.text}</Text.span>
        </Box>
      </Flex>
    </Box>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  palette: PropTypes.string,
  header: PropTypes.string,
  iconName: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  iconSize: 28,
  palette: 'lightGray',
  textAlign: 'left',
  showIcon: true
}

export default Banner
