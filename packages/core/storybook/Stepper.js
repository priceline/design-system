import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Stepper } from '../src'

const onFirstClick = () => alert('First Step Clicked')

const children = (
  <React.Fragment>
    <Stepper.Step isCompleted onClick={onFirstClick}>
      First Step
    </Stepper.Step>
    <Stepper.Step isCurrent>Second Step</Stepper.Step>
    <Stepper.Step>Third Step</Stepper.Step>
  </React.Fragment>
)

const items = [
  {
    label: 'First Step',
    onClick: onFirstClick
  },
  {
    label: 'Second Step'
  },
  {
    label: 'Third Step'
  }
]

storiesOf('Stepper', module)
  .add(
    'Stepper component',
    withInfo({
      inline: true,
      text: 'Use the <Stepper> component to render a stepper.'
    })(() => <Stepper>{children}</Stepper>)
  )
  .add('Stepper with Children', () => <Stepper>{children}</Stepper>)
  .add('Stepper with items', () => <Stepper currentIndex={1} items={items} />)
