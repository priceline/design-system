import React from 'react'
import { Label, FormField } from 'pcln-design-system'
import Component from '@reach/component-component'
import { CreditCardInput } from '../src'

export default props => (
  <Component
    initialState={{ ccNumber: '' }}
    children={({ state, setState }) => (
      <div>
        <Label mb={1} fontSize={1} htmlFor="cc-number">
          Credit Card Number
        </Label>
        <CreditCardInput
          value={state.ccNumber}
          onChange={ccNumber => {
            setState({ ccNumber })
          }}
        />
      </div>
    )}
  />
)
