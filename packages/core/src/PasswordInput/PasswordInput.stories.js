import React from 'react'
import PasswordInput from './PasswordInput'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
}

const customRegexChecks = [
  { label: '1 Uppercase Letter', regex: /(?=.*[A-Z])/ },
  { label: '1 Lowercase Letter', regex: /(?=.*[a-z])/ },
]

export const Basic = () => <PasswordInput />

export const WithTitle = () => <PasswordInput label='New Password' />

export const WithProgressBar = () => (
  <PasswordInput label='New Password' hasProgressBar />
)

export const WithCustomRegex = () => (
  <PasswordInput
    label='New Password'
    hasProgressBar
    regexChecks={customRegexChecks}
  />
)
