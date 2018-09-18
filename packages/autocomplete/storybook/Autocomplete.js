import React from 'react'
import { Text, Icon } from 'pcln-design-system'
import { Autocomplete, Label, Input, Menu, Item } from '../src'
import catNames from 'cat-names'

// debugging
import Downshift from 'downshift'

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
    <hr />
    <Downshift
      children={({
        getLabelProps,
        getInputProps,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
        isOpen,
        clearSelection,
        selectedItem,
        inputValue,
        highlightedIndex
      }) => (
        <div>
          <label {...getLabelProps()}>Cats</label>
          <div>
            <input
              {...getInputProps({
                isOpen,
                placeholder: 'Cats'
              })}
            />
          </div>
          <div
            {...getMenuProps({
              isOpen,
              style: {
                opacity: isOpen ? 1 : 0.25,
                maxHeight: 256,
                overflowY: 'auto',
                backgroundColor: '#eee'
              }
            })}
          >
            {cats.filter(cat => match(cat, inputValue)).map((cat, i) => (
              <div
                key={cat}
                {...getItemProps({
                  item: cat,
                  index: i,
                  isActive: highlightedIndex === i,
                  isSelected: selectedItem === cat,
                  style: {
                    backgroundColor:
                      highlightedIndex === i ? 'cyan' : 'transparent'
                  }
                })}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      )}
    />
  </div>
)
