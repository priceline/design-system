import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Box,
  Container,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  Icon,
  Label
} from '../src'

const numOfRooms = 1
const DropdownLabel = Label.extend`
  cursor: pointer;
`
const LabelTextContainer = Container.extend`
  overflow-wrap: break-word;
`

storiesOf('Dropdown', module)
  .add('Dropdown - Collapsed', () => (
    <Dropdown width={220}>
      <DropdownButton>
        <Box>
          <Icon name="key" size={24} color="blue" />
        </Box>
        <DropdownLabel width={4} fontSize={1} px={2} align="left" color="black">
          <LabelTextContainer maxWidth={155}>
            {numOfRooms} Room
          </LabelTextContainer>
        </DropdownLabel>
        <Box>
          <Icon name="chevronDown" size={12} color="black" />
        </Box>
      </DropdownButton>
    </Dropdown>
  ))
  .add('Dropdown - Expanded', () => (
    <Dropdown width={220}>
      <DropdownButton open>
        <Box>
          <Icon name="key" size={24} color="blue" />
        </Box>
        <DropdownLabel width={4} fontSize={1} pl={2} align="left" color="black">
          <LabelTextContainer maxWidth={155}>
            {numOfRooms} Room
          </LabelTextContainer>
        </DropdownLabel>
        <Box mr={-2}>
          <Icon name="chevronUp" size={24} color="black" />
        </Box>
      </DropdownButton>
      <DropdownMenu borderWidth={0} boxShadowSize="lg" mt={2} width="100%">
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
    </Dropdown>
  ))
