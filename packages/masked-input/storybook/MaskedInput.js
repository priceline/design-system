import React from 'react'
import { Label, FormField, Input, Flex, Box } from 'pcln-design-system'
import { AsYouType } from 'libphonenumber-js'
import Component from '@reach/component-component'
import { MaskedInput } from '../src'

export default props => (
  <Component
    initialState={{ phone: '' }}
    children={({ state, setState }) => (
      <div>
        <Label mb={1} fontSize={1} htmlFor="phone">
          Phone Number
        </Label>
        <MaskedInput
          value={state.phone}
          onChange={value => {
            setState({ phone: value })
          }}
          format={str => new AsYouType('US').input(str)}
          placeholder="(555) 555-5555"
        />
      </div>
    )}
  />
)
