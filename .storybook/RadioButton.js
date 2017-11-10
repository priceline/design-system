import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { RadioButton } from '../src'

storiesOf('RadioButton', module)
  .add('selected', () => (
    <RadioButton
      onClick={action('clicked')}
      isSelected
      radioButtonText="Option Selected"
    />
  ))
  .add('not selected', () => (
    <RadioButton
      onClick={action('clicked')}
      radioButtonText="Option Not Selected"
    />
  ))
  .add('disabled, click does not do anything', () => (
    <RadioButton
      onClick={action('clicked')}
      disabled
      radioButtonText="Option Disabled"
    />
  ))
