import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Label, Input, Radio, Flex } from '../src'

storiesOf('Label', module)
  .add(
    'Label component',
    withInfo({
      inline: true,
      text:
        'Simple styled label component that supports a number of the styled-system props.'
    })(() => <Label m={3}>Label Component</Label>)
  )
  .add('Using fontSize', () => (
    <div>
      <Label fontSize={6}>Label with fontSize 6</Label>
      <Label fontSize={5}>Label with fontSize 5</Label>
      <Label fontSize={4}>Label with fontSize 4</Label>
      <Label fontSize={3}>Label with fontSize 3</Label>
      <Label fontSize={2}>Label with fontSize 2</Label>
      <Label fontSize={1}>Label with fontSize 1</Label>
      <Label fontSize={0}>Label with fontSize 0</Label>
    </div>
  ))
  .add('Spacing', () => (
    <div>
      <Label mt={4} mb={2}>
        A tish of margin
      </Label>
      <Label pl={3}>A dash of padding</Label>
    </div>
  ))
  .add('color', () => (
    <div>
      <Label color="blue">A blue label</Label>
      <Label color="green">a green label</Label>
    </div>
  ))
  .add('htmlFor', () => (
    <div>
      Clicking{' '}
      <Label fontSize={4} htmlFor="sample-input">
        here
      </Label>{' '}
      should focus on the input element.
      <br />
      <Input id="sample-input" />
    </div>
  ))
  .add('nowrap', () => (
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
  ))
