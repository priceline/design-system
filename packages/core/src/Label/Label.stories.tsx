import React from 'react'
import { Label, Input, Radio, Flex } from '..'
import { ILabelProps } from './Label'
import { argTypes, defaultArgs } from './Label.stories.args'

export default {
  title: 'Label',
  component: Label,
  args: defaultArgs,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'Simple styled label component that supports a number of the styled-system props.',
      },
    },
  },
}

const Template = (args: ILabelProps) => <Label {...args} />

export const _Label = Template.bind({})

export const Spacing = () => (
  <div>
    <Label mt={4} mb={2}>
      A tish of margin
    </Label>
    <Label pl={3}>A dash of padding</Label>
  </div>
)

export const HtmlFor = () => (
  <div>
    Clicking{' '}
    <Label fontSize={4} htmlFor='sample-input'>
      here
    </Label>{' '}
    should focus on the input element.
    <br />
    <Input id='sample-input' />
  </div>
)

HtmlFor.story = {
  name: 'htmlFor',
}

export const Nowrap = () => (
  <Flex>
    <Label nowrap>
      <Radio checked />
      Round-trip
    </Label>
    <Label nowrap>
      <Radio checked />
      One-way
    </Label>
    <Label nowrap>
      <Radio checked />
      Multi-destination
    </Label>
  </Flex>
)

Nowrap.story = {
  name: 'nowrap',
}
