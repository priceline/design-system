import type { IFlashcardProps } from '..'

import themeGet from '@styled-system/theme-get'
import type { ForwardRefComponent, HTMLMotionProps, TargetAndTransition } from 'framer-motion'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const flashCardRotations = ['x', 'y', 'x-reverse', 'y-reverse'] as const
export type FlashcardRotation = (typeof flashCardRotations)[number]

export const flashcardRotations: Record<FlashcardRotation | 'reset', TargetAndTransition> = {
  x: { rotateX: 180 },
  y: { rotateY: 180 },
  'x-reverse': { rotateX: -180 },
  'y-reverse': { rotateY: -180 },
  reset: { rotateX: 0, rotateY: 0 },
} as const

export type FlashcardMotionProps = Partial<IFlashcardProps> & HTMLMotionProps<'div'>

export type FlashcardContainerProps = HTMLMotionProps<'div'> &
  Partial<Omit<IFlashcardProps, 'borderRadius' | 'children'>>

export const CardContainer: (props: FlashcardContainerProps) => JSX.Element = styled(motion.div)`
  perspective: ${(props: FlashcardContainerProps) => props.perspective}px;
`

export const OuterCardMotion: ForwardRefComponent<HTMLDivElement, FlashcardMotionProps> = styled(motion.div)``

export const InnerCardMotion: ForwardRefComponent<HTMLDivElement, FlashcardMotionProps> = styled(motion.div)`
  background-color: ${(props: FlashcardMotionProps) => themeGet(`palette.${props.bg}`)(props)};
  border-radius: ${(props: FlashcardMotionProps) => themeGet(`borderRadii.${props.borderRadius}`)(props)};
  box-shadow: ${(props: FlashcardMotionProps) => themeGet(`shadows.${props.boxShadowSize}`)(props)};
  &:hover {
    box-shadow: ${(props: FlashcardMotionProps) => themeGet(`shadows.2xl`)(props)};
  }
`
