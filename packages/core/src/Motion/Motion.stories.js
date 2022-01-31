import React, { useState } from 'react'
import styled from 'styled-components'
import Motion from './Motion'
import { Relative } from '../Relative'
import { Text } from '../Text'
import { Absolute } from '../Absolute'
import { Box } from '../Box'
import { Flex } from '../Flex'

const description = 'Motion'

const RoundedAbsolute = styled(Absolute)`
  border-radius: 20px;
`

const FixedBottom = styled(Box)`
  position: fixed;
  bottom: 0;
`
const Block = (props) => (
  <RoundedAbsolute
    {...props}
    left={props.left || 0}
    right={props.right || 0}
    m={props.m || 'auto'}
    boxShadowSize='lg'
    bg='background.lightest'
    height={props.height || '300px'}
    width={props.width || '300px'}
  />
)

export default {
  title: 'Motion',
  component: Motion,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export const GrowCenter = () => {
  const [isVisible, setIsVisible] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='150px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='GROW_CENTER'>
        <Block top={-40} bottom={0} />
      </Motion>
    </Relative>
  )
}

export const QuickGrow = () => {
  const [isVisible, setIsVisible] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='150px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='QUICK_GROW'>
        <Block m={0} top={0} right='auto' left='calc(100% - 6px)' />
      </Motion>
    </Relative>
  )
}

export const ExpandDown = () => {
  const [isVisible, setIsVisible] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='EXPAND_DOWN'>
        <Block top={8} />
      </Motion>
    </Relative>
  )
}

export const ExpandUp = () => {
  const [isVisible, setIsVisible] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <FixedBottom>
        <Motion isAnimatedState={isVisible} variation='EXPAND_DOWN'>
          <Block height='calc(100vh - 100px)' bottom={-20} width='400px' />
        </Motion>
      </FixedBottom>
    </Relative>
  )
}

export const GrowBottom = () => {
  const [isVisible, setIsVisible] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Motion isAnimatedState={isVisible} variation='GROW_Y'>
        <Block onClick={toggleVisible} top={0} />
      </Motion>
    </Relative>
  )
}

export const GrowBottomAndRight = () => {
  const [isVisible, setIsVisible] = useState(null)
  const [isVisibleb, setIsVisibleb] = useState(null)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  const toggleVisibleb = () => {
    setIsVisibleb(!isVisibleb)
  }
  return (
    <Flex>
      <Relative bg='primary' color='white' width='320px' mt='50px'>
        <Motion isAnimatedState={isVisible} variation='GROW_XY'>
          <Block onClick={toggleVisible} top={0} left={0} />
        </Motion>
      </Relative>
      <Relative bg='primary' color='white' width='320px' mt='50px'>
        <Motion isAnimatedState={isVisibleb} variation='GROW_XY'>
          <Block onClick={toggleVisibleb} top={0} left={0} />
        </Motion>
      </Relative>
    </Flex>
  )
}
