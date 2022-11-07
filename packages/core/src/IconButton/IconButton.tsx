import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, IButtonProps } from '../Button'
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

export interface IIconButtonProps extends IButtonProps {
  icon: React.ReactNode
  autoFocus?: boolean
}

const IconButton: React.FC<IIconButtonProps> & { isIconButton?: boolean } = React.forwardRef(
  ({ icon, ...props }, ref) => {
    return (
      <TransparentButton {...props} ref={ref}>
        <div>{icon}</div>
      </TransparentButton>
    )
  }
)

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true

IconButton.propTypes = propTypes

export default IconButton
