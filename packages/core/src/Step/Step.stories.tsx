import React from 'react'
import { action } from '@storybook/addon-actions'

import { Step } from '.'

const onClick = action('Step Clicked')

export default {
  title: 'Step',
  component: Step,
  parameters: {
    docs: {
      description: {
        component: 'Use the <Stepper.Step /> component to render a step.',
      },
    },
  },
}

export const StepComponent = () => <Step>Step</Step>

export const CurrentStep = () => <Step active>Step</Step>
export const CompletedStep = () => <Step completed>Step</Step>

export const CurrentAndCompletedStep = () => (
  <Step active completed>
    Step
  </Step>
)

export const ClickableStep = () => <Step onClick={onClick}>Step</Step>
