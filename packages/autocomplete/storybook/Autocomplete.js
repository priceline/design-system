import React from 'react'
import { Text, Icon } from 'pcln-design-system'
import { Autocomplete, Label, Input, Menu, Item } from '../src'
import catNames from 'cat-names'

const cats = catNames.all
const match = (item, value) => item.includes(value)

export default props => (
  <div>
    <Autocomplete
      onChange={item => {
        console.log('selected', item)
      }}
      match={match}
    >
      <Label>Cat</Label>
      <Input />
      <Menu>
        {cats.map(cat => (
          <Item key={cat} item={cat}>
            <Icon name="pin" color="blue" />
            <Text px={2} fontSize={0}>
              {cat}
            </Text>
          </Item>
        ))}
      </Menu>
    </Autocomplete>
  </div>
)
