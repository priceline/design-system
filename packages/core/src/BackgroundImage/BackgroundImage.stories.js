import React from 'react'
import { optionsKnob, withKnobs } from '@storybook/addon-knobs'
import { Catch, LiveEditor, Markdown } from '@compositor/kit'
import { BackgroundImage, Box, Flex, Text } from '..'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'
const parallaxImage =
  'https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg'

const variations = { static: 'static', parallax: 'parallax' }

export default {
  title: 'BackgroundImage',

  decorators: [
    (story) => (
      <Box>
        <Markdown>
          {`Use the <code>&lt;BackgroundImage /&gt;</code> component to render a background image. Use the *variation* prop to change the attachment mode of the background.`}
        </Markdown>
        {story()}
      </Box>
    ),
    withKnobs,
  ],

  parameters: {
    component: BackgroundImage,
  },
}

export const Variations = () => {
  const variation = optionsKnob('Variation', variations, 'parallax', {
    display: 'select',
  })

  return (
    <Catch>
      <LiveEditor
        code={`
<BackgroundImage
  height="600px"
  width={1}
  variation='${variation}'
  image='${parallaxImage}'
/>
          `}
        scope={{ BackgroundImage }}
      />
    </Catch>
  )
}

export const FixedHeight = () => (
  <Box>
    <BackgroundImage height='320px' image={image} width='360px'>
      <Box p={4}>
        <Text fontSize={6} bold textAlign='center' color='white'>
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  </Box>
)

export const FixedIntHeight = () => (
  <Box>
    <BackgroundImage height={400} image={image} width='360px'>
      <Box p={4}>
        <Text fontSize={6} bold textAlign='center' color='white'>
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  </Box>
)

export const Responsive = () => (
  <Flex>
    <BackgroundImage
      width={['100px', '216px', '260px']}
      height={['100px', '300px', '600px']}
      image={image}
    >
      <Box p={4}>
        <Text fontSize={6} bold textAlign='center' color='white'>
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  </Flex>
)
