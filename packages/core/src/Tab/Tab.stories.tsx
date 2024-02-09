import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { StoryStage } from '../DocsUtils/StoryStage/StoryStage'
import { Tab, type TabProps } from './Tab'
import { argTypes, defaultArgs } from './Tab.stories.args'
import { Departure } from 'pcln-icons'

type TabsStory = StoryObj<TabProps>

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
    buttonChipProps: {},
    type: 'chip',
    size: 'md',
  },
}

export const NoIconRadioTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    type: 'radio',
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

export const VerticalOrientationButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    size: 'md',
    orientation: 'vertical',
  },
}

export const NoIconNoHoverButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    hasHover: false,
    size: 'md',
  },
}
export const IconButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    tabsData: [
      {
        id: 't1',
        icon: Departure,
        text: 'Tab 1',
      },
      {
        id: 't2',
        icon: Departure,
        text: 'Tab 2',
      },
      {
        id: 't3',
        icon: Departure,
        text: 'Tab 3',
      },
    ],
    size: 'md',
  },
}

export const IconChipTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    tabsData: [
      {
        id: 't1',
        icon: Departure,
        text: 'Tab 1',
      },
      {
        id: 't2',
        icon: Departure,
        text: 'Tab 2',
      },
      {
        id: 't3',
        icon: Departure,
        text: 'Tab 3',
      },
    ],
    size: 'md',
    type: 'chip',
  },
}

const meta: Meta<typeof Tab> = {
  title: 'Tabs',
  component: Tab,
  args: defaultArgs,
  argTypes,
  parameters: {
    controls: {
      exclude: ['triggerNode', 'tabsContent', 'tabsData'],
    },
  },
}

export default meta
