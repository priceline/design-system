import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, TextArea, Label, theme } from '../src'

storiesOf('TextArea', module)
  .add(
    'TextArea component',
    withInfo({
      inline: true,
      text: 'Simple styled textarea component that accepts a color.'
    })(() => <TextArea my={3} />)
  )
  .add('Colors', () => (
    <Box width={400}>
      <TextArea mb={3} id="textarea-colors-1" placeholder="No color" />
      <TextArea
        mb={3}
        id="textarea-colors-2"
        color="primary"
        placeholder="Primary"
      />
      <TextArea
        mb={3}
        id="textarea-colors-3"
        color="secondary"
        placeholder="Secondary"
      />
      <TextArea
        mb={3}
        id="textarea-colors-4"
        color="warning"
        placeholder="Warning"
      />
      <TextArea
        mb={3}
        id="textarea-colors-5"
        color="alert"
        placeholder="Alert"
      />
      <TextArea
        mb={3}
        id="textarea-colors-6"
        color="caution"
        placeholder="Caution"
      />
    </Box>
  ))
  .add('With external label', () => (
    <Box width={400}>
      <Label fontSize={4} htmlFor="sample-textarea">
        Label!
      </Label>
      <TextArea id="sample-textarea" placeholder="Click the label" />
    </Box>
  ))
