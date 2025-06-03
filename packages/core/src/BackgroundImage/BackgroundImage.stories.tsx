import type { Meta } from '@storybook/react'
import { Box } from '../Box/Box'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'
import { BackgroundImage } from './BackgroundImage'
import { argTypes, defaultArgs } from './BackgroundImage.stories.args'

export default {
  title: 'core / BackgroundImage',
  component: BackgroundImage,
  args: defaultArgs,
  argTypes,
  decorators: [
    (story) => (
      <Box height='600px' width='100%'>
        {story()}
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
} as Meta

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

const RoundedTemplate = (args) => (
  <Box width='300px'>
    <BackgroundImage {...args} />
    <Card rounded='bottom' height='100px'>
      <Text textAlign='center' my={3}>
        Hello Priceline!
      </Text>
    </Card>
  </Box>
)

export const Rounded = RoundedTemplate.bind({})
Rounded.args = {
  borderRadius: 'full',
  rounded: 'top',
  height: '100px',
}

export const BackgroundPosition = Template.bind({})
BackgroundPosition.args = {
  height: 400,
  width: '360px',
  children: <StoryChildren />,
  backgroundPosition: 'left',
}
