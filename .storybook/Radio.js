import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Radio, Label } from '../src'

storiesOf('Radio', module).add('3 states', () => (
  <div onChange={action('changed')}>
    <Label fontSize="14px">
      <Radio checked />
      selected
    </Label>
    <Label fontSize="14px">
      <Radio />
      not selected
    </Label>
    <Label fontSize="14px">
      <Radio disabled />
      disabled
    </Label>
  </div>
))
