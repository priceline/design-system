import React from 'react'
import { action } from '@storybook/addon-actions'
import { Stepper } from '..'

const onFirstClick = action('First Step Clicked')

const children = (
  <React.Fragment>
    <Stepper.Step completed onClick={onFirstClick}>
      First Step
    </Stepper.Step>
    <Stepper.Step active>Second Step</Stepper.Step>
    <Stepper.Step>Third Step</Stepper.Step>
  </React.Fragment>
)

export default {
  title: 'Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: 'Use the <Stepper> component to render a stepper.',
      },
    },
  },
}

export const Default = () => <Stepper>{children}</Stepper>
