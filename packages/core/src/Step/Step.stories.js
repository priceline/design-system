import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { Step } from '.'

const onClick = action('Step Clicked')

storiesOf('Step', module)
  .add(
    'Step component',
    withInfo({
      inline: true,
      text: 'Use the <Stepper.Step /> component to render a step.',
    })(() => <Step>Step</Step>)
  )
  .add('Current Step', () => <Step active>Step</Step>)
  .add('Completed Step', () => <Step completed>Step</Step>)
  .add('Current and Completed Step', () => (
    <Step active completed>
      Step
    </Step>
  ))
  .add('Clickable Step', () => <Step onClick={onClick}>Step</Step>)
