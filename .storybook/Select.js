import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Label, Box } from '../src'

storiesOf('Select', module)
  .add('default', () => (
    <Box>
      <Label htmlFor="cabinClass">Cabin Class</Label>
      <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">
        <option>Economy</option>
        <option>Premium Economy</option>
        <option>Business</option>
        <option>First Class</option>
        <option>
          With a super long label that doesn't get clobbered by the chevron
        </option>
      </Select>
    </Box>
  ))
  .add('long option string', () => (
    <Box width={[1, 320]}>
      <Label htmlFor="cabinClass">Cabin Class</Label>
      <Select id="cabinClass" name="cabinClass" defaultValue="">
        <option>
          With a super long label that doesn't collide with the chevron
        </option>
      </Select>
    </Box>
  ))
