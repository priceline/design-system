import React from 'react'
import styled from 'styled-components'
import { Button, type ButtonProps } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { applyVariations } from '../utils/utils'

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

/**
 * @public
 */
export type IconButtonProps = ButtonProps & {
  icon: React.ReactNode
  autoFocus?: boolean
}

/**
 * @public
 */
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
