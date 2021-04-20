import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Box, Flex } from 'pcln-design-system'

const sizes = {
  small: 8,
  medium: 12,
  large: 16,
}

const speeds = {
  slow: 2.5,
  medium: 2,
  fast: 1,
}

const margins = {
  small: '5px 0',
  medium: '4.5px 0',
  large: '4px 0',
}

const spacing = {
  small: '16px',
  medium: '32px',
  large: '32px',
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
  width: 100%;
  height: 100%;
  & > :not(:last-child) {
    margin-right: ${(props) => props.spacing};
  }
`

const Dot = styled(Box)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center;
  animation: ${animation} ${(props) => props.duration}s ease infinite;
  animation-delay: ${(props) => getDelay(props.duration, props.pos)}s;
`

const DotLoader = ({ color, size, speed, ...props }) => {
  const duration = speeds[speed] || speed
  const dotSize = sizes[size] || size
  const margin = margins[size]
  const space = spacing[size]

  return (
    <Container m={margin} spacing={space} {...props}>
      <Dot color={color} duration={duration} size={dotSize} />
      <Dot color={color} duration={duration} size={dotSize} pos={1} />
      <Dot color={color} duration={duration} size={dotSize} pos={2} />
    </Container>
  )
}

DotLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  speed: PropTypes.number,
}

DotLoader.defaultProps = {
  color: 'primary.base',
  size: 'medium',
  speed: 'medium',
}

export default DotLoader
