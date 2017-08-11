import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, Box, Text } from '../src'

const image = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

storiesOf('BackgroundImage', module)
  .add('Basic', () => (
    <Box width={320}>
      <BackgroundImage image={image}>
        <Box p={4}>
          <Text
            fontSize={6}
            bold
            align='center'
            color='white'>
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
