import React from 'react'
import { Button } from '../Button'
import { Flex } from '../Flex'
import ToastProvider, { useToast } from './ToastProvider'

export default {
  title: 'Core / ToastProvider',
  component: ToastProvider,
}

const Children = () => {
  const { addToast } = useToast()

  return (
    <Flex>
      <Button color='error' onClick={() => addToast('Error Toast', 'error')}>
        Add Error Toast
      </Button>
      <Button onClick={() => addToast('Information Toast', 'information')} mx={3}>
        Add Information Toast
      </Button>
      <Button color='success' onClick={() => addToast('Success Toast', 'success')}>
        Add Success Toast
      </Button>
    </Flex>
  )
}

const Template = (args) => (
  <ToastProvider {...args}>
    <Children />
  </ToastProvider>
)

export const _ToastProvider = Template.bind({})
