import React from 'react'

import { Select, Label, Box, Button } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'Select',
  component: Select,
}

export const Default = () => (
  <Box>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue='Premium Economy'>
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
      <option>With a super long label that does not get clobbered by the chevron</option>
    </Select>
  </Box>
)

Default.story = {
  name: 'default',
}

export const LongOptionString = () => (
  <Box width={[1, 320]}>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue=''>
      <option>With a super long label that does not collide with the chevron</option>
    </Select>
  </Box>
)

LongOptionString.story = {
  name: 'long option string',
}

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

HiddenLabel.story = {
  name: 'hidden label',
}

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

ForwardRefs.story = {
  name: 'Forward refs',
}
