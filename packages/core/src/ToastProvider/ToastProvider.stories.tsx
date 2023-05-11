import React from 'react'
import ToastProvider from './ToastProvider'
import { MockToastChildren } from '../__test__/mocks/toasts'

export default {
  title: 'Core / ToastProvider',
  component: ToastProvider,
  argTypes: {
    lifespan: {
      description: 'Lifespan in milliseconds before the Toast closes.',
    },
    variation: {
      control: 'select',
      options: ['border', 'fill'],
      defaultValue: 'fill',
    },
  },
}

const Template = (args) => (
  <ToastProvider {...args}>
    <MockToastChildren variation={args.variation} />
  </ToastProvider>
)

export const _ToastProvider = Template.bind({})
