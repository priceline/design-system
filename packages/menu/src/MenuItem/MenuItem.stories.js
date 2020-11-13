import React from 'react'
import { Flex, Text } from 'pcln-design-system'
import { Bed } from 'pcln-icons'
import MenuItem from './MenuItem'

export default {
  title: 'pcln-menu|MenuItem',
  component: MenuItem,
}

export const NotSelected = () => <MenuItem>Recommended</MenuItem>

export const Selected = () => <MenuItem selected>Recommended</MenuItem>

export const Currency = () => (
  <MenuItem selected>
    <Text mr={3}>C$</Text>
    <Text>Canadian Dollar</Text>
  </MenuItem>
)

export const Multiline = () => (
  <MenuItem selected>
    <Flex flexDirection='column' alignItems='flex-start'>
      <Text>List Item</Text>
      <Text fontSize={0} regular>Helper Text</Text>
    </Flex>
  </MenuItem>
)

export const MultilineWithIcon = () => (
  <MenuItem selected>
    <Flex>
      <Bed mr={2} />
      <Flex flexDirection='column' alignItems='flex-start'>
        <Text>List Item</Text>
        <Text fontSize={0} regular>Helper Text</Text>
      </Flex>
    </Flex>
  </MenuItem>
)
