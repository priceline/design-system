import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Box,
  Card,
  Container,
  DropdownButton,
  DropdownItem,
  Icon,
  Label
} from '../src'

const DropdownMenu = Card.extend`
  height: 200px;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;
`

storiesOf('Dropdown', module)
  .add('Dropdown - Closed', () => (
    <Box width={220}>
      <DropdownButton>
        <Box>
          <Icon name="key" size={24} color="blue" />
        </Box>
        <Box pr={3}>
          <Container maxWidth="80">
            <Label fontSize={1} pl={2} align="left">
              # Rooms
            </Label>
          </Container>
        </Box>
        <Box pl={5}>
          <Icon name="chevronDown" size={12} color="black" />
        </Box>
      </DropdownButton>
    </Box>
  ))
  .add('Dropdown - Open', () => (
    <Box width={220}>
      <DropdownButton open>
        <Box>
          <Icon name="key" size={24} color="blue" />
        </Box>
        <Box pr={3}>
          <Container maxWidth="80">
            <Label fontSize={1} pl={2} align="left">
              # Rooms
            </Label>
          </Container>
        </Box>
        <Box pl={5}>
          <Icon name="chevronUp" size={24} color="black" />
        </Box>
      </DropdownButton>
      <DropdownMenu borderWidth={0} boxShadowSize="lg" mt={2}>
        <DropdownItem isSelected>1 Room</DropdownItem>
        <DropdownItem>2 Rooms</DropdownItem>
        <DropdownItem>3 Rooms</DropdownItem>
        <DropdownItem>4 Rooms</DropdownItem>
        <DropdownItem>5 Rooms</DropdownItem>
        <DropdownItem>6 Rooms</DropdownItem>
        <DropdownItem>7 Rooms</DropdownItem>
        <DropdownItem>8 Rooms</DropdownItem>
        <DropdownItem>9 Rooms</DropdownItem>
        <DropdownItem>10+ Rooms</DropdownItem>
      </DropdownMenu>
    </Box>
  ))
