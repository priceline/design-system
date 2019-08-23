import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { applyVariations, hasPaletteColor, deprecatedColorValue } from './utils'

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

const StyledBox = styled(Box)`
  ${applyVariations('Banner')}
`

const Banner = props => {
  const bannerColor =
    bannerColors[
      !props.bg && props.color === 'green' ? props.color : props.bg
    ] || {}
  const icon = props.iconName || bannerColor.icon
  const color =
    hasPaletteColor(props) || !bannerColor.color
      ? props.color
      : bannerColor.color

  return (
    <StyledBox
      {...props}
      bg={bannerColor.backgroundColor || props.bg}
      color={color}
    >
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
    </StyledBox>
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
  color: deprecatedColorValue(),
  bg: deprecatedColorValue()
}

Banner.defaultProps = {
  textAlign: 'left',
  showIcon: true,
  color: 'green'
}

export default withTheme(Banner)
