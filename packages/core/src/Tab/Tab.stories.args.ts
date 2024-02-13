import { TabProps } from './Tab'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'

export const defaultArgs: Partial<TabProps> = {
  size: 'md',
  type: 'button',
  tabsData: [
    {
      id: 't1',
      text: 'Tab 1',
      children: DefaultContent(),
      onTabSelect: () => {},
    },
    {
      id: 't2',
      text: 'Tab 2',
      children: DefaultContent2(),
      onTabSelect: () => {},
    },
    {
      id: 't3',
      text: 'Tab 3',
      children: DefaultContent3(),
      onTabSelect: () => {
        alert('onTabSelectFired!')
      },
    },
  ],
}
export const argTypes = {
  size: {
    control: 'select',
    options: ['sm', 'md'],
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
  isTransparent: {
    defaultValue: false,
    control: 'boolean',
  },
  border: {
    defaultValue: false,
    control: 'boolean',
  },
  dynamicTabWidth: {
    defaultValue: false,
    control: 'boolean',
  },
  defaultValue: {
    defaultValue: 't1',
    control: 'select',
    options: ['t1', 't2', 't3'],
  },
}
