import React from 'react'
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
          <Item key={fruit} item={fruit} children={fruit} />
        ))}
      </Menu>
    </Autocomplete>
  </div>
)
