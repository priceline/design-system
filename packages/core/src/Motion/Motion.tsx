import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { getAnimationCss } from './helpers'

const Wrapper = styled(Box)`
  ${getAnimationCss}
`

/**
 * @public
 */
export type MotionProps = {
  children?: React.ReactNode
  isAnimatedState?: boolean
  variation?: string
}

/**
 * @public
 */
export function Motion({ children, isAnimatedState, variation = 'growCenter' }: MotionProps) {
  return (
    <Wrapper isAnimatedState={isAnimatedState} variation={variation} data-testid='motion-wrapper'>
      {children}
    </Wrapper>
  )
}
