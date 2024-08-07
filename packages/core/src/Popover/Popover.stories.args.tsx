import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, IconButton } from '..'
import { InformationOutline } from 'pcln-icons'

const Children = {
  Button: <Button>Popover</Button>,
  Icon: (
    <IconButton
      icon={<InformationOutline color='text.light' size={20} />}
      title='More Information'
      type='button'
    />
  ),
}

export const defaultArgs = {
  borderRadius: 'lg',
  children: 'Button',
  openOnFocus: false,
  placement: 'top',
  onClose: action('Popover Close'),
  onOpen: action('Popover Open'),
  disableFloating: false,
}

export const argTypes = {
  children: {
    options: Object.keys(Children),
    mapping: Children,
    control: {
      type: 'select',
    },
  },
  color: {
    type: 'string',
  },
  disableFloating: {
    name: 'disableFloating',
    description: 'Disable floating-ui',
    table: {
      defaultValue: { summary: 'Sets crossAxis and mainAxis in the floating-ui' },
    },
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
  },
  width: {
    name: 'width',
    type: { name: 'string', required: false },
    description: 'Popover width',
  },
  onClose: { action: true },
  onMinimize: { action: true },
  placement: {
    name: 'placement',
    type: { name: 'string', required: true },
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
    control: { type: 'select' },
  },
  overlayOpacity: {
    name: 'overlayOpacity',
    type: { name: 'number', required: false },
    description: 'Overlay opacity',
    control: { type: 'number' },
  },
  toggleIsOpenOnClick: {
    name: 'toggleIsOpenOnClick',
    type: { name: 'boolean', required: false },
    description: 'Toggle isOpen on click',
    control: { type: 'boolean' },
  },
  isOpen: {
    name: 'isOpen',
    type: { name: 'boolean', required: false },
    description: 'Is the popover open?',
    control: { type: 'boolean' },
  },
  openOnHover: {
    name: 'openOnHover',
    type: { name: 'boolean', required: false },
    description: 'Open the popover when trigger is hovered',
    control: { type: 'boolean' },
  },
  maxWidth: {
    name: 'maxWidth',
    type: { name: 'string', required: false },
    description: 'Popover max width',
    control: { type: 'text' },
  },
}
