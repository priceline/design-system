import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card, Dropdown, DropdownField } from '../src'

const DropdownMenu = Card.extend`
  height: 200px;
  overflow: scroll;
`

storiesOf('Dropdown', module)
  .add('Dropdown - Closed', () => (
    <Box width={220}>
      <Dropdown># Rooms</Dropdown>
    </Box>
  ))
  .add('Dropdown - Open', () => (
    <Box width={220}>
      <Dropdown open># Rooms</Dropdown>
      <DropdownMenu borderWidth={0} boxShadowSize="lg" mt={2}>
        <DropdownField isSelected>1 Room</DropdownField>
        <DropdownField>2 Rooms</DropdownField>
        <DropdownField>3 Rooms</DropdownField>
        <DropdownField>4 Rooms</DropdownField>
        <DropdownField>5 Rooms</DropdownField>
        <DropdownField>6 Rooms</DropdownField>
        <DropdownField>7 Rooms</DropdownField>
        <DropdownField>8 Rooms</DropdownField>
        <DropdownField>9 Rooms</DropdownField>
        <DropdownField>10+ Rooms</DropdownField>
      </DropdownMenu>
    </Box>
  ))
  .add('Dropdown - Without Icon', () => (
    <Box width={220}>
      <Dropdown withIcon={false}># Rooms</Dropdown>
    </Box>
  ))
