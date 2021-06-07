import React from 'react'
import List from './List'
import { Text } from '..'
import { argTypes, defaultArgs } from './List.stories.args'

export default {
  title: 'List',
  component: List,
  args: defaultArgs,
  argTypes,
}

const Template = (args) => {
  const ListType = args.type === 'ol' ? List.ol : List.ul

  return (
    <ListType {...args}>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
    </ListType>
  )
}

export const _List = Template.bind({})

export const OrderedList = Template.bind({})
OrderedList.args = { color: 'text.light', fontSize: 1 }

export const UnorderedList = Template.bind({})
UnorderedList.args = { color: 'text.light', fontSize: 1, type: 'ul' }
