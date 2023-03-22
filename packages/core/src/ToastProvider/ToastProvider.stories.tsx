import React from 'react'
import ToastProvider from './ToastProvider'
import { MockToastChildren } from '../__test__/mocks/toasts'

export default {
  title: 'Core / ToastProvider',
  component: ToastProvider,
}

const Template = (args) => (
  <ToastProvider {...args}>
    <MockToastChildren />
  </ToastProvider>
)

export const _ToastProvider = Template.bind({})
