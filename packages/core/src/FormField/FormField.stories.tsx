import React from 'react'
import { Flex, Box, FormField, Label, Input, Select, Tooltip } from '..'

import {
  Check as CheckIcon,
  Email as EmailIcon,
  Pin as PinIcon,
  Success as SuccessIcon,
  Warning as WarningIcon,
} from 'pcln-icons'

export default {
  title: 'FormField',
  component: FormField,
  args: {
    disabled: false,
    readOnly: false,
  },
}

const Template = (args) => (
  <FormField {...args}>
    <Label htmlFor='demo'>Email Address</Label>
    <EmailIcon color='primary' />
    <Input type='email' id='email' name='email' defaultValue='hello@example.com' />
  </FormField>
)

export const _FormField = Template.bind({})

export const DisabledInputFormField = Template.bind({})
DisabledInputFormField.args = { disabled: true }

export const ReadOnlyInputFormField = Template.bind({})
ReadOnlyInputFormField.args = { readOnly: true }

export const DynamicLabel = () => (
  <Flex>
    <Box px={2} width={1 / 3}>
      <FormField>
        <Label autoHide htmlFor='dynamic-label-without-a-value'>
          No value
        </Label>
        <Input
          id='dynamic-label-without-a-value'
          name='dynamic-label-without-a-value'
          placeholder='Without a value'
        />
      </FormField>
    </Box>
    <Box px={2} width={1 / 3}>
      <FormField>
        <Label autoHide htmlFor='dynamic-label-with-a-value'>
          With value
        </Label>
        <Input id='dynamic-label-with-a-value' name='dynamic-label-with-a-value' value='hello@example.com' />
      </FormField>
    </Box>
    <Box px={2} width={1 / 3}>
      <FormField>
        <Input
          id='dynamic-label-without-a-label'
          name='dynamic-label-without-a-label'
          value='Value without label'
        />
      </FormField>
    </Box>
  </Flex>
)

export const DynamicLabelWithValue = () => (
  <FormField>
    <Label htmlFor='dynamic-label-email'>Email Address</Label>
    <Input
      id='dynamic-label-email'
      name='dynamic-label-email'
      placeholder='hello@example.com'
      value='hello@example.com'
    />
  </FormField>
)

export const IconToTheRight = () => (
  <FormField>
    <Label htmlFor='dynamic-label-email-icon-right'>Email Address</Label>
    <Input
      id='dynamic-label-email-icon-right'
      name='dynamic-label-email-icon-right'
      placeholder='hello@example.com'
      value='hello@example.com'
    />
    <CheckIcon color='secondary' />
  </FormField>
)

export const WithSelect = () => (
  <FormField>
    <Label htmlFor='dynamic-label-state-select'>State</Label>
    <PinIcon color='primary' />
    <Select id='dynamic-label-state-select' name='dynamic-label-state-select'>
      <option>New York</option>
      <option>New Jersey</option>
    </Select>
  </FormField>
)

export const WithDisabledSelect = () => (
  <FormField disabled>
    <Label htmlFor='dynamic-label-state-select'>State</Label>
    <PinIcon color='primary' />
    <Select id='dynamic-label-state-select' name='dynamic-label-state-select'>
      <option>New York</option>
      <option>New Jersey</option>
    </Select>
  </FormField>
)

export const WithReadOnlySelect = () => (
  <FormField readOnly>
    <Label htmlFor='dynamic-label-state-select'>State</Label>
    <PinIcon color='primary' />
    <Select id='dynamic-label-state-select' name='dynamic-label-state-select' defaultValue='New York'>
      <option>New York</option>
      <option>New Jersey</option>
    </Select>
  </FormField>
)

export const WithSuccessfulValidation = () => (
  <FormField>
    <Label htmlFor='valid'>Email Address</Label>
    <Input id='valid' name='valid' placeholder='hello@example.com' color='success' />
    <SuccessIcon color='success' />
  </FormField>
)

export const WithErrorTooltip = () => (
  <Box>
    <FormField>
      <Label htmlFor='error-tooltip'>Email Address</Label>
      <Input
        id='error-tooltip'
        name='error-tooltip'
        placeholder='hello@example.com'
        aria-describedby='demo-error'
        color='error'
      />
      <WarningIcon color='error' />
    </FormField>
    <Tooltip id='demo-error' right color='error'>
      Email address is required
    </Tooltip>
  </Box>
)
