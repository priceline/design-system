import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

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

const propTypes = {
  icon: PropTypes.node,
}

const IconButton: React.FC<InferProps<typeof propTypes>> = React.forwardRef(({ icon, ...props }, ref) => {
  return (
    <TransparentButton {...props} ref={ref}>
      <div>{icon}</div>
    </TransparentButton>
  )
})

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.propTypes = propTypes

export default IconButton
