import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, IconButton } from 'pcln-design-system'
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
  openOnHover: true,
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
  disableFloating: {
    name: 'disableFloating',
    description: 'Disable floating-ui',
    table: {
      defaultValue: { summary: 'Sets crossAxis and mainAxis in the floating-ui' },
    },
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
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
}
