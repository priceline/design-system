import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Step from '../src/Step'

const onClick = () => alert('Step Clicked')

storiesOf('Step', module)
  .add(
    'Step component',
    withInfo({
      inline: true,
      text: 'Use the <Step /> component to render a step.'
    })(() => <Step>Step</Step>)
  )
  .add('Current Step', () => <Step isCurrent>Step</Step>)
  .add('Completed Step', () => <Step isCompleted>Step</Step>)
  .add('Current and Completed Step', () => (
    <Step isCurrent isCompleted>
      Step
    </Step>
  ))
  .add('Clickable Step', () => <Step onClick={onClick}>Step</Step>)
