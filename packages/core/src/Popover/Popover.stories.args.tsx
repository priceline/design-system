import { InformationOutline } from 'pcln-icons'
import React from 'react'
import { fn } from 'storybook/test'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'

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

export const defaultArgs: Record<string, unknown> = {
  borderRadius: 'lg',
  children: 'Button',
  openOnFocus: false,
  placement: 'top' as const,
  onClose: fn(),
  onOpen: fn(),
  disableFloating: false,
}

export const argTypes = {
  children: {
    options: Object.keys(Children),
    mapping: Children,
    control: 'select' as const,
  },
  color: {},
  disableFloating: {
    description: 'Disable floating-ui',
    table: {
      defaultValue: { summary: 'Sets crossAxis and mainAxis in the floating-ui' },
    },
    control: 'boolean' as const,
  },
  width: {
    description: 'Popover width',
  },
  onClose: { action: true },
  onMinimize: { action: true },
  placement: {
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
    control: 'select' as const,
  },
  overlayOpacity: {
    description: 'Overlay opacity',
    control: 'number' as const,
  },
  toggleIsOpenOnClick: {
    description: 'Toggle isOpen on click',
    control: 'boolean' as const,
  },
  isOpen: {
    description: 'Is the popover open?',
    control: 'boolean' as const,
  },
  openOnHover: {
    description: 'Open the popover when trigger is hovered',
    control: 'boolean' as const,
  },
  maxWidth: {
    description: 'Popover max width',
    control: 'text' as const,
  },
}
