import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Text, Input, IconField, Badge } from '../../src'
import { Visibility, Check } from 'pcln-icons'
import { ProgressBar } from '../ProgressBar'

function PasswordInput({
  inputBoxTitle,
  hasProgressBar,
  progressBarSteps,
  progressBarCurrentStep,
}) {
  return (
    <Flex flexDirection='column'>
      <Text bold color='text.light' mb={2}>
        {inputBoxTitle}
      </Text>
      <IconField>
        <Input />
        <Check color='secondary' />
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
  inputBoxTitle: PropTypes.string,
  hasProgressBar: PropTypes.bool,
  progressBarSteps: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string })
  ),
  progressBarCurrentStep: PropTypes.number,
}

export default PasswordInput
