import React from 'react'
import { Flex, Text } from 'pcln-design-system'
import { Bed } from 'pcln-icons'

import MenuItem from './MenuItem'
import { argTypes, defaultArgs } from './MenuItem.stories.args'

export default {
  title: 'pcln-menu / MenuItem',
  component: MenuItem,
  args: defaultArgs,
  argTypes,
  parameters: {
    docs: { description: { component: 'some component **markdown**' } },
  },
}

const Template = (args) => <MenuItem {...args}>Recommended</MenuItem>

export const _MenuItem = Template.bind({})

const CurrencyChildren = () => (
  <>
    <Text mr={3}>C$</Text>
    <Text>Canadian Dollar</Text>
  </>
)

export const Currency = Template.bind({})
Currency.args = {
  selected: true,
  children: <CurrencyChildren />,
}

const MultilineChildren = () => (
  <Flex flexDirection='column' alignItems='flex-start'>
    <Text>List Item</Text>
    <Text fontSize={0} regular>
      Helper Text
    </Text>
  </Flex>
)

export const Multiline = Template.bind({})
Multiline.args = {
  selected: true,
  children: <MultilineChildren />,
}

const MultilineWithIconChildren = () => (
  <Flex>
    <Bed mr={2} />
    <Flex flexDirection='column' alignItems='flex-start'>
      <Text>List Item</Text>
      <Text fontSize={0} regular>
        Helper Text
      </Text>
    </Flex>
  </Flex>
)

export const MultilineWithIcon = Template.bind({})
MultilineWithIcon.args = {
  selected: true,
  children: <MultilineWithIconChildren />,
}
