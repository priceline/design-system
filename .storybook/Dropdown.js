import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Box,
  Container,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  Flex,
  Icon,
  Label,
  Text
} from '../src'

const numOfRooms = 1
const LabelExtended = Label.extend`
  cursor: pointer;
`
const LabelTextContainer = Container.extend`
  overflow-wrap: break-word;
`

storiesOf('Dropdown', module)
  .add('Dropdown - Collapsed', () => (
    <Dropdown flexDirection="column" width={220}>
      <DropdownButton>
        <Flex justify="space-between" align="center" mx={-2}>
          <Icon name="key" size={24} color="blue" />
          <LabelExtended
            width={4}
            fontSize={1}
            px={2}
            align="left"
            color="black"
          >
            <LabelTextContainer maxWidth={135}>
              {numOfRooms} Room
            </LabelTextContainer>
          </LabelExtended>
          <Icon name="chevronDown" size={12} color="black" />
        </Flex>
      </DropdownButton>
    </Dropdown>
  ))
  .add('Dropdown - Expanded With Simple Options', () => (
    <Dropdown flexDirection="column" width={220}>
      <DropdownButton
        id="roomDropdown"
        ariaHaspopup="ariaHaspopup"
        ariaControls="roomDropdownMenu"
        ariaExpanded="true"
        cursor="pointer"
      >
        <Flex justify="space-between" align="center" mx={-2}>
          <Icon name="key" size={24} color="blue" />
          <LabelExtended
            width={4}
            fontSize={1}
            pl={2}
            align="left"
            color="black"
          >
            <LabelTextContainer maxWidth={135}>
              {numOfRooms} Room
            </LabelTextContainer>
          </LabelExtended>
          <Box mr={-2}>
            <Icon name="chevronUp" size={24} color="black" />
          </Box>
        </Flex>
      </DropdownButton>
      <DropdownMenu
        id="roomDropdownMenu"
        ariaLabelledBy="roomDropdown"
        ariaActiveDescendantIndex={1}
        role="menu"
        tabIndex={0}
        overflow="scroll"
        height="200px"
        borderWidth={0}
        boxShadowSize="lg"
      >
        <DropdownItem itemIndex={1} role="menuitem" isSelected>
          <Text py={3} px={4} mx={3} fontSize={0} align="left">
            1 Room
          </Text>
        </DropdownItem>
        <DropdownItem itemIndex={2} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              2 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={3} role="menuitem" tabIndex={1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              3 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={4} role="menuitem" tabIndex={2}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              4 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={5} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              5 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={6} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              6 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={7} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              7 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={8} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              8 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={9} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              9 Rooms
            </Text>
          </Box>
        </DropdownItem>
        <DropdownItem itemIndex={10} role="menuitem" tabIndex={-1}>
          <Box py={3} px={4} mx={3}>
            <Text fontSize={0} align="left">
              10+ Rooms
            </Text>
          </Box>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ))
