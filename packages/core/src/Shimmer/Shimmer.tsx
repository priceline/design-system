import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Box, type BoxProps } from '../Box/Box'
import {
  ShimmerVariationType,
  VARIATION_BACKGROUND_COLORS,
  VARIATION_GLARE_GRADIENTS,
  type ShimmerVariation,
} from './constants'

const animation = (props) => keyframes`
  0% {
    transform: translateX(-200px)
  }
  100% {
    transform: translateX(${props.animationWidth}px)
  }
`

const animationRule = css`
  ${animation} 1.2s ease-in-out infinite;
`

const Wrapper = styled(Box)`
  background-color: ${(props) => VARIATION_BACKGROUND_COLORS[props.variation]};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  ${(props) => props.height && `height: ${props.height};`}
  overflow: hidden;
`

const Glare = styled.span`
  display: inline-block;
  background-image: linear-gradient(to right, ${(props) => VARIATION_GLARE_GRADIENTS[props.variation]});
  background-image: -webkit-linear-gradient(left, ${(props) => VARIATION_GLARE_GRADIENTS[props.variation]});
  animation: ${animationRule};
  height: 100%;
  width: 200px;

  // Disable animation for users that prefer reduced motion for accessibility
  @media (prefers-reduced-motion) {
    animation: none;
  }
`

/**
 * @public
 */
export type ShimmerProps = BoxProps & {
  animationWidth?: number
  className?: string
  disable?: boolean
  variation?: ShimmerVariation
}

/**
 * @public
 */
export function Shimmer({
  animationWidth = 100,
  disable = false,
  variation = ShimmerVariationType.Base,
  ...props
}: ShimmerProps): JSX.Element {
  return (
    <Wrapper {...props} data-testid='Shimmer__Wrapper' variation={variation}>
      {!disable && (
        <Glare animationWidth={animationWidth + 200} data-testid='Shimmer__Glare' variation={variation}>
          &zwnj;
        </Glare>
      )}
    </Wrapper>
  )
}
