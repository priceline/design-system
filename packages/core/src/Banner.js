import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { hasPaletteColor } from './utils'

const bannerColors = {
  green: {
    backgroundColor: 'green',
    color: 'white',
    icon: 'success'
  },
  lightGreen: {
    backgroundColor: 'lightGreen',
    color: 'darkGreen',
    icon: 'success'
  },
  red: {
    backgroundColor: 'red',
    color: 'white',
    icon: 'warning'
  },
  lightRed: {
    backgroundColor: 'lightRed',
    color: 'darkRed',
    icon: 'warning'
  },
  orange: {
    backgroundColor: 'orange',
    color: 'white',
    icon: 'attention'
  },
  blue: {
    backgroundColor: 'blue',
    color: 'white',
    icon: 'information'
  },
  lightBlue: {
    backgroundColor: 'lightBlue',
    color: 'darkBlue',
    icon: 'information'
  }
}

const Banner = props => {
  const bannerColor = bannerColors[props.bg] || {}
  const icon = props.iconName || bannerColor.icon
  const color =
    hasPaletteColor(props) || !bannerColor.color
      ? props.color
      : bannerColor.color

  return (
    <Box {...props} bg={bannerColor.backgroundColor || props.bg} color={color}>
      <Flex justifyContent="space-between" alignItems="flex-start">
        {!!icon && !!props.showIcon && (
          <Icon name={icon} mr={2} size={24} mt="-2px" />
        )}
        <Box width={1}>
          <Text textAlign={props.textAlign}>
            <Heading.h5 textStyle="display2">{props.header}</Heading.h5>
            <Text.span fontSize={1}>{props.text}</Text.span>
            {props.children}
          </Text>
        </Box>
        {!!props.onClose && (
          <CloseButton
            onClick={props.onClose}
            ml={2}
            size={24}
            title="close"
            mt="-2px"
          />
        )}
      </Flex>
    </Box>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  header: PropTypes.string,
  iconName: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.node,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string
}

Banner.defaultProps = {
  bg: 'green',
  textAlign: 'left',
  showIcon: true,
  color: 'green'
}

export default withTheme(Banner)
