import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Text,
  Input,
  IconField,
  Badge,
  ProgressBar,
  IconButton,
} from '../../src'
import { Visibility, VisibilityOff, Check } from 'pcln-icons'

function PasswordInput({
  label,
  hasProgressBar,
  progressBarSteps,
  progressBarDefaultStep,
  regexChecks,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = showPassword ? 'text' : 'password'
  const visibilityIcon = showPassword ? (
    <VisibilityOff color='text.light' />
  ) : (
    <Visibility color='text.light' />
  )
  const changeVisibility = () => setShowPassword(!showPassword)

  const [inputPassword, setInputPassword] = useState('')
  const [strengthLevel, setStrengthLevel] = useState(progressBarDefaultStep)

  const handleChange = (event) => {
    const currentInput = event.target.value
    setInputPassword(currentInput)

    let strengthPoint = 0
    regexChecks.forEach((element) => {
      element.regex.test(currentInput) && strengthPoint++
    })
    strengthPoint == 0 ? setStrengthLevel(1) : setStrengthLevel(strengthPoint)
  }

  return (
    <Flex flexDirection='column'>
      <Text bold color='text.light' mb={2}>
        {label}
      </Text>
      <IconField>
        <Input type={inputType} onChange={handleChange} />
        <IconButton
          title='visibility button'
          icon={visibilityIcon}
          onClick={changeVisibility}
        />
      </IconField>
      {hasProgressBar && (
        <Flex flexDirection='column'>
          <Flex alignContent='center' mb={2}>
            <Text color='text.light' mt={2}>
              Password Strength:{' '}
            </Text>
            <Badge
              color={progressBarSteps[strengthLevel - 1].color}
              mt={2}
              ml={2}
            >
              {progressBarSteps[strengthLevel - 1].text}
            </Badge>
          </Flex>
          <ProgressBar steps={progressBarSteps} currentStep={strengthLevel} />
        </Flex>
      )}
    </Flex>
  )
}

PasswordInput.defaultProps = {
  hasProgressBar: false,
  progressBarSteps: [
    { color: 'warning', text: 'WEAK' },
    { color: 'caution', text: 'FAIR' },
    { color: 'primary', text: 'GOOD' },
    { color: 'success', text: 'STRONG' },
  ],
  progressBarDefaultStep: 1,
  regexChecks: [
    { label: '1 Uppercase Letter', regex: /(?=.*[A-Z])/ },
    { label: '1 Lowercase Letter', regex: /(?=.*[a-z])/ },
    { label: '1 Number', regex: /(?=.*[0-9])/ },
    { label: '1 Special Charater', regex: /(?=.*[!@#$%^&*()])/ },
  ],
}

PasswordInput.prototype = {
  label: PropTypes.string,
  hasProgressBar: PropTypes.bool,
  progressBarSteps: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string })
  ),
  progressBarDefaultStep: PropTypes.number,
  regexChecks: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, regex: PropTypes.string })
  ),
}

export default PasswordInput
