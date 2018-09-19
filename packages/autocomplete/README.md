
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

- Autocomplete
- Label
- Input
- Menu
- Item

[Downshift]: https://github.com/paypal/downshift
