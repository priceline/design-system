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
const DropdownMenuExtended = DropdownMenu.extend`
  cursor: pointer;
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
  .add('Dropdown - Expanded With Simple Options', () => {
    const roomItems = [
      '1 Room',
      '2 Rooms',
      '3 Rooms',
      '4 Rooms',
      '5 Rooms',
      '6 Rooms',
      '7 Rooms',
      '8 Rooms',
      '9 Rooms',
      '10+ Rooms'
    ]
    const selectedItemIndex = 0

    return (
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
        <DropdownMenuExtended
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
          {roomItems.map((value, index) => (
            <DropdownItem
              key={`RoomMenu-DropdownItem-${index}`}
              itemIndex={1}
              role="menuitem"
              isSelected={index === selectedItemIndex}
            >
              <Box py={3} px={4} mx={3}>
                <Text fontSize={0} align="left">
                  {value}
                </Text>
              </Box>
            </DropdownItem>
          ))}
        </DropdownMenuExtended>
      </Dropdown>
    )
  })
