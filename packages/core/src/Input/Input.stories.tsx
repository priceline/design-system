import React from 'react'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { Box, Input, Label, Divider, Button } from '..'
import { argTypes } from './Input.stories.args'

export default {
  title: 'Input',
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

const Template = (args) => <Input my={3} {...args} />

export const InputComponent = Template.bind({})

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

export const WithExternalLabel = () => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-input'>
      Label!
    </Label>
    <Input id='sample-input-1' placeholder='Click the label' />
  </Box>
)

export const WithHelperText = () => (
  <Box width={400}>
    <Box>
      <Label fontSize={4} htmlFor='sample-input-2'>
        Same color as Input
      </Label>
      <Input
        id='sample-input-2'
        placeholder='Click the label'
        color='error.base'
        helperText={<Input.HelperText>No soup for you!</Input.HelperText>}
      />
    </Box>
    <Divider />
    <Box>
      <Label fontSize={4} htmlFor='sample-input-3'>
        Override color for helper text
      </Label>
      <Input
        id='sample-input-3'
        placeholder='Click the label'
        color='error.base'
        helperText={<Input.HelperText color='secondary.base'>No soup for you!</Input.HelperText>}
      />
    </Box>
  </Box>
)

export const WithLabel = () => (
  <Box width={400}>
    <Label>
      Label Text
      <Input id='input-with-label' placeholder='Click the label' mt={1} />
    </Label>
  </Box>
)

export function ForwardsRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <Input ref={dsRef} placeholder='Priceline!' />
        <Button onClick={onClick} mt={3}>
          Click to focus the input via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
