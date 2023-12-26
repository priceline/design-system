import type { ButtonProps } from '../Button'

import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Flex } from '../Flex'
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

export type IconButtonProps = ButtonProps & {
  icon: React.ReactNode
  autoFocus?: boolean
}

export const IconButton: React.FC<IconButtonProps> & { isIconButton?: boolean } = React.forwardRef(
  ({ icon, ...props }, ref) => {
    return (
      <TransparentButton {...props} ref={ref}>
        <Flex>{icon}</Flex>
      </TransparentButton>
    )
  }
)

IconButton.displayName = 'IconButton'
IconButton.isIconButton = true
