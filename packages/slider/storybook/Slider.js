import React from 'react'
import { storiesOf } from '@storybook/react'
import Component from '@reach/component-component'
import Slider from '../src'

const formatValueText = value => `${value} units`

storiesOf('Slider', module)
  .add('Basic', () => (
    <div>
      <div>
        <div id="handle_2">Handle Two</div> is labelled by the text above
      </div>
      <Component
        initialState={{
          value: [32, 64]
        }}
        children={({ state, setState }) => (
          <Slider
            ariaLabelGroupForHandles={['Handle One', undefined]}
            ariaLabelledByGroupForHandles={[undefined, 'handle_2']}
            ariaValueTextFormattersForHandles={[
              formatValueText,
              formatValueText
            ]}
            value={state.value}
            onChange={value => {
              setState({ value })
            }}
          />
        )}
      />
    </div>
  ))
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
