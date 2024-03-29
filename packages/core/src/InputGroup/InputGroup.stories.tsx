import React from 'react'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { FormField } from '../FormField/FormField'
import { Input } from '../Input/Input'
import { InputGroup } from '../InputGroup/InputGroup'
import { Label } from '../Label/Label'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

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
}

export const InputComponent = () => <Input my={3} />

export const Colors = () => (
  <Box width={400}>
    <Input mb={3} id='input-colors-1' placeholder='No color' />
    <Input mb={3} id='input-colors-2' color='primary' placeholder='Primary' />
    <Input mb={3} id='input-colors-3' color='secondary' placeholder='Secondary' />
    <Input mb={3} id='input-colors-4' color='warning' placeholder='Warning' />
    <Input mb={3} id='input-colors-5' color='alert' placeholder='Alert' />
    <Input mb={3} id='input-colors-6' color='caution' placeholder='Caution' />
  </Box>
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.value = 'Happy Panda :D')
    }
    return (
      <>
        <Input value='Sad Panda :(' />
        <Button onClick={onClick} mt={4}>
          Click to change input value via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

export const WithExternalLabel = () => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-input'>
      Label!
    </Label>
    <Input id='sample-input' placeholder='Click the label' />
  </Box>
)

export const GroupedInputs = () => (
  <InputGroup>
    <FormField>
      <Label>Where from?</Label>
      <Input placeholder='Where from?' />
    </FormField>
    <FormField>
      <Label>Where to?</Label>
      <Input placeholder='Where to?' />
    </FormField>
  </InputGroup>
)
