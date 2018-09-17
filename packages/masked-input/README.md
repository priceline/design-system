
# pcln-masked-input

Masked input component with formatting for credit card numbers and expiration dates.

```sh
npm i pcln-masked-input
```

```jsx
import React from 'react'
import { MaskedInput } from 'pcln-masked-input'
import { Label, FormField, Button } from 'pcln-design-system'
import { AsYouType } from 'libphonenumber-js'

export default ({
  onSubmit,
  onChange,
  phoneNumber
}) =>
  <form onSubmit={onSubmit}>
    <FormField>
      <Label htmlFor='phone-number'>
        Phone Number
      </Label>
      <MaskedInput
        id='phone-number'
        name='phone-number'
        placeholder='(555) 555-5555'
        value={phoneNumber}
        onChange={phoneNumber => {
          onChange({ phoneNumber })
        }}
        format={str => new AsYouType('US').input(str)}
      />
    </FormField>
    <Button>
      Submit
    </Button>
  </form>
```

```jsx
// example credit card inputs
import React from 'react'
import { CreditCardInput, ExpirationDateInput } from 'pcln-masked-input'
import { Label, FormField, Input, Button } from 'pcln-design-system'

export default ({
  ccNumber,
  ccExpiration,
  ccCSC,
  onSubmit,
  onChange,
}) =>
  <form onSubmit={onSubmit}>
    <FormField>
      <Label htmlFor='cc-number'>
        Credit Card Number
      </Label>
      <CreditCardInput
        id='cc-number'
        name='cc-number'
        value={ccNumber}
        onChange={ccNumber => {
          onChange({ ccNumber })
        }}
      />
    </FormField>
    <FormField>
      <Label htmlFor='cc-expiration'>
        Expiration Date
      </Label>
      <ExpirationDateInput
        id='cc-expiration'
        name='cc-expiration'
        value={ccExpiration}
        onChange={ccExpiration => {
          onChange({ ccExpiration })
        }}
      />
    </FormField>
    <FormField>
      <Label htmlFor='cc-csc'>
        CVC
      </Label>
      <Input
        id='cc-csc'
        name='cc-csc'
        autoComplete='cc-csc'
        value={ccCSC}
        onChange={ccCSC => {
          onChange({ ccCSC })
        }}
      />
    </FormField>
    <Button>
      Submit
    </Button>
  </form>
```

## API

### MaskedInput

The base component wrapped with [rifm][] internally.

#### Props

- `value` (string) input value
- `onChange` (function) callback that returns the formatted string
- `format`: (function) formats the value for display
- Passes all other props directly to the rendered `Input` component

### CreditCardInput

MaskedInput component with formatter and default props for use as a credit card number field.

### ExpirationDateInput

MaskedInput component with `MM/YY` formatter and default props for use as an expiration date field.

## Related

- [rifm][]
- [Help users checkout faster with Autofill](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill)

[rifm]: https://github.com/istarkov/rifm/
