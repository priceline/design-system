import { Bus, Check } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { FormField } from '../FormField/FormField'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { colorSchemeNames } from '../storybook/args'
import { Tooltip } from './Tooltip'
import { argTypes } from './Tooltip.stories.args'

const FlexColumn = styled(Flex)`
  flex-direction: column;
`

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes,
}

const Template = (args) => <Tooltip {...args}>I am a tooltip!</Tooltip>

export const TooltipComponent = Template.bind({})
TooltipComponent.args = { color: 'primary' }

export const WithoutAnchors = () => (
  <Box mt={5} width={500}>
    <Tooltip color='primary' top left>
      left tooltip
    </Tooltip>
    <Tooltip color='primary' top center>
      centered tooltip
    </Tooltip>
    <Tooltip color='error' top right>
      right tooltip
    </Tooltip>
    <br />
    <Tooltip bottom left>
      left tooltip
    </Tooltip>
    <Tooltip bottom center>
      centered tooltip
    </Tooltip>
    <Tooltip bottom right>
      right tooltip
    </Tooltip>
  </Box>
)

export const WithAnchors = () => (
  <FlexColumn justifyContent='space-between' wrap='wrap'>
    <Box width={300} p={2} my={2}>
      <Tooltip top left color='primary'>
        top left tooltip
      </Tooltip>
      <div>some text</div>
    </Box>
    <Box width='300px' p={2} mb={5}>
      <div>some text</div>
      <Tooltip bottom left color='error'>
        bottom left tooltip
      </Tooltip>
    </Box>
    <Box width='300px' p={2} mb={55}>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-3'
          placeholder='example@test.com'
        />
        <Check color='primary' />
      </FormField>
      <Tooltip bottom left color='primary'>
        bottom left tooltip
      </Tooltip>
    </Box>
    <Box width='300px' p={2} mb={5}>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-4'
          placeholder='example@test.com'
        />
        <Check color='primary' />
      </FormField>
      <Tooltip bottom center color='primary'>
        bottom center tooltip
      </Tooltip>
    </Box>
    <Box width='300px' p={2} mb='80px'>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-5'
          placeholder='example@test.com'
        />
        <Check color='error' />
      </FormField>
      <Tooltip bottom right color='error'>
        Email Address Invalid
      </Tooltip>
    </Box>
    <Box width='300px' p={2} mb={5}>
      <Tooltip top left color='primary'>
        top left tooltip
      </Tooltip>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-6'
          placeholder='example@test.com'
        />
        <Check color='primary' />
      </FormField>
    </Box>
    <Box width='300px' p={2} mb={5}>
      <Tooltip top center color='primary'>
        top center tooltip
      </Tooltip>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-7'
          placeholder='example@test.com'
        />
        <Check color='primary' />
      </FormField>
    </Box>
    <Box width='300px' p={2}>
      <Tooltip top right color='primary'>
        top right tooltip
      </Tooltip>
      <FormField>
        <Label>Email Address</Label>
        <Input
          defaultValue='albus.dumbledore@priceline.com'
          id='form-field-8'
          placeholder='example@test.com'
        />
        <Check color='primary' />
      </FormField>
    </Box>
  </FlexColumn>
)

const ColorSchemesTemplate = () => {
  return (
    <React.Fragment>
      {colorSchemeNames.map((colorScheme) => (
        <Box mb='70px' key={colorScheme}>
          <Tooltip top right colorScheme={colorScheme}>
            <Flex alignItems='center'>
              <Bus mr={2} />
              {colorScheme}
            </Flex>
          </Tooltip>
          <FormField>
            <Label>Email Address</Label>
            <Input
              defaultValue='albus.dumbledore@priceline.com'
              id='form-field-7'
              placeholder='example@test.com'
            />
            <Check color='primary' />
          </FormField>
        </Box>
      ))}
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
