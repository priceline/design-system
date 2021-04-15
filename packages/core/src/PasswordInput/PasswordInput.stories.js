import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'
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

export const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isNewPasswordValid, setNewPasswordValid] = useState(false)

  const onCurrentPasswordChange = ({ value }) => setCurrentPassword(value)
  const onConfirmPasswordChange = ({ value }) => setConfirmPassword(value)

  const onNewPasswordChange = ({ isValid, value }) => {
    setNewPassword(value)
    setNewPasswordValid(isValid)
  }

  const currentPasswordMatches =
    !!currentPassword && currentPassword === newPassword
  const newPasswordsMatch =
    newPassword === confirmPassword && isNewPasswordValid
  const isSaveEnabled = !currentPasswordMatches && newPasswordsMatch
  const onClick = action({
    currentPassword,
    newPassword,
    confirmPassword,
    isNewPasswordValid,
  })

  return (
    <Box width={[1, null, 500]}>
      <PasswordInput
        label='Current Password'
        onChange={onCurrentPasswordChange}
        mb={3}
      />
      <PasswordInput
        label='New Password'
        hasProgressBar
        onChange={onNewPasswordChange}
        mb={3}
      />
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
