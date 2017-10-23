import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import IconButton from './IconButton'
import Heading from './Heading'
import { palette } from './theme'
import PropTypes from 'prop-types'

const StyledFlex = styled(Flex)`
  background-color: ${props => props.theme.palette[props.palette].backgroundColor};
  color: ${props => props.theme.palette[props.palette].color};
`

const StyledBox = styled(Box)`
  flex-basis: 100%;
`

const Banner = (props) => {
  const icon = palette[props.palette].icon

  return (
    <StyledFlex {...props} justify='space-between' align='center'>
      {!!icon && !!props.showIcon && <Icon name={icon} mr={3} size={28} />}
      <StyledBox align={props.textAlign}>
        <Heading.h5>
          {props.header}
        </Heading.h5>
        <Text.span fontSize={1}>
          {props.text}
        </Text.span>
      </StyledBox>
      {!!props.onClose && <IconButton name='closeLight' onClick={props.onClose} ml={3} size={14} />}
    </StyledFlex>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  palette: PropTypes.string,
  header: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  palette: 'default',
  textAlign: 'left',
  showIcon: true
}

export default Banner
