import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, Box, Text, Flex } from '../src'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

storiesOf('BackgroundImage', module)
  .add('Basic', () => (
    <Box>
      <BackgroundImage image={image} width="320px">
        <Box p={4}>
          <Text fontSize={6} bold textAlign="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Fixed Height', () => (
    <Box>
      <BackgroundImage height="320px" image={image} width="360px">
        <Box p={4}>
          <Text fontSize={6} bold textAlign="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Responsive', () => (
    <Flex>
      <BackgroundImage
        width={['100px', '216px', '260px']}
        height="320px"
        image={image}
      >
        <Box p={4}>
          <Text fontSize={6} bold textAlign="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Flex>
  ))
