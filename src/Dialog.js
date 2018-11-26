import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Card from './Card'
import theme from './theme'
import PropTypes from 'prop-types'

const DialogBackground = styled(Box)`
  background: rgba(0,0,0,0.5)
  width: 100%;
  height: 100%;
  position: absolute;
`

export default class Dialog extends React.Component {
  render() {
    return (
      <Dialog align="center" justify="space-between">
        <DialogBackground />
        <Card>{this.props.children}</Card>
      </Dialog>
    )
  }
}

Dialog.displayName = 'Dialog'

Dialog.defaultProps = {
  inverse: false,
  color: theme.colors.gray800,
  theme: theme
}

Dialog.propTypes = {
  inverse: PropTypes.bool
}
