import React from 'react'

import { Box, Button, Input, Label, InputGroup, FormField } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { argTypes } from './InputGroup.stories.args'

export default {
  title: 'InputGroup',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Simple styled input component that accepts a color and whether or not to show an error container.',
      },
    },
  },
  argTypes,
}

export const InputComponent = (args) => <Input my={3} {...args} />

export const Colors = (args) => (
  <Box width={400}>
    <Input mb={3} id='input-colors-1' placeholder='No color' {...args} />
    <Input mb={3} id='input-colors-2' color='primary' placeholder='Primary' {...args} />
    <Input mb={3} id='input-colors-3' color='secondary' placeholder='Secondary' {...args} />
    <Input mb={3} id='input-colors-4' color='warning' placeholder='Warning' {...args} />
    <Input mb={3} id='input-colors-5' color='alert' placeholder='Alert' {...args} />
    <Input mb={3} id='input-colors-6' color='caution' placeholder='Caution' {...args} />
  </Box>
)

export function ForwardRefs(args) {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.value = 'Happy Panda :D')
    }
    return (
      <>
        <Input dsRef={dsRef} value='Sad Panda :(' {...args} />
        <Button onClick={onClick} mt={4}>
          Click to change input value via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}

export const WithExternalLabel = (args) => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-input'>
      Label!
    </Label>
    <Input id='sample-input' placeholder='Click the label' {...args} />
  </Box>
)

WithExternalLabel.story = {
  name: 'With external label',
}

export const GroupedInputs = (args) => (
  <InputGroup>
    <FormField>
      <Label>Where from?</Label>
      <Input placeholder='Where from?' {...args} />
    </FormField>
    <FormField>
      <Label>Where to?</Label>
      <Input placeholder='Where to?' {...args} />
    </FormField>
  </InputGroup>
)
