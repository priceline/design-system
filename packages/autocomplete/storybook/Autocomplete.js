import React from 'react'
import { Text, Icon } from 'pcln-design-system'
import { Autocomplete, Label, Input, Menu, Item } from '../src'

const fruits = [
  'apple',
  'banana',
  'cherry',
  'durian',
  'fig',
  'lime',
  'orange',
  'pear'
]

export default props => (
  <div>
    <Autocomplete>
      <Label>Fruits</Label>
      <Input />
      <Menu>
        {fruits.map(fruit => (
          <Item key={fruit} item={fruit}>
            <Icon name="pin" color="blue" />
            <Text px={2} fontSize={0}>
              {fruit}
            </Text>
          </Item>
        ))}
      </Menu>
    </Autocomplete>
  </div>
)
