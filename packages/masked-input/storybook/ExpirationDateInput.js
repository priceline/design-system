import React from 'react'
import { Label, FormField } from 'pcln-design-system'
import Component from '@reach/component-component'
import { ExpirationDateInput } from '../src'

export default props => (
  <Component
    initialState={{ date: '' }}
    children={({ state, setState }) => (
      <div>
        <Label mb={1} fontSize={1} htmlFor="cc-exp">
          Expiration Date
        </Label>
        <ExpirationDateInput
          value={state.date}
          onChange={date => {
            setState({ date })
          }}
        />
      </div>
    )}
  />
)
