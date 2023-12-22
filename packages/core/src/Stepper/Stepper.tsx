import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { Flex } from '../Flex'
import { Step } from '../Step'

const StyledFlex = styled(Flex)`
  & > :not(:last-child) {
    margin-right: ${themeGet('space.4')}px;
  }
`

export type StepperProps = {
  className?: string
  children?: React.ReactNode
}

export function Stepper({ className, children, ...props }: StepperProps): React.ReactElement {
  return (
    <StyledFlex className={className} {...props}>
      {children}
    </StyledFlex>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Stepper.Step = Step as any
