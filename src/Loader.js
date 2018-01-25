import React from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from 'styled-system'
import Flex from './Flex'
import theme from './theme'

const getAnimationDelay = props => ({
  animationDelay: 32 + props.index * 64 + 'ms'
})

const bounce = keyframes`
  0% {
    -webkit-transform: translateY(0) scale(0) }
  50% {
    -webkit-transform: translateY(-16px) scale(1) }
  100% {
    -webkit-transform: translateY(0) scale(0) }
`

const LoaderFrame = styled(Flex)`
  display: flex;
  justify-content: space-around;
  width: 32px;
`

const Ball = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.6s infinite ease-in-out both;
  ${getAnimationDelay};
`

const Loader = () => (
  <LoaderFrame>
    <Ball index={0} />
    <Ball index={1} />
    <Ball index={2} />
  </LoaderFrame>
)

Loader.displayName = 'Loader'

export default Loader
