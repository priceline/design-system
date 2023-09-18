import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { css, keyframes, useTheme } from 'styled-components'
import { Flex, Absolute } from '..'
import { applySizes, getPaletteColor } from '../utils'

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

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.oneOf(Object.keys(sizes)), PropTypes.string, PropTypes.number])
    ),
  ]),
}

const GradientRing: React.FC<InferProps<typeof propTypes>> = ({ strokeWidth = '6px', ...props }) => {
  const strokeColor = getPaletteColor(props?.color, 'base')(props)
  return (
    <GradientRingWrapper>
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
        <animateTransform
          from='0 0 0'
          to='360 0 0'
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1000ms'
        />
      </svg>
    </GradientRingWrapper>
  )
}

const Spinner: React.FC<InferProps<typeof propTypes>> = ({
  children,
  color,
  useGradient = false,
  ...props
}) => {
  if (children) {
    React.Children.only(children)
  }
  const theme = useTheme()

  return (
    <RelativeFlex justifyContent='center' alignItems='center' {...props}>
      {useGradient ? <GradientRing color={color} theme={theme} {...props} /> : <Ring color={color} />}
      {children &&
        React.cloneElement(children, {
          color: children?.props?.color || color,
        })}
    </RelativeFlex>
  )
}

Spinner.propTypes = propTypes

Spinner.defaultProps = {
  color: 'primary',
  size: 'medium',
}

export default Spinner
