# IconField

Group Inputs and Selects with Icons.

```.jsx
<IconField>
  <Calendar color='primary' />
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
  <Calendar color='primary' />
</IconField>
```

```.jsx
<IconField>
  <Calendar color='primary' />
  <Input
    placeholder='Choose Date'
  />
  <Check color='secondary' />
</IconField>
```

```.jsx
<IconField>
  <Calendar color='primary' />
  <Select>
    <option>Choose Date</option>
    <option>January 2019</option>
  </Select>
</IconField>
```

The `IconField` component accepts children as its only props.
It will parse children based on the `isField` and `isIcon` static properties.
By default, the design system's `Input` and `Select` and pcln-icon's named icon components will work with the `IconField` component, but to allow other children to render, add an appropriate static property.

```jsx
import React from 'react'
import { IconField } from 'pcln-design-system'
import { Calendar as CalendarIcon } from 'pcln-icons'
import CustomInput from './CustomInput'

CustomInput.isField = true

export default (props) => (
  <IconField>
    <CalendarIcon />
    <CustomInput {...props} />
  </IconField>
)
```

### Related

- [Icon](/Icon)
- [Input](/Input)
- [Select](/Select)
