import { ITabsProps } from './Tab'
import { DefaultContent, DefaultContent2, DefaultContent3 } from './constants'

export const defaultArgs: Partial<ITabsProps> = {
  size: 'md',
  hasHover: true,
  type: 'button',
  tabsContent: [
    {
      children: DefaultContent(),
    },
    {
      children: DefaultContent2(),
    },
    {
      children: DefaultContent3(),
    },
  ],
  tabsData: [
    {
      text: 'Tab 1',
    },
    {
      text: 'Tab 2',
    },
    {
      text: 'Tab 3',
    },
  ],
}
export const argTypes = {
  TabStyle: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
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
