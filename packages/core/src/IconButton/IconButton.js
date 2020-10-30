import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import { applyVariations } from '../utils'

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
  &:disabled {
    background-color: transparent;
  }

  ${applyVariations('IconButton')}
`

const IconButton = React.forwardRef(({ icon, ...props }, ref) => {
  return (
    <TransparentButton {...props} ref={ref}>
      <div>{icon}</div>
    </TransparentButton>
  )
})

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.propTypes = {
  icon: PropTypes.node,
}

export default IconButton
