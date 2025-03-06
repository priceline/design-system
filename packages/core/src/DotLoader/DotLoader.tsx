import themeGet from '@styled-system/theme-get'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { ColorName, PaletteColor, PaletteFamilyName } from '../theme/theme'
import { applySizes } from '../utils/utils'

/**
 * @public
 */
export const dotLoaderSizes = {
  small: css`
    height: 18px;

    & > * {
      width: 8px;
      height: 8px;
    }

    & > :not(:last-child) {
      margin-right: ${themeGet('space.3')}px;
    }
  `,
  medium: css`
    height: 21px;

    & > * {
      width: 12px;
      height: 12px;
    }

    & > :not(:last-child) {
      margin-right: ${themeGet('space.4')}px;
    }
  `,
  large: css`
    height: 24px;

    & > * {
      width: 16px;
      height: 16px;
    }

    & > :not(:last-child) {
      margin-right: ${themeGet('space.4')}px;
    }
  `,
}

/**
 * @public
 */
export type DotLoaderSizes = keyof typeof dotLoaderSizes | (keyof typeof dotLoaderSizes)[]

/**
 * @public
 */
export const dotLoaderSpeeds = {
  slow: 2.5,
  medium: 2,
  fast: 1,
}

/**
 * @public
 */
export type DotLoaderSpeeds = keyof typeof dotLoaderSpeeds

const getDelay = (duration, pos = 0) => {
  return `${(duration / 6) * pos}s;`
}

const animation = keyframes`
  0%, 20%, 100% {
    transform: translateY(50%) scale(0);
  }
  50% {
    transform: translateY(-50%) scale(1);
  }
`

const Container = styled(Flex)`
  justify-content: center;
  align-items: center;

  ${applySizes(dotLoaderSizes, null)};
`

const Dot = styled(Box)`
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center;
  animation: ${animation} ${(props) => props.duration}s ease infinite;
  animation-delay: ${(props) => getDelay(props.duration, props.pos)}s;
`

/**
 * @public
 */
export type DotLoaderProps = {
  color?: ColorName | PaletteFamilyName | PaletteColor
  size?: DotLoaderSizes
  speed?: DotLoaderSpeeds
}

/**
 * @public
 */
export function DotLoader({
  color = 'primary',
  size = 'medium',
  speed = 'medium',
  ...props
}: DotLoaderProps) {
  const duration = dotLoaderSpeeds[speed]

  return (
    <Container size={size} {...props}>
      <Dot color={color} duration={duration} />
      <Dot color={color} duration={duration} pos={1} />
      <Dot color={color} duration={duration} pos={2} />
    </Container>
  )
}
