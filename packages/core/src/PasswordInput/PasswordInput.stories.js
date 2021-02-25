import React from 'react'
import PasswordInput from './PasswordInput'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
}

export const Basic = () => <PasswordInput />

export const WithTitle = () => <PasswordInput label='New Password' />

export const WithProgressBar = () => (
  <PasswordInput
    label='New Password'
    hasProgressBar={true}
    progressBarCurrentStep={3}
  />
)
