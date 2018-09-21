import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from 'recompose'
import { Slider } from '../src'

const DemoSlider = withState('value', 'onChange', [32, 64])(Slider)

storiesOf('Slider', module)
  .add('Basic', () => <DemoSlider />)
  .add('Single value', () => <Slider value={[32]} />)
  .add('Multiple values', () => <Slider value={[16, 32, 64, 128]} max={256} />)
  .add('Colors', () => (
    <div>
      <Slider value={[8, 16]} color="green" mb={2} />
      <Slider value={[16, 32]} color="red" mb={2} />
      <Slider value={[32, 64]} color="orange" mb={2} />
      <Slider value={[64, 96]} color="purple" mb={2} />
    </div>
  ))
