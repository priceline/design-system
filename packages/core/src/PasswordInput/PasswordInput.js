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
  progressBarCurrentStep,
}) {
  const [visibility, setVisibility] = useState(false)
  const [visibilityIcon, setVisibilityIcon] = useState(
    <Visibility color='text.light' />
  )
  const [inputType, setInputType] = useState('password')

  const changeVisibility = () => {
    visibility
      ? setVisibilityIcon(<Visibility color='text.light' />)
      : setVisibilityIcon(<VisibilityOff color='text.light' />)
    visibility ? setVisibility(false) : setVisibility(true)
    visibility ? setInputType('password') : setInputType('text')
  }

  return (
    <Flex flexDirection='column'>
      <Text bold color='text.light' mb={2}>
        {label}
      </Text>
      <IconField>
        <Input type={inputType} />
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
              bg={progressBarSteps[progressBarCurrentStep - 1].color}
              color='white'
              mt={2}
              ml={2}
            >
              {progressBarSteps[progressBarCurrentStep - 1].text}
            </Badge>
          </Flex>
          <ProgressBar
            steps={progressBarSteps}
            currentStep={progressBarCurrentStep}
          />
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
  progressBarCurrentStep: 1,
}

PasswordInput.prototype = {
  label: PropTypes.string,
  hasProgressBar: PropTypes.bool,
  progressBarSteps: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string })
  ),
  progressBarCurrentStep: PropTypes.number,
}

export default PasswordInput
