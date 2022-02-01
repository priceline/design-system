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
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='150px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='GROW_CENTER'>
        <RoundedAbsolute
          top={-40}
          bottom={0}
          left={0}
          right={0}
          m='auto'
          boxShadowSize='lg'
          bg='background.lightest'
          height='300px'
          width='300px'
        />
      </Motion>
    </Relative>
  )
}

export const QuickGrow = () => {
  const [isVisible, setIsVisible] = useState(null)
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='150px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='QUICK_GROW'>
        <RoundedAbsolute
          m={0}
          top={0}
          right='auto'
          left='calc(100% - 6px)'
          boxShadowSize='lg'
          bg='background.lightest'
          height='300px'
          width='300px'
        />
      </Motion>
    </Relative>
  )
}

export const ExpandDown = () => {
  const [isVisible, setIsVisible] = useState(null)
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <Motion isAnimatedState={isVisible} variation='EXPAND_DOWN'>
        <RoundedAbsolute
          top={8}
          right={0}
          m='auto'
          boxShadowSize='lg'
          bg='background.lightest'
          height='300px'
          width='300px'
        />
      </Motion>
    </Relative>
  )
}

export const ExpandUp = () => {
  const [isVisible, setIsVisible] = useState(null)
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Text textAlign='center' onClick={toggleVisible} p={2}>
        Click Here to see more
      </Text>
      <FixedBottom>
        <Motion isAnimatedState={isVisible} variation='EXPAND_DOWN'>
          <RoundedAbsolute
            height='calc(100vh - 100px)'
            bottom={-20}
            width='400px'
            left={0}
            m='auto'
            boxShadowSize='lg'
            bg='background.lightest'
          />
        </Motion>
      </FixedBottom>
    </Relative>
  )
}

export const GrowBottom = () => {
  const [isVisible, setIsVisible] = useState(null)
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  return (
    <Relative bg='primary' color='white' width='400px' mt='50px'>
      <Motion isAnimatedState={isVisible} variation='GROW_Y'>
        <RoundedAbsolute
          onClick={toggleVisible}
          top={0}
          right={0}
          m='auto'
          boxShadowSize='lg'
          bg='background.lightest'
          height='300px'
          width='300px'
        />
      </Motion>
    </Relative>
  )
}

export const GrowBottomAndRight = () => {
  const [isVisible, setIsVisible] = useState(null)
  const [isVisibleb, setIsVisibleb] = useState(null)
  function toggleVisible() {
    setIsVisible(!isVisible)
  }
  function toggleVisibleb() {
    setIsVisibleb(!isVisibleb)
  }
  return (
    <Flex>
      <Relative bg='primary' color='white' width='320px' mt='50px'>
        <Motion isAnimatedState={isVisible} variation='GROW_XY'>
          <RoundedAbsolute
            onClick={toggleVisible}
            top={0}
            left={0}
            right={0}
            m='auto'
            boxShadowSize='lg'
            bg='background.lightest'
            height='300px'
            width='300px'
          />
        </Motion>
      </Relative>
      <Relative bg='primary' color='white' width='320px' mt='50px'>
        <Motion isAnimatedState={isVisibleb} variation='GROW_XY'>
          <RoundedAbsolute
            onClick={toggleVisibleb}
            top={0}
            left={0}
            right={0}
            m='auto'
            boxShadowSize='lg'
            bg='background.lightest'
            height='300px'
            width='300px'
          />
        </Motion>
      </Relative>
    </Flex>
  )
}
