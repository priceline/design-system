import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Visibility,
  VisibilityOff,
  Check,
  Success,
  SuccessOutline,
} from 'pcln-icons'
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

const CustomText = styled(Text)`
  white-space: nowrap;
`

const maxProgressBarLength = 4

function PasswordInput({
  label,
  hasProgressBar,
  progressBarSteps,
  regexChecks,
  value,
  onChange,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [passedChecks, setPassedChecks] = useState([])

  const changeVisibility = () => setShowPassword(!showPassword)

  const handleChange = (event) => {
    const currentInput = event.target.value
    const passedChecks = []

    regexChecks.reduce(
      (acc, element, index) =>
        element.regex.test(currentInput) && passedChecks.push(index),
      passedChecks
    )

    setPassedChecks(passedChecks)

    const isValid = passedChecks.length === regexChecks.length
    onChange && onChange({ isValid, value: currentInput })
  }

  const inputType = showPassword ? 'text' : 'password'
  const VisibilityIcon = showPassword ? VisibilityOff : Visibility

  const strengthLevel = Math.max(
    Math.floor(
      (maxProgressBarLength / regexChecks.length) * passedChecks.length
    ),
    1
  )
  const currentStep = progressBarSteps[strengthLevel - 1]
  const showCheckIcon = strengthLevel === maxProgressBarLength

  return (
    <Flex flexDirection='column'>
      <Label fontSize={0} mb={2}>
        {label}
      </Label>
      <IconField>
        <Input
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
          <Flex alignItems='center' mt={2} mb={2}>
            <CustomText fontSize={0} color='text.light' mr={2}>
              Password Strength:{' '}
            </CustomText>
            <Badge color={currentStep.color} size='small'>
              {currentStep.text}
            </Badge>
          </Flex>
          <ProgressBar steps={progressBarSteps} currentStep={strengthLevel} />
          <Flex
            flexDirection={['column', null, 'row']}
            mt={2}
            mb={[2, null, 0]}
          >
            <CustomText fontSize={0} color='text.light' mr={3}>
              Must contain:
            </CustomText>
            <Flex flexDirection={['column', null, 'row']} wrap>
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
                    <CustomText fontSize={0} color={color} mr={3}>
                      {check.label}
                    </CustomText>
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
    { label: 'at least 8 Characters', regex: /.{8,}/ },
  ],
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  hasProgressBar: PropTypes.bool,
  progressBarSteps: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string, text: PropTypes.string })
  ),
  progressBarDefaultStep: PropTypes.number,
  regexChecks: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, regex: PropTypes.string })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
}

export default PasswordInput
