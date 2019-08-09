import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconField, Input, Select, Icon, IconButton } from '../src'
import { action } from '@storybook/addon-actions'

storiesOf('IconField', module)
  .add('Icon and Input', () => (
    <IconField>
      <Icon name="Calendar" color="blue" />
      <Input placeholder="Choose Date" />
    </IconField>
  ))
  .add('Input and Icon', () => (
    <IconField>
      <Input placeholder="Choose Date" />
      <Icon name="Calendar" color="blue" />
    </IconField>
  ))
  .add('Input and Icon Button', () => (
    <IconField>
      <Input placeholder="Choose Date" />
      <IconButton
        name="close"
        size={24}
        color="gray"
        title="Clear text"
        onClick={action('Icon button clicked')}
      />
    </IconField>
  ))
  .add('Icon, Input, and Icon', () => (
    <IconField>
      <Icon name="Calendar" color="blue" />
      <Input placeholder="Choose Date" />
      <Icon name="Check" color="green" />
    </IconField>
  ))
  .add('Icon, Input and Icon Button', () => (
    <IconField>
      <Icon name="Calendar" color="blue" />
      <Input placeholder="Choose Date" />
      <IconButton
        name="Close"
        size={24}
        color="gray"
        title="Clear text"
        onClick={action('Icon button clicked')}
      />
    </IconField>
  ))
  .add('Icon and Select', () => (
    <IconField>
      <Icon name="Calendar" color="blue" />
      <Select>
        <option>Choose Date</option>
        <option>January 2019</option>
      </Select>
    </IconField>
  ))
