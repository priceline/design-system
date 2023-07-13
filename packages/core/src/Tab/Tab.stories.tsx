import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from '.'
import { StoryStage } from '../DocsUtils'
import { ITabsProps } from './Tab'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'
import { Icon } from '../Icon'
const defaultArgs: ITabsProps = {
  size: 'md',
  onHover: true,
  type: 'button',
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

export const NoIconNoHoverButtonTabs: TabsStory = {
  render: (args) => (
    <StoryStage>
      <Tab {...args} />
    </StoryStage>
  ),
  args: {
    ...defaultArgs,
    onHover: false,
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
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
        text: 'Tab 1',
      },
      {
        id: 't2',
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
        text: 'Tab 2',
      },
      {
        id: 't3',
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
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
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
        text: 'Tab 1',
      },
      {
        id: 't2',
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
        text: 'Tab 2',
      },
      {
        id: 't3',
        icon: <Icon color='primary' size={[100, 200, 300, 50]} name='Flights' />,
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
  parameters: {
    controls: {
      exclude: ['triggerNode'],
    },
  },

  args: defaultArgs,
}

export default meta
