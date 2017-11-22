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
  Label,
  Text
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
  .add('Dropdown - Expanded With Simple Options', () => (
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
      <DropdownMenu
        borderWidth={0}
        boxShadowSize="lg"
        width="100%"
        activeDescendantIndex={1}
      >
        <DropdownItem itemIdenx={1} isSelected>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              1 Room
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={2}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              2 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={3}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              3 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={4}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              4 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={5}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              5 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={6}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              6 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={7}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              7 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={8}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              8 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={9}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              9 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIdenx={10}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              10+ Rooms
            </Text>
          </Box>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ))
