import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from '.'
import { StoryStage } from '../DocsUtils'
import { ITabsProps } from './Tab'
import { Box } from '../Box'
import { Text } from '../Text'
import { Heading } from '../Heading'

const DefaultContent = () => {
  return (
    <Box>
      <Heading.h3 textStyle='heading3'>Default Heading</Heading.h3>
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
}
const DefaultContent2 = () => {
  return (
    <Box m={3}>
      <Heading.h3 textStyle='heading3'>Default Heading 2</Heading.h3>
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
}

const DefaultContent3 = () => {
  return (
    <Box m={3}>
      <Heading.h3 textStyle='heading3'>Default Heading 3</Heading.h3>
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
}

const defaultArgs: ITabsProps = {
  tabsContent: [
    {
      id: 't1',
      children: <DefaultContent />,
    },
    {
      id: 't2',
      children: <DefaultContent2 />,
    },
    {
      id: 't3',
      children: <DefaultContent3 />,
    },
  ],
  tabsData: [
    {
      id: 't1',
      text: 'Tab 1',
    },
    {
      id: 't2',
      text: 'Tab 2',
    },
    {
      id: 't3',
      text: 'Tab 3',
    },
  ],
}

type TabsStory = StoryObj<ITabsProps>

export const Playground: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
}

export const NoIconChipTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    type: 'chip',
    size: 'md',
  },
}

export const NoIconButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    size: 'md',
  },
}

const meta: Meta<typeof Tab> = {
  title: 'Tabs',
  component: Tab,
  parameters: {
    controls: {
      exclude: ['triggerNode'],
    },
  },

  args: defaultArgs,
}

export default meta
