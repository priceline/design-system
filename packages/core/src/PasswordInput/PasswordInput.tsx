import { Check, Success, SuccessOutline, Visibility, VisibilityOff } from 'pcln-icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from '../Badge/Badge'
import { Flex, type FlexProps } from '../Flex/Flex'
import { IconButton } from '../IconButton/IconButton'
import { IconField } from '../IconField/IconField'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Text } from '../Text/Text'
import { type PaletteColor, type PaletteFamilyName } from '../theme/theme'

const NoWrapText = styled(Text)`
  white-space: nowrap;
`

const ClickableIconButton = styled(IconButton)`
  z-index: 1;
`

const maxProgressBarLength = 4

/**
 * @public
 */
export type PasswordInputProps = Omit<FlexProps, 'onChange'> & {
  id?: string
  isValid?: boolean
  label?: string
  hasProgressBar?: boolean
  progressBarSteps?: { color: PaletteColor | PaletteFamilyName; text: string }[]
  progressBarDefaultStep?: number
  regexChecks?: { label: string; regex: RegExp }[]
  value?: string
  onChange?: (event: { isValid: boolean; value: string }) => void
  autoComplete?: string
}

/**
 * @public
 */
export function PasswordInput({
  id,
  isValid,
  label,
  hasProgressBar = false,
  progressBarSteps = [
    { color: 'warning', text: 'WEAK' },
    { color: 'caution', text: 'FAIR' },
    { color: 'primary', text: 'GOOD' },
    { color: 'success', text: 'STRONG' },
  ],
  regexChecks = [
    { label: '1 Uppercase Letter', regex: /(?=.*[A-Z])/ },
    { label: '1 Lowercase Letter', regex: /(?=.*[a-z])/ },
    { label: '1 Number', regex: /(?=.*[0-9])/ },
    { label: '1 Special Character', regex: /(?=.*[!@#$%^&*()])/ },
    { label: 'at least 12 Characters', regex: /.{12,}/ },
  ],
  value,
  onChange,
  autoComplete,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [passedChecks, setPassedChecks] = useState([])

  function changeVisibility() {
    return setShowPassword(!showPassword)
  }

  function handleChange(event) {
    const currentValue = event.target.value
    const passedChecks = []

    if (hasProgressBar) {
      regexChecks.forEach((element, index) => element.regex.test(currentValue) && passedChecks.push(index))

      setPassedChecks(passedChecks)
    }

    const lengthsMatch = !hasProgressBar || passedChecks.length === regexChecks.length
    if (onChange) {
      onChange({ isValid: lengthsMatch, value: currentValue })
    }
  }

  const inputType = showPassword ? 'text' : 'password'
  const VisibilityIcon = showPassword ? VisibilityOff : Visibility

  const strengthLevel = Math.max(
    Math.round((maxProgressBarLength / regexChecks.length) * passedChecks.length),
    0
  )
  const currentStep = progressBarSteps[strengthLevel - 1]
  const showCheckIcon = isValid || (hasProgressBar && strengthLevel === maxProgressBarLength)

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
        {showCheckIcon && <Check color='secondary' data-testid='check-mark-icon' />}
        <ClickableIconButton
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
          <Flex flexDirection={['column', null, 'row']} mt={2} mb={[2, null, 0]}>
            <NoWrapText fontSize={0} color='text.light' mr={3}>
              Must contain:
            </NoWrapText>
            <Flex flexWrap='wrap'>
              {regexChecks.map((check, index) => {
                const didPass = passedChecks.findIndex((value) => index === value) !== -1
                const Icon = didPass ? Success : SuccessOutline
                const color = didPass ? 'success' : 'text.light'

                return (
                  <Flex alignItems='center' mt={[2, null, 0]} mb={[0, null, 2]} key={'regex-label-' + index}>
                    <Icon
                      size='16px'
                      color={color}
                      mr={1}
                      data-testid={Icon === Success ? 'check-icon-on' : 'check-icon-off'}
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
