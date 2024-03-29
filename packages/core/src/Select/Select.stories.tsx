import React from 'react'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { Select } from './Select'
import { argTypes, defaultArgs } from './Select.stories.args'

export default {
  title: 'Select',
  component: Select,
  args: defaultArgs,
  argTypes,
}

const Template = (args) => (
  <Box>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue='Premium Economy' {...args}>
      <option>Economy</option>
      <option disabled>-------------</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
      <option>With a super long label that does not get clobbered by the chevron</option>
    </Select>
  </Box>
)

export const _Select = Template.bind({})

export const SubtleVariation = Template.bind({})
SubtleVariation.args = { variation: 'subtle' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const LongOptionString = () => (
  <Box width={[1, 320]}>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue=''>
      <option>With a super long label that does not collide with the chevron</option>
    </Select>
  </Box>
)

export const HiddenLabel = () => (
  <Box width={[1, 320]}>
    <Label hidden htmlFor='cabinClass'>
      Cabin Class
    </Label>
    <Select id='cabinClass' name='cabinClass' defaultValue=''>
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
    </Select>
  </Box>
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <Select id='cabinClass' name='cabinClass' defaultValue='' ref={dsRef}>
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </Select>
        <Button onClick={onClick} mt={4}>
          Click to focus select via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
