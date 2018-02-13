import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import system from 'styled-system'
import theme from './theme'
import Box from './Box'

const rootPosition = props =>
  props.open
    ? {
        position: 'fixed',
        top: props.top || 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        [system.theme('mediaQueries.1')(props)]: {
          position: 'relative',
          top: 'auto',
          display: 'block'
        }
      }
    : null

const Root = styled(Box)`
  right: 0;
  bottom: 0;
  left: 0;
  ${rootPosition};
`

Root.defaultProps = {
  theme
}

class Popover extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired
  }

  constructor() {
    super()

    this.handleDismiss = e => {
      if (!this.props.open || !this.root || this.root.contains(e.target)) return
      this.props.onDismiss(e)
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDismiss)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDismiss)
  }

  render() {
    const { onDismiss, ...props } = this.props

    return <Root innerRef={ref => (this.root = ref)} {...props} />
  }
}

Popover.Body = styled(Box)`
  flex: 1 1 auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  ${system.theme('mediaQueries.1')} {
    position: absolute;
    z-index: 1;
    left: 0;
    box-shadow: ${system.theme('boxShadows.2')};
  }
`

Popover.Body.defaultProps = {
  p: 3,
  mt: 2,
  bg: 'white'
}

export default Popover
