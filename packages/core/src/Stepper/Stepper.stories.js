import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
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

storiesOf('Stepper', module).add(
  'Stepper component',
  withInfo({
    inline: true,
    text: 'Use the <Stepper> component to render a stepper.',
  })(() => <Stepper>{children}</Stepper>)
)
