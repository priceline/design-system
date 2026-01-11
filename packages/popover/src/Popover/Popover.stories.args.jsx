import { fn } from 'storybook/test'
import { Button, IconButton } from 'pcln-design-system'
import { InformationOutline } from 'pcln-icons'
import React from 'react'

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
  onClose: fn(),
  onOpen: fn(),
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
  onBeforeOpen: { action: true },
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
