import type { Meta, StoryObj } from '@storybook/react'
import type { IDialogProps } from './Dialog'

import { User } from 'pcln-icons'
import React from 'react'
import { Dialog } from '.'
import { Box } from '../Box'
import { Button } from '../Button'
import { Container } from '../Container'
import { StoryStage } from '../DocsUtils'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { colorSchemeNames } from '../storybook/args'

type DialogStory = StoryObj<IDialogProps>

const sizeOptions = ['sm', 'md', 'lg', 'xl', 'xxl']

export const Playground: DialogStory = {
  render: (args) => <Dialog {...args} />,
}

export const HeaderString: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    headerContent: 'STRING HEADER',
  },
}
export const HeaderTextNode: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    headerContent: <Text textStyle='title3'>Dialog Header</Text>,
  },
}

export const Hug: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    hugColor: 'primary.base',
  },
}

export const HeaderColorScheme: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    headerColorScheme: 'primary',
    headerContent: 'Primary Color Scheme',
  },
}

export const HeaderColorSchemeIcon: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    headerColorScheme: 'primary',
    headerContent: 'Primary Color Scheme',
    headerIcon: <User />,
  },
}

export const ContentPaddingWithHeader: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
  args: {
    headerColorScheme: 'primary',
    headerContent: 'Primary Color Scheme',
  },
}

export const ContentPaddingWithoutHeader: DialogStory = {
  render: (args) => (
    <StoryStage>
      <Dialog {...args} />
    </StoryStage>
  ),
}

const DefaultContent = () => (
  <Box>
    <Heading.h3 textStyle='heading3'>Heading3</Heading.h3>
    <Heading.h4 textStyle='heading3'>Heading4</Heading.h4>
    <Text textStyle='paragraph'>
      Paragraph. The quick brown fox jumps over the lazy dog to discover new deals every day. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras id erat nec ante semper eleifend. In ex mi, eleifend non ultricies sed, ullamcorper a sem. Aenean
      mollis mi eget libero commodo, non auctor dui fermentum. Aliquam ultrices nisi in odio sodales, vel
      feugiat libero gravida.
    </Text>
    <Text textStyle='paragraph'>
      Paragraph. The quick brown fox jumps over the lazy dog to discover new deals every day. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras id erat nec ante semper eleifend. In ex mi, eleifend non ultricies sed, ullamcorper a sem. Aenean
      mollis mi eget libero commodo, non auctor dui fermentum. Aliquam ultrices nisi in odio sodales, vel
      feugiat libero gravida.
    </Text>
  </Box>
)
const defaultArgs = {
  triggerNode: (
    <Container>
      <Button borderRadius='xl'>Open Modal</Button>
    </Container>
  ),
  children: <DefaultContent />,
}
const argTypes = {
  headerColorScheme: {
    control: { type: 'select' },
    options: colorSchemeNames,
    defaultValue: 'primary',
  },
  size: {
    control: { type: 'select' },
    options: sizeOptions,
    defaultValue: 'md',
  },
  triggerNode: {
    control: { type: 'none' },
  },
  children: {
    control: { type: 'none' },
  },
}
const meta: Meta<typeof Dialog> = {
  title: 'Overlays/Dialog',
  component: Dialog,
  parameters: {
    controls: {
      exclude: ['triggerNode'],
    },
  },

  args: defaultArgs,
  argTypes,
}

export default meta
