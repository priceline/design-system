import React from 'react'

import { BackgroundImage, Box, Text } from '..'
import { argTypes, defaultArgs } from './BackgroundImage.stories.args'

export default {
  title: 'core / BackgroundImage',
  component: BackgroundImage,
  args: defaultArgs,
  argTypes,
  decorators: [
    (Story) => (
      <Box height='600px' width='100%'>
        {Story()}
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `Use the <code>&lt;BackgroundImage /&gt;</code> component to render a
    background image. Use the *variation* prop to change the attachment mode
    of the background.`,
      },
    },
  },
}

const Template = (args) => <BackgroundImage {...args} />

export const _BackgroundImage = Template.bind({})

const StoryChildren = () => (
  <Box p={4}>
    <Text fontSize={6} fontWeight='bold' textAlign='center' color='white'>
      Hello
    </Text>
  </Box>
)

export const FixedHeight = Template.bind({})
FixedHeight.args = {
  height: '320px',
  width: '360px',
  children: <StoryChildren />,
}

export const FixedIntHeight = Template.bind({})
FixedIntHeight.storyName = 'Fixed Height (Integer)'
FixedIntHeight.args = {
  height: 400,
  width: '360px',
  children: <StoryChildren />,
}

export const Responsive = Template.bind({})
Responsive.args = {
  height: ['100px', '300px', '600px'],
  width: ['100%', '216px', '260px'],
  children: <StoryChildren />,
}
Responsive.parameters = {
  viewport: { defaultViewport: 'designSystem_xs' },
}
