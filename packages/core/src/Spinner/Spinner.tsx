import React from 'react'
import styled, { css, keyframes, useTheme } from 'styled-components'
import { type Theme } from 'styled-system'
import { Absolute } from '../Absolute/Absolute'
import { Flex } from '../Flex/Flex'
import { PaletteFamilyName } from '../theme/theme'
import { applySizes, getPaletteColor } from '../utils/utils'
import { Animate } from './../Animate/Animate'

const sizes = {
  small: css`
    width: 48px;
    height: 48px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  `,
  medium: css`
    width: 64px;
    height: 64px;

    & > svg {
      width: 24px;
      height: 24px;
    }
  `,
  large: css`
    width: 96px;
    height: 96px;

    & > svg {
      width: 36px;
      height: 36px;
    }
  `,
}

const RelativeFlex = styled(Flex)`
  position: relative;

  ${applySizes(sizes, null)};
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Ring = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${getPaletteColor('base')};
  border-top: 2px solid ${getPaletteColor('background.lightest')};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

const GradientRingWrapper = styled(Absolute)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export type GradientRingProps = {
  strokeWidth?: string
  color?: PaletteFamilyName
  theme?: Theme
}

function GradientRing({ strokeWidth = '6px', ...props }: GradientRingProps) {
  const strokeColor = getPaletteColor(props.color, 'base')(props)
  return (
    <GradientRingWrapper mt='-3px'>
      <Animate variant='spin'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 200 200'
          color={strokeColor}
          fill='none'
          overflow='visible'
        >
          <defs>
            <linearGradient id='spinner-secondHalf'>
              <stop offset='0%' stop-opacity='0' stop-color='currentColor' />
              <stop offset='100%' stop-opacity='0.5' stop-color='currentColor' />
            </linearGradient>
            <linearGradient id='spinner-firstHalf'>
              <stop offset='0%' stop-opacity='1' stop-color='currentColor' />
              <stop offset='100%' stop-opacity='0.5' stop-color='currentColor' />
            </linearGradient>
          </defs>

          <g stroke-width={strokeWidth}>
            <path stroke='url(#spinner-secondHalf)' d='M 4 100 A 96 96 0 0 1 196 100' />
            <path stroke='url(#spinner-firstHalf)' d='M 196 100 A 96 96 0 0 1 4 100' />
            <path stroke='currentColor' stroke-linecap='round' d='M 4 100 A 96 96 0 0 1 4 98' />
          </g>
          {/* <animateTransform
          from='0 0 0'
          to='360 0 0'
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1000ms'
        /> */}
        </svg>
      </Animate>
    </GradientRingWrapper>
  )
}

/**
 * @public
 */
export type SpinnerSizes = 'small' | 'medium' | 'large' | number

/**
 * @public
 */
export type SpinnerProps = GradientRingProps & {
  children?: React.ReactNode
  size?: SpinnerSizes | string | Array<SpinnerSizes | string>
  useGradient?: boolean
}

/**
 * @public
 */
export function Spinner({
  children,
  color = 'primary',
  size = 'medium',
  useGradient = false,
  ...props
}: SpinnerProps) {
  if (children) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _validatedChild = React.Children.only(children)
  }
  const theme = useTheme()

  return (
    <RelativeFlex justifyContent='center' alignItems='center' {...props} size={size}>
      {useGradient ? <GradientRing color={color} theme={theme} {...props} /> : <Ring color={color} />}
      {children &&
        React.isValidElement(children) &&
        React.cloneElement<{ color?: PaletteFamilyName }>(children, {
          color: (children?.props as { color?: PaletteFamilyName })?.color || color,
        })}
    </RelativeFlex>
  )
}
