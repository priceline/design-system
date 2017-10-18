import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'

const Banner = styled(Box)`
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.palette[props.palette].backgroundColor};
  color: ${props => props.theme.palette[props.palette].color};
`

Banner.propTypes = {
  palette: PropTypes.string
}

Banner.defaultProps = {
  palette: 'default'
}

export default Banner
