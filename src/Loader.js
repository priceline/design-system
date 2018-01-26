import React from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from 'styled-system'
import Flex from './Flex'
import Box from './Box'
import theme from './theme'

const getAnimationDelay = props => ({
  animationDelay: 32 + props.index * 64 + 'ms'
})

const bounce = keyframes`
  0% {
    -webkit-transform: translateY(8px) scale(0.1) }
  50% {
    -webkit-transform: translateY(-8px) scale(1) }
  100% {
    -webkit-transform: translateY(8px) scale(0.1) }
`

const LoaderFrame = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  height: 24px;
`

const Ball = styled(Box)`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.6s infinite ease-in-out both;
  ${getAnimationDelay} ${color};
  ${props => ({
    backgroundColor: props.theme.color
  })};
`

const Loader = ({ color }) => (
  <LoaderFrame>
    <Ball index={0} bg={color} />
    <Ball index={1} bg={color} />
    <Ball index={2} bg={color} />
  </LoaderFrame>
)

Loader.displayName = 'Loader'

export default Loader
