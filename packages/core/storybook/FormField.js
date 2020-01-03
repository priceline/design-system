import React from 'react'
import { storiesOf } from '@storybook/react'
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
      <Icon name="Email" color="blue" />
      <Input
        type="email"
        id="email"
        name="email"
        defaultValue="hello@example.com"
      />
    </FormField>
  ))
  .add('dynamic label', () => (
    <Flex>
      <Box px={2} width={1 / 3}>
        <FormField>
          <Label autoHide htmlFor="dynamic-label-without-a-value">
            No value
          </Label>
          <Input
            id="dynamic-label-without-a-value"
            name="dynamic-label-without-a-value"
            placeholder="Without a value"
          />
        </FormField>
      </Box>
      <Box px={2} width={1 / 3}>
        <FormField>
          <Label autoHide htmlFor="dynamic-label-with-a-value">
            With value
          </Label>
          <Input
            id="dynamic-label-with-a-value"
            name="dynamic-label-with-a-value"
            value="hello@example.com"
          />
        </FormField>
      </Box>
      <Box px={2} width={1 / 3}>
        <FormField>
          <Input
            id="dynamic-label-without-a-label"
            name="dynamic-label-without-a-label"
            value="Value without label"
          />
        </FormField>
      </Box>
    </Flex>
  ))
  .add('dynamic label with value', () => (
    <FormField>
      <Label htmlFor="dynamic-label-email">Email Address</Label>
      <Input
        id="dynamic-label-email"
        name="dynamic-label-email"
        placeholder="hello@example.com"
        value="hello@example.com"
      />
    </FormField>
  ))
  .add('Icon to the right', () => (
    <FormField>
      <Label htmlFor="dynamic-label-email-icon-right">Email Address</Label>
      <Input
        id="dynamic-label-email-icon-right"
        name="dynamic-label-email-icon-right"
        placeholder="hello@example.com"
        value="hello@example.com"
      />
      <Icon name="Check" color="green" />
    </FormField>
  ))
  .add('with Select', () => (
    <FormField>
      <Label htmlFor="dynamic-label-state-select">State</Label>
      <Icon name="Pin" color="blue" />
      <Select id="dynamic-label-state-select" name="dynamic-label-state-select">
        <option>New York</option>
        <option>New Jersey</option>
      </Select>
    </FormField>
  ))
  .add('with successful validation', () => (
    <FormField>
      <Label htmlFor="valid">Email Address</Label>
      <Input
        id="valid"
        name="valid"
        placeholder="hello@example.com"
        color="green"
      />
      <Icon name="Success" color="green" />
    </FormField>
  ))
  .add('with error Tooltip', () => (
    <Box>
      <FormField>
        <Label htmlFor="error-tooltip">Email Address</Label>
        <Input
          id="error-tooltip"
          name="error-tooltip"
          placeholder="hello@example.com"
          aria-describedby="demo-error"
          color="red"
        />
        <Icon name="Warning" color="red" />
      </FormField>
      <Tooltip id="demo-error" right color="white" bg="red">
        Email address is required
      </Tooltip>
    </Box>
  ))
