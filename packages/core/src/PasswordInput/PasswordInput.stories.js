import React from 'react'
import PasswordInput from './PasswordInput'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
}

export const Basic = () => <PasswordInput></PasswordInput>

export const WithTitle = () => (
  <PasswordInput inputBoxTitle='New Password'></PasswordInput>
)

export const WithProgressBar = () => (
  <PasswordInput
    inputBoxTitle='New Password'
    hasProgressBar={true}
  ></PasswordInput>
)
