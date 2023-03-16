import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Card } from '../Card'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { BackgroundImage } from '../BackgroundImage'
import { Box } from '../Box'
import { SlideBox } from './SlideBox'

const ToutCard = styled(Card)`
  overflow: hidden;
`

export default {
  title: 'SlideBox',
  component: SlideBox,
}

const TileContents = () => (
  <Box>
    <BackgroundImage height='190px' width='100%' image='https://cdn2.thecatapi.com/images/dnn.jpg' />
    <Flex color='background.lightest' p={[1, 1, 2, 2, 2, 3]}>
      <Box>
        <Text fontSize={[0, null, 1, 1, 2]} fontWeight='bold' mb={2}>
          City, AB
        </Text>
        <Text fontSize={[0, null, null, null, 1]}>Hotel for 2 nights</Text>
        <Text fontSize={[0, null, null, null, 1]}>+ Round-trip flight</Text>
      </Box>
      <Text textAlign='right' ml='auto'>
        <Text.s fontSize={[0, null, null, null, 1]} fontWeight='bold'>
          $554
        </Text.s>
        <Text fontSize={[0, null, 1, 1, 3]} fontWeight='bold' color='secondary.base' mx={1}>
          $365
        </Text>
        <Text fontSize={[0, null, null, null, 1]} color='text.light'>
          per person
        </Text>
      </Text>
    </Flex>
  </Box>
)

export const Default = () => (
  <Box m={3}>
    <SlideBox
      visibleSlides={[0.7, 2.2, 3, 3, 4]}
      onSlideChange={action('Slide Change')}
      slideSpacing={2}
      stretchHeight
      currentSlideOverride={5}
    >
      {Array.from(Array(6)).map((_, idx) => (
        <ToutCard
          height={idx === 1 ? '300px' : '320px'}
          borderRadius={20}
          boxShadowSize='md'
          borderWidth={0}
          key={idx}
        >
          <TileContents />
        </ToutCard>
      ))}
    </SlideBox>
  </Box>
)

export const NoStrechHeight = () => (
  <Box m={3}>
    <SlideBox visibleSlides={[1.2, 2.2, 3, 3, 4]} onSlideChange={action('Slide Change')} slideSpacing={2}>
      {Array.from(Array(6)).map((_, idx) => (
        <ToutCard
          height={idx === 1 ? '300px' : '320px'}
          borderRadius={20}
          boxShadowSize='md'
          borderWidth={0}
          key={idx}
        >
          <TileContents />
        </ToutCard>
      ))}
    </SlideBox>
  </Box>
)

export const CustomLayout = () => (
  <Box>
    <SlideBox
      visibleSlides={2}
      onSlideChange={action('Slide Change')}
      slideSpacing={2}
      stretchHeight
      layout='30-70'
    >
      {Array.from(Array(6)).map((_, idx) => (
        <ToutCard
          height={idx === 1 ? '300px' : '320px'}
          borderRadius={20}
          boxShadowSize='md'
          borderWidth={0}
          key={idx}
        >
          <TileContents />
        </ToutCard>
      ))}
    </SlideBox>
  </Box>
)
