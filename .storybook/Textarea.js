import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Textarea, Label, theme } from '../src'

storiesOf('Textarea', module)
  .add(
    'Textarea component',
    withInfo({
      inline: true,
      text:
        'Simple styled Textarea component that accepts a color and whether or not to show an error container.'
    })(() => <Textarea my={3} />)
  )
  .add('Colors', () => (
    <Box width={400}>
      <Textarea mb={3} id="input-colors-1" placeholder="No color" />
      <Textarea mb={3} id="input-colors-2" color="red" placeholder="Red" />
      <Textarea mb={3} id="input-colors-3" color="green" placeholder="Green" />
      <Textarea
        mb={3}
        id="input-colors-4"
        color="orange"
        placeholder="Orange"
      />
      <Textarea mb={3} id="input-colors-5" color="blue" placeholder="Blue" />
    </Box>
  ))
  .add('With external label', () => (
    <Box width={400}>
      <Label fontSize={4} htmlFor="sample-input">
        Label!
      </Label>
      <Textarea id="sample-input" placeholder="Click the label" />
    </Box>
  ))
