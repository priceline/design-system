import React from 'react'
import { IconField, Input, Select, IconButton } from '..'
import {
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from 'pcln-icons'
import { action } from '@storybook/addon-actions'

export default {
  title: 'IconField',
  component: IconField,
}

export const IconAndInput = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
  </IconField>
)

export const InputAndIcon = () => (
  <IconField>
    <Input placeholder='Choose Date' />
    <CalendarIcon color='blue' />
  </IconField>
)

export const InputWithMultipleIcons = () => (
  <IconField>
    <CheckIcon color='success' />
    <VisibilityIcon color='text.light' />
    <Input placeholder='Choose Date' />
    <VisibilityIcon color='text.light' />
    <CheckIcon color='success' />
  </IconField>
)

export const InputAndIconButton = () => (
  <IconField>
    <Input placeholder='Choose Date' />
    <IconButton
      icon={<CloseIcon />}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

export const IconInputAndIcon = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
    <CheckIcon color='green' />
  </IconField>
)

export const IconInputAndIconButton = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
    <IconButton
      icon={<CloseIcon />}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

export const IconAndSelect = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Select>
      <option>Choose Date</option>
      <option>January 2019</option>
    </Select>
  </IconField>
)
