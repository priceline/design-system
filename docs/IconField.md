# IconField

Group Inputs and Selects with Icons.

```.jsx
<IconField>
  <Icon name='Calendar' color='blue' />
  <Input
    placeholder='Choose Date'
  />
</IconField>
```

```.jsx
<IconField>
  <Input
    placeholder='Choose Date'
  />
  <Icon name='Calendar' color='blue' />
</IconField>
```

```.jsx
<IconField>
  <Icon name='Calendar' color='blue' />
  <Input
    placeholder='Choose Date'
  />
  <Icon name='Check' color='green' />
</IconField>
```

```.jsx
<IconField>
  <Icon name='Calendar' color='blue' />
  <Select>
    <option>Choose Date</option>
    <option>January 2019</option>
  </Select>
</IconField>
```

The `IconField` component accepts children as its only props.
It will parse children based on the `isField` and `isIcon` static properties.
By default the design system `Input`, `Select`, and `Icon` components will work with the `IconField` component, but to allow other children to render, add an appropriate static property.

```jsx
import React from 'react'
import { IconField, Icon } from 'pcln-design-system'
import CustomInput from './CustomInput'

CustomInput.isField = true

export default (props) => (
  <IconField>
    <Icon name='Calendar' />
    <CustomInput {...props} />
  </IconField>
)
```
