import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { RadioButton } from '../src'

storiesOf('RadioButton', module).add('3 states', () => (
  <div>
    <div>
      <RadioButton
        onClick={action('clicked')}
        isSelected
        radioButtonText="Option Selected"
      />
    </div>
    <div>
      <RadioButton
        onClick={action('clicked')}
        radioButtonText="Option Not Selected"
      />
    </div>
    <div>
      <RadioButton
        onClick={action('clicked')}
        disabled
        radioButtonText="Option Disabled"
      />
    </div>
  </div>
))
