import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Sparkle, ArrowLeft } from 'pcln-icons'
import { Drawer } from './Drawer'
import React, { useState } from 'react'
import { Text } from '../Text/Text'
import { Stamp } from '../Stamp/Stamp'
import { ChatMessageContainer } from '../ChatMessageContainer/ChatMessageContainer'
import { DrawerHandle } from './Drawer.styled'
import { Button } from '../Button/Button'

function DrawerStory(props) {
  const [isOpen, setIsOpen] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const { includeCloseButton = true, includeCollapseButton = true } = props

  return (
    <Box height='50vh' p={0}>
      <Drawer
        heading='Header'
        isOpen={isOpen}
        isCollapsed={isCollapsed}
        onClose={includeCloseButton ? () => setIsOpen(false) : undefined}
        onCollapse={includeCollapseButton ? () => setIsCollapsed((isCollapsed) => !isCollapsed) : undefined}
        {...props}
      >
        {props.children}
      </Drawer>
    </Box>
  )
}

const CustomPennyHeader = (
  <Flex width='100%' alignItems='center'>
    <Text color='text.heading' textStyle='heading5'>
      Penny
      <Sparkle color='promoPrimary' size='16px' />
    </Text>
    <Stamp color='primary' mx={2}>
      Beta
    </Stamp>
  </Flex>
)

const NeighborhoodsHeader = (
  <Flex width='100%' alignItems='center'>
    <Flex>
      <ArrowLeft color='primary.base' />
    </Flex>
    <DrawerHandle />
    <Flex ml='auto'>
      <Button color='primary.base' size='small' variation='subtle'>
        Search Hotels
      </Button>
    </Flex>
  </Flex>
)

const CustomPennyContent = (
  <ChatMessageContainer
    messageMaxWidth='90%'
    messages={[
      {
        dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
        message: "Hi! I'm Penny, your virtual travel assistant!",
        variation: 'initial',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
        message:
          'I see that you are interested in booking the Hilton Hawaiian Village for 3 nights from Mon, Apr 10, 2023, to Thu, Apr 13, 2023. The total cost for this stay is $796.68, with a total tax and fee of $111.57. There is an additional fee of $130.83 for facilities when you check-in. This hotel features free WiFi and is located in the Waikiki Beach Marina area. The room has 1 king bed and is rated 4 stars.',
        variation: 'incoming',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:34:12 GMT-0500',
        message: 'Is this hotel in a good location?',
        variation: 'outgoing',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:34:30 GMT-0500',
        message:
          "Yes, the Hilton Hawaiian Village is located in a fantastic area, specifically in the Waikiki Beach Marina - Ala Moana neighborhood. This location is renowned for its beautiful beaches, vibrant nightlife, and a wide variety of shopping and dining options. It's a great spot if you're looking to experience the best of Honolulu. If you have any other questions or if you're ready to book, feel free to ask!",
        variation: 'incoming',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
        message: "Hi! I'm Penny, your virtual travel assistant!",
        variation: 'initial',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
        message:
          'I see that you are interested in booking the Hilton Hawaiian Village for 3 nights from Mon, Apr 10, 2023, to Thu, Apr 13, 2023. The total cost for this stay is $796.68, with a total tax and fee of $111.57. There is an additional fee of $130.83 for facilities when you check-in. This hotel features free WiFi and is located in the Waikiki Beach Marina area. The room has 1 king bed and is rated 4 stars.',
        variation: 'incoming',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:34:12 GMT-0500',
        message: 'Is this hotel in a good location?',
        variation: 'outgoing',
      },
      {
        dateTime: 'Wed Jul 11 2023 11:34:30 GMT-0500',
        message:
          "Yes, the Hilton Hawaiian Village is located in a fantastic area, specifically in the Waikiki Beach Marina - Ala Moana neighborhood. This location is renowned for its beautiful beaches, vibrant nightlife, and a wide variety of shopping and dining options. It's a great spot if you're looking to experience the best of Honolulu. If you have any other questions or if you're ready to book, feel free to ask!",
        variation: 'incoming',
      },
    ]}
  />
)

export default {
  title: 'Drawer',
  component: Drawer,
  args: {
    width: '50%',
    height: '100%',
    placement: 'right',
    isFloating: true,
  },
  argTypes: {
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
      description: 'moves the drawer to the specified position',
    },
    isFloating: {
      description: 'set to false to anchor the drawer to a specific side',
    },
  },
}

export const Top = (args) => (
  <DrawerStory {...args} height='50%' width='100%' placement='top'>
    Drawer Content
  </DrawerStory>
)

export const Bottom = (args) => (
  <DrawerStory {...args} height='50%' width='100%' placement='bottom'>
    Drawer Content
  </DrawerStory>
)
export const Left = (args) => (
  <DrawerStory {...args} placement='left'>
    Drawer Content
  </DrawerStory>
)
export const Right = (args) => (
  <DrawerStory {...args} placement='right'>
    Drawer Content
  </DrawerStory>
)
export const Anchored = (args) => (
  <DrawerStory {...args} isFloating={false} placement='right'>
    Drawer Content
  </DrawerStory>
)

export const Mobile = (args) => (
  <DrawerStory {...args} isMobile isFloating={false} placement='right' width='100%'>
    Drawer Content
  </DrawerStory>
)
export const WithNoHeader = (args) => (
  <DrawerStory
    {...args}
    placement='right'
    heading={undefined}
    includeCloseButton={false}
    includeCollapseButton={false}
    onClose={null}
    onCollapse={null}
  >
    {CustomPennyContent}
  </DrawerStory>
)
export const WithCustomHeadingAndContent = (args) => (
  <DrawerStory {...args} placement='right' heading={CustomPennyHeader}>
    {CustomPennyContent}
  </DrawerStory>
)

export const WithNeighborhoodsHeadingNoDivider = (args) => (
  <DrawerStory
    {...args}
    placement='right'
    heading={NeighborhoodsHeader}
    isMobile
    isFloating={false}
    width='100%'
    onClose={null}
    onCollapse={null}
    showDivider={false}
  />
)

export const WithCloseButton = (args) => (
  <DrawerStory {...args} placement='right' onCollapse={undefined} includeCollapseButton={false}>
    Drawer Content
  </DrawerStory>
)

export const WithCollapseButton = (args) => (
  <DrawerStory {...args} placement='right' includeCloseButton={false} onClose={null}>
    Drawer Content
  </DrawerStory>
)

export const WithContentOverflow = (args) => (
  <DrawerStory {...args} height='50vh' placement='right'>
    {CustomPennyContent}
  </DrawerStory>
)
