import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Input, Label } from '..'

storiesOf('Input', module)
  .add(
    'Input component',
    withInfo({
      inline: true,
      text:
        'Simple styled input component that accepts a color and whether or not to show an error container.',
    })(() => <Input my={3} />)
  )
  .add('Colors', () => (
    <Box width={400}>
      <Input mb={3} id='input-colors-1' placeholder='No color' />
      <Input mb={3} id='input-colors-2' color='primary' placeholder='Primary' />
      <Input
        mb={3}
        id='input-colors-3'
        color='secondary'
        placeholder='Secondary'
      />
      <Input mb={3} id='input-colors-4' color='warning' placeholder='Warning' />
      <Input mb={3} id='input-colors-5' color='alert' placeholder='Alert' />
      <Input mb={3} id='input-colors-6' color='caution' placeholder='Caution' />
    </Box>
  ))
  .add('With external label', () => (
    <Box width={400}>
      <Label fontSize={4} htmlFor='sample-input'>
        Label!
      </Label>
      <Input id='sample-input' placeholder='Click the label' />
    </Box>
  ))
