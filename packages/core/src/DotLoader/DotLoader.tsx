import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { applySizes } from '../utils'

const sizes = {
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

const speeds = {
  slow: 2.5,
  medium: 2,
  fast: 1,
}

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

  ${applySizes(sizes, null)};
`

const Dot = styled(Box)`
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center;
  animation: ${animation} ${(props) => props.duration}s ease infinite;
  animation-delay: ${(props) => getDelay(props.duration, props.pos)}s;
`

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(sizes))),
  ]),
  speed: PropTypes.oneOf(Object.keys(speeds)),
}

const DotLoader: React.FC<InferProps<typeof propTypes>> = ({ color, size, speed, ...props }) => {
  const duration = speeds[speed]

  return (
    <Container size={size} {...props}>
      <Dot color={color} duration={duration} />
      <Dot color={color} duration={duration} pos={1} />
      <Dot color={color} duration={duration} pos={2} />
    </Container>
  )
}

DotLoader.propTypes = propTypes

DotLoader.defaultProps = {
  color: 'primary',
  size: 'medium',
  speed: 'medium',
}

export default DotLoader
