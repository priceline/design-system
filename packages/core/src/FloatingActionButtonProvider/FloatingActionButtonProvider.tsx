import React from 'react'
import { Animate, type MotionVariant } from '../Animate/Animate'
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
  enterAnimation?: MotionVariant
  exitAnimation?: MotionVariant
  position?: Position
  floatingActionButtons: Array<FloatingActionButtonPropWrapper>
}

export const FloatingActionButtonProvider: React.FC<FloatingActionButtonProviderProps> = (
  {
    enterAnimation = 'slideInLeft',
    exitAnimation = 'slideOutLeft',
    position = 'topRight',
    delayDisplayMs,
    hideUntilScrollPercent,
    floatingActionButtons,
    ...props
  },
  ref
) => {
  const { showFab, showWrapper, isDelayedDisplay } = useFloatingActinButton({
    hideUntilScrollPercent,
    delayDisplayMs,
  })
  return !showWrapper || isDelayedDisplay ? null : (
    <Wrapper positionVariant={position} {...POSITION_STYLES[position]} {...props}>
      <Animate variant={showFab ? enterAnimation : exitAnimation}>
        {floatingActionButtons.map((fab) => (
          <FloatingActionButton isAbsolutePosition={false} {...fab} key={fab.key} />
        ))}
      </Animate>
    </Wrapper>
  )
}
