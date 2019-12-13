import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconField, Input, Select, IconButton } from '../src'
import {
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Close as CloseIcon
} from 'pcln-icons'
import { action } from '@storybook/addon-actions'

storiesOf('IconField', module)
  .add('Icon and Input', () => (
    <IconField>
      <CalendarIcon color="blue" />
      <Input placeholder="Choose Date" />
    </IconField>
  ))
  .add('Input and Icon', () => (
    <IconField>
      <Input placeholder="Choose Date" />
      <CalendarIcon color="blue" />
    </IconField>
  ))
  .add('Input and Icon Button', () => (
    <IconField>
      <Input placeholder="Choose Date" />
      <IconButton
        icon={<CloseIcon />}
        size={24}
        color="gray"
        title="Clear text"
        onClick={action('Icon button clicked')}
      />
    </IconField>
  ))
  .add('Icon, Input, and Icon', () => (
    <IconField>
      <CalendarIcon color="blue" />
      <Input placeholder="Choose Date" />
      <CheckIcon color="green" />
    </IconField>
  ))
  .add('Icon, Input and Icon Button', () => (
    <IconField>
      <CalendarIcon color="blue" />
      <Input placeholder="Choose Date" />
      <IconButton
        icon={<CloseIcon />}
        size={24}
        color="gray"
        title="Clear text"
        onClick={action('Icon button clicked')}
      />
    </IconField>
  ))
  .add('Icon and Select', () => (
    <IconField>
      <CalendarIcon color="blue" />
      <Select>
        <option>Choose Date</option>
        <option>January 2019</option>
      </Select>
    </IconField>
  ))
