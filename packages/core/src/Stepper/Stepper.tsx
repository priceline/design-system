import themeGet from '@styled-system/theme-get'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex/Flex'
import { Step } from '../Step/Step'

const StyledFlex = styled(Flex)`
  & > :not(:last-child) {
    margin-right: ${themeGet('space.4')}px;
  }
`

/**
 * @public
 */
export type StepperProps = {
  className?: string
  children?: React.ReactNode
}

/**
 * A container for Step components showing progress through a multi-step process.
 *
 * Wraps multiple Step children with connectors between them. Use for checkout flows,
 * form wizards, or any sequential process. Steps display active, completed, and
 * upcoming states automatically based on their props.
 *
 * @public
 */
export function Stepper({ className, children, ...props }: StepperProps): React.ReactElement {
  return (
    <StyledFlex className={className} {...props}>
      {children}
    </StyledFlex>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Stepper.Step = Step as any
