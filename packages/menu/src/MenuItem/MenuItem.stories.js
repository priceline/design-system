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

const SinglelineChildren = () => <Text textStyle='paragraph'>Recommended</Text>

const Template = (args) => (
  <MenuItem {...args} width={275}>
    {args.children}
  </MenuItem>
)

export const Singleline = Template.bind({})
Singleline.args = {
  children: <SinglelineChildren />,
}

export const SinglelineSelected = Template.bind({})
SinglelineSelected.args = {
  selected: true,
  children: <SinglelineChildren />,
}

const MultilineChildren = () => (
  <Flex flexDirection='column' alignItems='flex-start'>
    <Text textStyle='paragraphBold'>List Item</Text>
    <Text color='text.light' textStyle='caption'>
      Helper Text
    </Text>
  </Flex>
)

export const MultilineSelected = Template.bind({})
MultilineSelected.args = {
  selected: true,
  children: <MultilineChildren />,
}

export const MultilineSelectedWithIcon = Template.bind({})
MultilineSelectedWithIcon.args = {
  icon: <Bed size={24} />,
  selected: true,
  children: <MultilineChildren />,
}

export const MultilineSelectedWithStringIconSymbol = Template.bind({})
MultilineSelectedWithStringIconSymbol.args = {
  icon: (
    <Flex justifyContent='center' width={24}>
      $
    </Flex>
  ),
  selected: true,
  children: <MultilineChildren />,
}
