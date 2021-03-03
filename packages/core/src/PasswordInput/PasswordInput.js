import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
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
  mediaQueries,
} from '../../src'

const CustomFlex = styled(Flex)`
  margin-top: ${themeGet('space.2')}px;
  ${mediaQueries[1]} {
    margin-top: 0;
  }
`

const CustomText = styled(Text)`
  font-size: ${themeGet('fontSizes.0')}px;
`

const FlexDesktopOnly = styled(Flex)`
  flex-direction: column;
  ${mediaQueries[1]} {
    flex-direction: row;
    margin-bottom: ${themeGet('space.2')}px;
  }
`

function PasswordInput({
  label,
  hasProgressBar,
  progressBarSteps,
  progressBarDefaultStep,
  regexChecks,
  value,
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
  const [hasNumOrSpecial, setHasNumOrSpecial] = useState(false)
  const [hasMinEightChar, setHasMinEightChar] = useState(false)

  const successIconOn = (
    <Success
      size='16px'
      color={'secondary'}
      mr={1}
      data-testid='check-icon-on'
    />
  )
  const successIconOff = (
    <SuccessOutline
      size='16px'
      color={'text.light'}
      mr={1}
      data-testid='check-icon-off'
    />
  )

  const successIconOne = hasNumOrSpecial ? successIconOn : successIconOff
  const successIconTwo = hasMinEightChar ? successIconOn : successIconOff
  const requirementOneColor = hasNumOrSpecial ? 'secondary' : 'text.light'
  const requirementTwoColor = hasMinEightChar ? 'secondary' : 'text.light'

  const handleChange = (event) => {
    const currentInput = event.target.value
    const progressBarLength = 4
    const hasNumberOrSpecial =
      regexChecks[2].regex.test(currentInput) ||
      regexChecks[3].regex.test(currentInput)
    const hasMinimumEight = regexChecks[4].regex.test(currentInput)
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

    hasNumberOrSpecial ? setHasNumOrSpecial(true) : setHasNumOrSpecial(false)
    hasMinimumEight ? setHasMinEightChar(true) : setHasMinEightChar(false)
    hasNumberOrSpecial && hasMinimumEight
      ? setShowCheckIcon(true)
      : setShowCheckIcon(false)
  }

  return (
    <Flex flexDirection='column'>
      <Label fontSize={0} mb={2}>
        {label}
      </Label>
      <IconField>
        <Input
          type={inputType}
          onChange={handleChange}
          data-testid='input-field'
        />
        {showCheckIcon && (
          <Check color='secondary' data-testid='check-mark-icon' />
        )}
        <IconButton
          title='visibility-button'
          icon={visibilityIcon}
          onClick={changeVisibility}
        />
      </IconField>
      {hasProgressBar && (
        <Flex flexDirection='column'>
          <Flex alignItems='center' mt={2} mb={2}>
            <CustomText color='text.light' mr={2}>
              Password Strength:{' '}
            </CustomText>
            <Badge
              color={progressBarSteps[strengthLevel - 1].color}
              size='small'
            >
              {progressBarSteps[strengthLevel - 1].text}
            </Badge>
          </Flex>
          <ProgressBar steps={progressBarSteps} currentStep={strengthLevel} />
          <FlexDesktopOnly align-items='center' mt={2}>
            <CustomText color='text.light' mr={3}>
              Must contain:
            </CustomText>
            <CustomFlex alignItems='center'>
              {successIconOne}
              <CustomText color={requirementOneColor} mr={3}>
                1 number or special character
              </CustomText>
            </CustomFlex>
            <CustomFlex alignItems='center'>
              {successIconTwo}
              <CustomText color={requirementTwoColor}>
                8 characters minimum
              </CustomText>
            </CustomFlex>
          </FlexDesktopOnly>
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
