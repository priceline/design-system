import { TabProps } from './Tab'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'

export const defaultArgs: Partial<TabProps> = {
  size: 'md',
  hasHover: true,
  type: 'button',
  tabsContent: [
    {
      id: 't1',
      children: DefaultContent(),
    },
    {
      id: 't2',
      children: DefaultContent2(),
    },
    {
      id: 't3',
      children: DefaultContent3(),
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
export const argTypes = {
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
  },
  type: {
    control: 'select',
    options: ['chip', 'radio', 'button'],
  },
  orientation: {
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
  tabGap: {
    control: 'number',
  },
  border: {
    defaultValue: false,
    control: 'boolean',
  },
}
