
# pcln-autocomplete

Composable React autocomplete component built with [Downshift][]

```sh
npm i pcln-autocomplete
```

```jsx
import React from 'react'
import { Autocomplete } from 'pcln-autocomplete'
import { Icon, Text } from 'pcln-design-system'

export default props =>
  <Autocomplete
    match={(item, value) => item.includes(value)}
    onChange={item => {
      props.onChange(item)
    }}>
    <Autocomplete.Label>
      Location
    </Autocomplete.Label>
    <Autocomplete.Input />
    <Autocomplete.Menu>
      {props.locations.map(location => (
        <Autocomplete.Item
          key={location.name}
          item={location}>
          <Icon
            name='pin'
            mr={2}
            color='blue'
          />
          <Text fontSize={0}>
            {location.name}
          </Text>
        </Autocomplete.Item>
      ))
    </Autocomplete.Menu>
  </Autocomplete>
```

## Components

All components can be imported by name and subcomponents are provided as static properties on the `Autocomplete` component.

### Autocomplete

Wrapper for Downshift component with additional `match` prop.

Prop | Type | Description
---|---|---
`match` | function | Filters direct children of the Menu component
`itemToString` | function | Used to determine the string value for the selected item (shown in the input value)
`onChange` | function | Called when the user selects an item and the selected item has changed. Called with the item that was selected and the new state of downshift

For additional props, see the [Downshift documentation][Downshift].

### Label

Design system `Label` component with additional default props provided by Downshift for accessibility.

### Input

Design system `Input` component with additional default props provided by Downshift for accessibility.

### Menu

Design system `Card` component with styles and default props to work with Downshift.

### Item

Design system `Flex` component with styles and default props to work with Downshift.

## Roadmap

- [ ] Make autocomplete elements compatible with design system `FormField`

[Downshift]: https://github.com/paypal/downshift


