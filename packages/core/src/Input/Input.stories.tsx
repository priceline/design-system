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

export const WithExternalLabel = (args) => (
  <Box width={400}>
    <Label fontSize={4} htmlFor='sample-input'>
      Label!
    </Label>
    <Input id='sample-input-1' placeholder='Click the label' {...args} />
  </Box>
)

export const WithHelperText = (args) => (
  <Box width={400}>
    <Box>
      <Label fontSize={4} htmlFor='sample-input'>
        Same color as Input
      </Label>
      <Input
        id='sample-input-2'
        placeholder='Click the label'
        color='error.base'
        {...args}
        helperText={<Input.HelperText>No soup for you!</Input.HelperText>}
      />
    </Box>
    <Divider />
    <Box>
      <Label fontSize={4} htmlFor='sample-input'>
        Override color for helper text
      </Label>
      <Input
        id='sample-input-3'
        placeholder='Click the label'
        color='error.base'
        {...args}
        helperText={<Input.HelperText color='secondary.base'>No soup for you!</Input.HelperText>}
      />
    </Box>
  </Box>
)

export function ForwardsRefs(args) {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <Input ref={dsRef} placeholder='Priceline!' {...args} />
        <Button onClick={onClick} mt={3}>
          Click to focus the input via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
