import React from 'react'

import { Box, TextArea, Label, Button } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'Simple styled textarea component that accepts a color.',
      },
    },
  },
}

export const TextAreaComponent = () => <TextArea id='textarea-default' my={3} />

export const Colors = () => (
  <Box width={400}>
    <TextArea mb={3} id='textarea-colors-1' placeholder='No color' />
    <TextArea mb={3} id='textarea-colors-2' color='primary' placeholder='Primary' />
    <TextArea mb={3} id='textarea-colors-3' color='secondary' placeholder='Secondary' />
    <TextArea mb={3} id='textarea-colors-4' color='warning' placeholder='Warning' />
    <TextArea mb={3} id='textarea-colors-5' color='alert' placeholder='Alert' />
    <TextArea mb={3} id='textarea-colors-6' color='caution' placeholder='Caution' />
  </Box>
)

export const WithExternalLabel = () => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-textarea'>
      Label!
    </Label>
    <TextArea id='sample-textarea' placeholder='Click the label' />
  </Box>
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.value = 'Happy Panda :D')
    }
    return (
      <>
        <TextArea ref={dsRef} value='Sad Panda :(' />
        <Button onClick={onClick} mt={4}>
          Click to change input value via ref
        </Button>
      </>
    )
  }

  return <ForwardRefDemo refChild={refChild} />
}
