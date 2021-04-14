import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Check,
  Success,
  SuccessOutline,
  Visibility,
  VisibilityOff,
} from 'pcln-icons'
import {
  Badge,
  Flex,
  IconButton,
  IconField,
  Input,
  Label,
  ProgressBar,
} from '..'
import { Text } from '../Text'

const NoWrapText = styled(Text)`
  white-space: nowrap;
`

const maxProgressBarLength = 4

function PasswordInput({
  id,
  isValid,
  label,
  hasProgressBar,
  progressBarSteps,
  regexChecks,
  value,
  onChange,
  autoComplete,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [passedChecks, setPassedChecks] = useState([])

  const changeVisibility = () => setShowPassword(!showPassword)

  const handleChange = (event) => {
    const currentValue = event.target.value
    const passedChecks = []

    if (hasProgressBar) {
      regexChecks.reduce(
        (acc, element, index) =>
          element.regex.test(currentValue) && passedChecks.push(index),
        passedChecks
      )
      setPassedChecks(passedChecks)
    }

    const lengthsMatch =
      !hasProgressBar || passedChecks.length === regexChecks.length
    onChange && onChange({ isValid: lengthsMatch, value: currentValue })
  }

  const inputType = showPassword ? 'text' : 'password'
  const VisibilityIcon = showPassword ? VisibilityOff : Visibility

  const strengthLevel = Math.max(
    Math.round(
      (maxProgressBarLength / regexChecks.length) * passedChecks.length
    ),
    0
  )
  const currentStep = progressBarSteps[strengthLevel - 1]
  const showCheckIcon =
    isValid || (hasProgressBar && strengthLevel === maxProgressBarLength)

  return (
    <Flex flexDirection='column' {...props}>
      <Label htmlFor={id} fontSize={0} mb={2}>
        {label}
      </Label>
      <IconField>
        <Input
          id={id}
          type={inputType}
          value={value}
          onChange={handleChange}
          data-testid='input-field'
          autoComplete={autoComplete}
        />
        {showCheckIcon && (
          <Check color='secondary' data-testid='check-mark-icon' />
        )}
        <IconButton
          title='visibility-button'
          icon={<VisibilityIcon color='text.light' />}
          onClick={changeVisibility}
        />
      </IconField>
      {hasProgressBar && (
        <Flex flexDirection='column'>
          <Flex alignItems='center' my={2}>
            <NoWrapText fontSize={0} color='text.light' mr={2}>
              Password Strength:{' '}
            </NoWrapText>
            {currentStep && (
              <Badge color={currentStep.color} size='small'>
                {currentStep.text}
              </Badge>
            )}
          </Flex>
          <ProgressBar steps={progressBarSteps} currentStep={strengthLevel} />
          <Flex
            flexDirection={['column', null, 'row']}
            mt={2}
            mb={[2, null, 0]}
          >
            <NoWrapText fontSize={0} color='text.light' mr={3}>
              Must contain:
            </NoWrapText>
            <Flex flexWrap='wrap'>
              {regexChecks.map((check, index) => {
                const didPass =
                  passedChecks.findIndex((value) => index === value) !== -1
                const Icon = didPass ? Success : SuccessOutline
                const color = didPass ? 'success' : 'text.light'

                return (
                  <Flex
                    alignItems='center'
                    mt={[2, null, 0]}
                    mb={[0, null, 2]}
                    key={'regex-label-' + index}
                  >
                    <Icon
                      size='16px'
                      color={color}
                      mr={1}
                      data-testid={
                        Icon === Success ? 'check-icon-on' : 'check-icon-off'
                      }
                    />
                    <NoWrapText fontSize={0} color={color} mr={3}>
                      {check.label}
                    </NoWrapText>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
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
    { label: 'at least 12 Characters', regex: /.{12,}/ },
  ],
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  hasProgressBar: PropTypes.bool,
  progressBarSteps: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string, text: PropTypes.string })
  ),
  progressBarDefaultStep: PropTypes.number,
  regexChecks: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, regex: PropTypes.regex })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
}

export default PasswordInput
