import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Flex,
  Box,
  FormField,
  Label,
  Input,
  Icon,
  Select,
  Tooltip
} from '../src'

storiesOf('FormField', module)
  .add('with Icon', () => (
    <FormField>
      <Label htmlFor="demo">Email Address</Label>
      <Icon name="email" color="blue" />
      <Input id="demo" name="demo" defaultValue="hello@example.com" />
    </FormField>
  ))
  .add('dynamic label', () => (
    <Flex>
      <Box px={2} width={1 / 2}>
        <FormField>
          <Label autoHide htmlFor="demo">
            No value
          </Label>
          <Input id="demo" name="demo" placeholder="Without a value" />
        </FormField>
      </Box>
      <Box px={2} width={1 / 2}>
        <FormField>
          <Label autoHide htmlFor="demo">
            With value
          </Label>
          <Input id="demo" name="demo" value="hello@example.com" />
        </FormField>
      </Box>
    </Flex>
  ))
  .add('dynamic label with value', () => (
    <FormField>
      <Label htmlFor="demo">Email Address</Label>
      <Input
        id="demo"
        name="demo"
        placeholder="hello@example.com"
        value="hello@example.com"
      />
    </FormField>
  ))
  .add('Icon to the right', () => (
    <FormField>
      <Label htmlFor="demo">Email Address</Label>
      <Input
        id="demo"
        name="demo"
        placeholder="hello@example.com"
        value="hello@example.com"
      />
      <Icon name="check" color="green" />
    </FormField>
  ))
  .add('with Select', () => (
    <FormField>
      <Label htmlFor="demo">State</Label>
      <Icon name="pin" color="blue" />
      <Select id="demo" name="demo">
        <option>New York</option>
        <option>New Jersey</option>
      </Select>
    </FormField>
  ))
  .add('with successful validation', () => (
    <FormField>
      <Label htmlFor="demo">Email Address</Label>
      <Input
        id="demo"
        name="demo"
        placeholder="hello@example.com"
        color="green"
      />
      <Icon name="success" color="green" />
    </FormField>
  ))
  .add('with error Tooltip', () => (
    <Box>
      <FormField>
        <Label htmlFor="demo">Email Address</Label>
        <Input
          id="demo"
          name="demo"
          placeholder="hello@example.com"
          aria-describedby="demo-error"
          color="red"
        />
        <Icon name="warning" color="red" />
      </FormField>
      <Tooltip id="demo-error" right color="white" bg="red">
        Email address is required
      </Tooltip>
    </Box>
  ))
