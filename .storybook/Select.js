import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card, Select, SelectField } from '../src'

const SelectFieldCard = Card.extend`
  height: 200px;
  overflow: scroll;
`

storiesOf('Select', module)
  .add('Select Composition - Collapsed', () => (
    <Box width={220}>
      <Select># Rooms</Select>
    </Box>
  ))
  .add('Select & SelectField Composition - Expanded', () => (
    <Box width={220}>
      <Select isExpanded># Rooms</Select>
      <SelectFieldCard borderWidth={0} boxShadowSize="lg" mt={2}>
        <SelectField isSelected>1 Room</SelectField>
        <SelectField>2 Rooms</SelectField>
        <SelectField>3 Rooms</SelectField>
        <SelectField>4 Rooms</SelectField>
        <SelectField>5 Rooms</SelectField>
        <SelectField>6 Rooms</SelectField>
        <SelectField>7 Rooms</SelectField>
        <SelectField>8 Rooms</SelectField>
        <SelectField>9 Rooms</SelectField>
        <SelectField>10+ Rooms</SelectField>
      </SelectFieldCard>
    </Box>
  ))
