/* eslint-disable jsx-a11y/accessible-emoji */
import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import React, { useState } from 'react'
import { Animate, MotionVariant, MotionVariants, TransitionVariant, TransitionVariants } from '.'
import { Box, Button, ChoiceChip, Flex, Image, Text } from '..'

export default {
  component: Animate,
}

export const Playground = () => {
  const [motion, setMotion] = useState<MotionVariant>('expandDown')
  const [transition, setTransition] = useState<TransitionVariant>('default')
  const [isRendered, setIsRendered] = useState(true)

  const rerender = () => {
    setIsRendered(false)
    setTimeout(() => setIsRendered(true))
  }

  const handleMotionChange = (variant: MotionVariant) => {
    setMotion(variant)
    rerender()
  }

  const handleTransitionChange = (variant: TransitionVariant) => {
    setTransition(variant)
    rerender()
  }

  return (
    <Flex flexDirection='column' maxWidth={600}>
      <Text fontSize={5} bold>
        Motion Variants
      </Text>
      <Flex flexWrap='wrap'>
        {Object.keys(MotionVariants).map((variant) => (
          <ChoiceChip
            data-testid={variant}
            selected={motion === variant}
            m={2}
            key={variant}
            onClick={() => handleMotionChange(variant as MotionVariant)}
          >
            {variant}
          </ChoiceChip>
        ))}
      </Flex>
      <Text fontSize={5} bold>
        Transition Variants
      </Text>
      <Flex flexWrap='wrap'>
        {Object.keys(TransitionVariants).map((variant) => (
          <ChoiceChip
            data-testid={variant}
            selected={transition === variant}
            m={2}
            key={variant}
            onClick={() => handleTransitionChange(variant as TransitionVariant)}
          >
            {variant}
          </ChoiceChip>
        ))}
      </Flex>
      {isRendered && (
        <Animate variant={motion} transition={transition}>
          <Flex
            data-testid='playground-content'
            p={5}
            bg='background.darkest'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Text fontSize={5} bold color='text.lightest'>
              Hello 👋
            </Text>
            <Text fontSize={5} bold color='text.lightest'>
              World 🌎
            </Text>
          </Flex>
        </Animate>
      )}
    </Flex>
  )
}
const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

Playground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByText('fadeIn'))
  await delay(1000)
  const playgroundContent = await canvas.getByTestId('playground-content')
  await expect(playgroundContent).toBeTruthy()
}

export const AnimatedListings = () => {
  const [isRendered, setIsRendered] = useState(true)

  const rerender = () => {
    setIsRendered(false)
    setTimeout(() => setIsRendered(true))
  }

  return (
    <Box>
      <Button onClick={rerender}>Reset</Button>

      {isRendered &&
        Array.from(Array(10).keys()).map((i) => (
          <Animate
            key={i}
            variant='scaleFromTopLeft'
            override={{ transition: { ...TransitionVariants.default, delay: 0.05 * i } }}
          >
            <Flex m={2}>
              <Image src={`https://picsum.photos/id/${i + 50}/160/90`} alt='random' />
              <Flex p={2} bg='background.darkest' alignItems='center'>
                <Text color='text.lightest' fontSize={3}>
                  👈 Travel Here 🏨 ✈️ 🚙
                </Text>
              </Flex>
            </Flex>
          </Animate>
        ))}
    </Box>
  )
}

export const ComposedAnimations = () => {
  const [isRendered, setIsRendered] = useState(true)

  const rerender = () => {
    setIsRendered(false)
    setTimeout(() => setIsRendered(true))
  }

  return (
    <Box>
      <Flex width='fit-content'>
        <Button m={2} onClick={rerender}>
          Reset
        </Button>
      </Flex>

      {isRendered && (
        <Animate variant='scaleFromTopLeft'>
          <Flex width='fit-content'>
            <Animate variant='scaleOnHover'>
              <Button m={2}>Hover Me</Button>
            </Animate>
            <Animate variant='scaleOnTap' transition='spring'>
              <Button m={2}>Click Me</Button>
            </Animate>
            <Animate variant='scaleOnTap'>
              <Animate variant='scaleOnHover'>
                <Button m={2}>I Do Both!</Button>
              </Animate>
            </Animate>
          </Flex>
        </Animate>
      )}
    </Box>
  )
}
