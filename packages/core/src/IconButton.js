import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import { applyVariations } from './utils'

const TransparentButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: inherit;

  &:hover {
    background-color: transparent;
    color: inherit;
  }
  & > div {
    display: flex;
  }

  ${applyVariations('IconButton')}
`

const IconButton = ({ icon, ...props }) => (
  <TransparentButton {...props}>
    <div>{icon}</div>
  </TransparentButton>
)

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.propTypes = {
  icon: PropTypes.node
}

export default IconButton
