import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import theme from './theme'

const getMaxWidth = width => width - 0.01

const breakpoints = props => {
  const unit = props.theme.breakpointsUnit
  return {
    xs: `@media screen and (max-width: ${getMaxWidth(
      props.theme.breakpoints[0]
    )}${unit})`,
    sm: `@media screen and (min-width: ${
      props.theme.breakpoints[0]
    }${unit}) and (max-width: ${getMaxWidth(props.theme.breakpoints[1])}${unit})`,
    md: `@media screen and (min-width: ${
      props.theme.breakpoints[1]
    }${unit}) and (max-width: ${getMaxWidth(props.theme.breakpoints[2])}${unit})`,
    lg: `@media screen and (min-width: ${
      props.theme.breakpoints[2]
    }${unit}) and (max-width: ${getMaxWidth(props.theme.breakpoints[3])}${unit})`,
    xl: `@media screen and (min-width: ${props.theme.breakpoints[3]}${unit})`
  }
}

const hidden = key => props =>
  props[key]
    ? {
        [breakpoints(props)[key]]: {
          display: 'none'
        }
      }
    : null

const Hide = styled(Box)`
  ${hidden('xs')} ${hidden('sm')} ${hidden('md')} ${hidden('lg')} ${hidden(
      'xl'
    )};
`

Hide.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool
}

Hide.defaultProps = {
  theme: theme
}

Hide.displayName = 'Hide'

export default Hide
