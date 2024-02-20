import React from 'react'
import { Animate, type MotionVariant } from '../Animate/Animate'
import { AnimatePresence } from 'framer-motion'
import { useFloatingActinButton } from './useFloatingActionButton'
import { FloatingActionButtonProps, FloatingActionButton } from '../FloatingActionButton/FloatingActionButton'
import { Wrapper } from './FloatingActionButtonProvider.styled'
import { POSITION_STYLES } from './constants'
import { MarginProps } from 'styled-system'

export type Position = 'bottomRight' | 'topRight' | 'centerRight'

export type FloatingActionButtonPropWrapper = FloatingActionButtonProps & {
  key: string
}

export type FloatingActionButtonProviderProps = MarginProps & {
  hideUntilScrollPercent?: number
  delayDisplayMs?: number
  animationVariant?: MotionVariant
  position?: Position
  floatingActionButtons: Array<FloatingActionButtonPropWrapper>
}

export const FloatingActionButtonProvider: React.FC<FloatingActionButtonProviderProps> = (
  {
    animationVariant = 'slideInBottom',
    position = 'topRight',
    delayDisplayMs,
    hideUntilScrollPercent,
    floatingActionButtons,
    ...props
  },
  ref
) => {
  const { showFab } = useFloatingActinButton({
    hideUntilScrollPercent,
    delayDisplayMs,
  })
  return (
    <AnimatePresence>
      {!showFab ? null : (
        <Wrapper positionVariant={position} {...POSITION_STYLES[position]} {...props}>
          <Animate variant={animationVariant}>
            {floatingActionButtons.map((fab) => (
              <FloatingActionButton isAbsolutePosition={false} {...fab} key={fab.key} />
            ))}
          </Animate>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
