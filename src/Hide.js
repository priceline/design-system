import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'

const Hide = styled(Box)`
`

Hide.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool
}

Hide.displayName = 'Hide'

export default Hide
