import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mediaQueries } from './theme'

const align = props => {
  switch (props.align) {
    case 'left':
      return {
        marginLeft: 0,
        marginRight: 'auto'
      }
    case 'right':
      return {
        marginLeft: 'auto',
        marginRight: 0
      }
    default :
      return {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
  }
}

const maxWidth = props => props.maxWidth ? { maxWidth: `${props.maxWidth}px` } : null

const Container = styled.div`
  ${align}
  ${maxWidth}
`

export default Container
