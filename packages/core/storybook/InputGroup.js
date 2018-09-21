import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputGroup, Input, Label, InputField, Icon, Text } from '../src'

storiesOf('InputGroup', module)
  .add('default', () => (
    <div>
      <Label>Name</Label>
      <InputGroup>
        <Input placeholder="First" />
        <Input placeholder="Last" />
      </InputGroup>
    </div>
  ))
  .add('date input', () => (
    <InputGroup>
      <InputField>
        <Label>Where from?</Label>
        <Icon name="departure" color="blue" />
        <Input placeholder="Where from?" />
      </InputField>
      <Text color="gray">–</Text>
      <InputField>
        <Label>Where to?</Label>
        <Icon name="arrival" color="blue" />
        <Input placeholder="Where to?" />
      </InputField>
    </InputGroup>
  ))
  .add('date input alternative', () => (
    <InputGroup>
      <Icon name="calendar" color="blue" ml={2} />
      <InputField>
        <Label>Where from?</Label>
        <Input placeholder="Where from?" />
      </InputField>
      <Text color="gray">–</Text>
      <InputField>
        <Label>Where to?</Label>
        <Input placeholder="Where to?" />
      </InputField>
    </InputGroup>
  ))
