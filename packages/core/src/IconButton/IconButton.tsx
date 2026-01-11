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
 * A button that displays only an icon without text.
 *
 * Wraps an icon in a clickable button with transparent background by default.
 * Use for toolbar actions, close buttons, or compact UI controls. Always provide
 * an `aria-label` for accessibility since there's no visible text.
 *
 * @public
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({ icon, ...props }, ref) => {
  return (
    <TransparentButton {...props} ref={ref}>
      <Flex>{icon}</Flex>
    </TransparentButton>
  )
})

IconButton.displayName = 'IconButton'

// @ts-ignore
IconButton.isIconButton = true
