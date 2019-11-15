import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import CloseButton from './CloseButton'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { applyVariations, hasPaletteColor, deprecatedColorValue } from './utils'
import {
  Attention as AttentionIcon,
  Information as InformationIcon,
  Success as SuccessIcon,
  Warning as WarningIcon
} from 'pcln-icons'

const bannerColors = {
  green: {
    backgroundColor: 'green',
    color: 'white',
    icon: <SuccessIcon />
  },
  lightGreen: {
    backgroundColor: 'lightGreen',
    color: 'darkGreen',
    icon: <SuccessIcon />
  },
  red: {
    backgroundColor: 'red',
    color: 'white',
    icon: <WarningIcon />
  },
  lightRed: {
    backgroundColor: 'lightRed',
    color: 'darkRed',
    icon: <WarningIcon />
  },
  orange: {
    backgroundColor: 'orange',
    color: 'white',
    icon: <AttentionIcon />
  },
  blue: {
    backgroundColor: 'blue',
    color: 'white',
    icon: <InformationIcon />
  },
  lightBlue: {
    backgroundColor: 'lightBlue',
    color: 'darkBlue',
    icon: <InformationIcon />
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
  const Icon = props.icon || bannerColor.icon
  const color =
    hasPaletteColor(props) || !bannerColor.color
      ? props.color
      : bannerColor.color
  const header = React.isValidElement(props.header) ? (
    props.header
  ) : (
    <Text textStyle="display2">{props.header}</Text>
  )

  return (
    <StyledBox
      {...props}
      bg={bannerColor.backgroundColor || props.bg}
      color={color}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        {!!Icon &&
          !!props.showIcon &&
          React.cloneElement(Icon, { mr: 2, size: 24, mt: '-2px' })}
        <Box textAlign={props.textAlign} width={1}>
          {props.header && header}
          <Text.span fontSize={1}>{props.text}</Text.span>
          {props.children}
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
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
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
