import React from 'react'
import { Flex, Box, FormField, Label, Input, Select, Tooltip } from '..'
import { argTypes } from './FormField.stories.args'

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
  argTypes,
}

export const WithIcon = (args) => (
  <FormField>
    <Label htmlFor='demo'>Email Address</Label>
    <EmailIcon color='primary' />
    <Input type='email' id='email' name='email' defaultValue='hello@example.com' {...args} />
  </FormField>
)

WithIcon.story = {
  name: 'with Icon',
}

export const DynamicLabel = (args) => (
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
          {...args}
        />
      </FormField>
    </Box>
    <Box px={2} width={1 / 3}>
      <FormField>
        <Label autoHide htmlFor='dynamic-label-with-a-value'>
          With value
        </Label>
        <Input
          id='dynamic-label-with-a-value'
          name='dynamic-label-with-a-value'
          value='hello@example.com'
          {...args}
        />
      </FormField>
    </Box>
    <Box px={2} width={1 / 3}>
      <FormField>
        <Input
          id='dynamic-label-without-a-label'
          name='dynamic-label-without-a-label'
          value='Value without label'
          {...args}
        />
      </FormField>
    </Box>
  </Flex>
)

DynamicLabel.story = {
  name: 'dynamic label',
}

export const DynamicLabelWithValue = (args) => (
  <FormField>
    <Label htmlFor='dynamic-label-email'>Email Address</Label>
    <Input
      id='dynamic-label-email'
      name='dynamic-label-email'
      placeholder='hello@example.com'
      value='hello@example.com'
      {...args}
    />
  </FormField>
)

DynamicLabelWithValue.story = {
  name: 'dynamic label with value',
}

export const IconToTheRight = (args) => (
  <FormField>
    <Label htmlFor='dynamic-label-email-icon-right'>Email Address</Label>
    <Input
      id='dynamic-label-email-icon-right'
      name='dynamic-label-email-icon-right'
      placeholder='hello@example.com'
      value='hello@example.com'
      {...args}
    />
    <CheckIcon color='secondary' />
  </FormField>
)

IconToTheRight.story = {
  name: 'Icon to the right',
}

export const WithSelect = (args) => (
  <FormField>
    <Label htmlFor='dynamic-label-state-select'>State</Label>
    <PinIcon color='primary' />
    <Select id='dynamic-label-state-select' name='dynamic-label-state-select' {...args}>
      <option>New York</option>
      <option>New Jersey</option>
    </Select>
  </FormField>
)

WithSelect.story = {
  name: 'with Select',
}

export const WithSuccessfulValidation = (args) => (
  <FormField>
    <Label htmlFor='valid'>Email Address</Label>
    <Input id='valid' name='valid' placeholder='hello@example.com' color='success' {...args} />
    <SuccessIcon color='success' />
  </FormField>
)

WithSuccessfulValidation.story = {
  name: 'with successful validation',
}

export const WithErrorTooltip = (args) => (
  <Box>
    <FormField>
      <Label htmlFor='error-tooltip'>Email Address</Label>
      <Input
        id='error-tooltip'
        name='error-tooltip'
        placeholder='hello@example.com'
        aria-describedby='demo-error'
        color='error'
        {...args}
      />
      <WarningIcon color='error' />
    </FormField>
    <Tooltip id='demo-error' right color='error'>
      Email address is required
    </Tooltip>
  </Box>
)

WithErrorTooltip.story = {
  name: 'with error Tooltip',
}
