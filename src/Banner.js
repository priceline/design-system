import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import PropTypes from 'prop-types'

const StyledBox = styled(Box)`
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.palette[props.palette].backgroundColor};
  color: ${props => props.theme.palette[props.palette].color};
`

const Subtitle = styled(Text)`
  color: ${props => props.theme.palette[props.palette].secondaryColor};
`

const Banner = (props) => (
  <StyledBox {...props}>
    <Text bold={props.bold}>
      {props.title}
    </Text>
    <Subtitle bold={props.bold} palette={props.palette} theme={props.theme}>
      {props.subtitle}
    </Subtitle>
  </StyledBox>
)

Banner.propTypes = {
  bold: PropTypes.bool,
  palette: PropTypes.string,
  title: PropTypes.title,
  subtitle: PropTypes.subtitle
}

Banner.defaultProps = {
  palette: 'default'
}

export default Banner
