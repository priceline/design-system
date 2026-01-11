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
 * A wrapper that animates children with predefined expand/grow transitions.
 *
 * Control visibility with `isAnimatedState` (true shows, false hides, null/undefined
 * skips initial animation). Choose from `variation` options like GROW_CENTER, GROW_Y,
 * GROW_XY, EXPAND_DOWN, QUICK_GROW. Use for revealing panels, tooltips, or overlays.
 *
 * @public
 */
export function Motion({ children, isAnimatedState, variation = 'growCenter' }: MotionProps) {
  return (
    <Wrapper isAnimatedState={isAnimatedState} variation={variation} data-testid='motion-wrapper'>
      {children}
    </Wrapper>
  )
}
