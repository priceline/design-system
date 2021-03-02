import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Text,
  Input,
  Label,
  IconField,
  Badge,
  ProgressBar,
  IconButton,
} from '../../src'
import { Visibility, VisibilityOff, Check } from 'pcln-icons'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const CustomLabel = styled(Label)`
  font-size: ${themeGet('fontSizes.0')}px;
`

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
  const [showCheckIcon, setShowCheckIcon] = useState(false)
  const handleChange = (event) => {
    const currentInput = event.target.value
    const progressBarLength = 4
    let strengthPoint = 0
    setInputPassword(currentInput)

    regexChecks.forEach((element) => {
      element.regex.test(currentInput) && strengthPoint++
    })
    strengthPoint < regexChecks.length - 2
      ? setStrengthLevel(1)
      : setStrengthLevel(
          progressBarLength - (regexChecks.length - strengthPoint)
        )
    strengthPoint == regexChecks.length
      ? setShowCheckIcon(true)
      : setShowCheckIcon(false)
  }

  return (
    <Flex flexDirection='column'>
      <CustomLabel mb={2}>{label}</CustomLabel>
      <IconField>
        <Input type={inputType} onChange={handleChange} />
        {showCheckIcon && <Check color='secondary' />}
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
    { label: '1 Special Character', regex: /(?=.*[!@#$%^&*()])/ },
    { label: 'at least 8 Characters', regex: /.{8,}/ },
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
