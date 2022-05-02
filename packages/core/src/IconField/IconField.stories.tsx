import React from 'react'
import { IconField, Input, Select, IconButton } from '..'
import {
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from 'pcln-icons'
import { action } from '@storybook/addon-actions'
import { argTypes } from './IconField.stories.args'

export default {
  title: 'IconField',
  component: IconField,
  argTypes,
}

export const IconAndInput = (args) => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' {...args} />
  </IconField>
)

IconAndInput.story = {
  name: 'Icon and Input',
}

export const InputAndIcon = (args) => (
  <IconField>
    <Input placeholder='Choose Date' {...args} />
    <CalendarIcon color='blue' />
  </IconField>
)

InputAndIcon.story = {
  name: 'Input and Icon',
}

export const InputWithMultipleIcons = (args) => (
  <IconField>
    <CheckIcon color='success' />
    <VisibilityIcon color='text.light' />
    <Input placeholder='Choose Date' {...args} />
    <VisibilityIcon color='text.light' />
    <CheckIcon color='success' />
  </IconField>
)

InputWithMultipleIcons.story = {
  name: 'Input with multiple Icons',
}

export const InputAndIconButton = (args) => (
  <IconField>
    <Input placeholder='Choose Date' {...args} />
    <IconButton
      icon={<CloseIcon />}
      size={24}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

InputAndIconButton.story = {
  name: 'Input and Icon Button',
}

export const IconInputAndIcon = (args) => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' {...args} />
    <CheckIcon color='green' />
  </IconField>
)

IconInputAndIcon.story = {
  name: 'Icon, Input, and Icon',
}

export const IconInputAndIconButton = (args) => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' {...args} />
    <IconButton
      icon={<CloseIcon />}
      size={24}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

IconInputAndIconButton.story = {
  name: 'Icon, Input and Icon Button',
}

export const IconAndSelect = (args) => (
  <IconField>
    <CalendarIcon color='blue' />
    <Select {...args}>
      <option>Choose Date</option>
      <option>January 2019</option>
    </Select>
  </IconField>
)

IconAndSelect.story = {
  name: 'Icon and Select',
}
