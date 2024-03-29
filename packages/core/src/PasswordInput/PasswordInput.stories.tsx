import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { PasswordInput } from './PasswordInput'

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

export const WithProgressBar = () => <PasswordInput label='New Password' hasProgressBar />

export const WithCustomRegex = () => (
  <PasswordInput label='New Password' hasProgressBar regexChecks={customRegexChecks} />
)

export const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isNewPasswordValid, setNewPasswordValid] = useState(false)

  function onCurrentPasswordChange({ value }) {
    return setCurrentPassword(value)
  }
  function onConfirmPasswordChange({ value }) {
    return setConfirmPassword(value)
  }

  function onNewPasswordChange({ isValid, value }) {
    setNewPassword(value)
    setNewPasswordValid(isValid)
  }

  const currentPasswordMatches = !!currentPassword && currentPassword === newPassword
  const newPasswordsMatch = newPassword === confirmPassword && isNewPasswordValid
  const isSaveEnabled = !currentPasswordMatches && newPasswordsMatch
  const onClick = action('Password changed')

  return (
    <Box width={[1, null, 500]}>
      <PasswordInput label='Current Password' onChange={onCurrentPasswordChange} mb={3} />
      <PasswordInput label='New Password' hasProgressBar onChange={onNewPasswordChange} mb={3} />
      <PasswordInput
        isValid={newPasswordsMatch}
        label='Confirm Password'
        onChange={onConfirmPasswordChange}
      />
      <Button disabled={!isSaveEnabled} onClick={onClick} mt={3}>
        Save
      </Button>
      {currentPasswordMatches && (
        <Text color='error' fontSize={0} mt={2}>
          New Password must be different from your current password
        </Text>
      )}
    </Box>
  )
}
