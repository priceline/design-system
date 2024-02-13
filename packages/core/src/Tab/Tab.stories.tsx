import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { StoryStage } from '../DocsUtils/StoryStage/StoryStage'
import { Tab, type TabProps } from './Tab'
import { argTypes, defaultArgs } from './Tab.stories.args'
import { Departure } from 'pcln-icons'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'

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

export const NoIconButtonTabsWithDynamicTabWidth: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    size: 'md',
    dynamicTabWidth: true,
  },
}

export const NoIconNoHoverButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage style={{ backgroundColor: 'red' }}>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    isTransparent: true,
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
        text: 'Testingsssss longer button',
        children: DefaultContent(),
        onTabSelect: () => {},
      },
      {
        id: 't2',
        icon: Departure,
        text: 'LongerIsh Tab 2',
        children: DefaultContent2(),
        onTabSelect: () => {},
      },
      {
        id: 't3',
        icon: Departure,
        text: 'LongerishTab3',
        children: DefaultContent3(),
        onTabSelect: () => {},
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
        text: 'Testingsssss longer button',
        children: DefaultContent(),
        onTabSelect: () => {},
      },
      {
        id: 't2',
        icon: Departure,
        text: 'LongerIsh Tab 2',
        children: DefaultContent2(),
        onTabSelect: () => {},
      },
      {
        id: 't3',
        icon: Departure,
        text: 'LongerishTab3',
        children: DefaultContent3(),
        onTabSelect: () => {},
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
