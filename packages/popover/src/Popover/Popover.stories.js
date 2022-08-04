/* eslint-disable import/no-named-as-default, no-unused-vars, react/prop-types */
import {
  Absolute,
  BackgroundImage,
  Box,
  Button,
  CloseButton,
  FilterChip,
  Flex,
  IconButton,
  Link,
  Text,
  ThemeProvider,
} from 'pcln-design-system'
import { Close } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import Popover from './Popover'
import { argTypes, defaultArgs } from './Popover.stories.args'

export default {
  title: 'pcln-popover / Popover',
  component: Popover,
  args: defaultArgs,
  argTypes: argTypes,
}

const AbsolutePosBtn = styled(IconButton)`
  top: 20px;
  right: 20px;
  position: absolute;
`

const Template = ({ children, ...args }) => (
  <Flex justifyContent='center' alignItems='center' width={1} my={6}>
    <Popover
      renderContent={({ handleClose }) => (
        <Flex flexDirection='column' p={2} onClick={(e) => e.stopPropagation()}>
          <Text fontSize={1} mb={1} mt={0} fontWeight='bold'>
            Tip:
          </Text>
          <Text mt={0} mb={1}>
            Use arrow keys to navigate the calendar
          </Text>
          <AbsolutePosBtn onClick={handleClose} title='Close tooltip' icon={<Close />} />
        </Flex>
      )}
      ariaLabel='Calendar navigation tooltip'
      overlayOpacity={0.3}
      width={350}
      borderColor='border.base'
      trapFocus
      zIndex={2000}
      idx='date-picker-footer'
      {...args}
    >
      {children}
    </Popover>
  </Flex>
)

export const _Popover = Template.bind({})

export const colors = () => (
  <Flex m={200}>
    <Popover
      color='primary'
      renderContent={SimpleTextContent}
      placement='left'
      ariaLabel='Default Popover'
      width={130}
    >
      <Button color='primary' mx={2}>
        Default Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='top'
      ariaLabel='Success Popover'
      width={130}
      color='success'
    >
      <Button color='success' mx={2}>
        Success Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='bottom'
      ariaLabel='Alert Popover'
      width={130}
      color='alert'
    >
      <Button color='alert' mx={2}>
        Alert Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='right'
      ariaLabel='Error Popover'
      width={130}
      color='error'
    >
      <Button color='error' mx={2}>
        Error Popover
      </Button>
    </Popover>
  </Flex>
)

const FilterChipContent = ({ handleClose }) => (
  <Box p={3}>
    <Flex justifyContent='center' mb={3}>
      <FilterChip label='Filter Chip' size='sm' mr={2} />
      <FilterChip label='Filter Chip' size='sm' />
    </Flex>
    <Flex justifyContent='right'>
      <Button size='small' onClick={handleClose}>
        Done
      </Button>
    </Flex>
  </Box>
)

export const filterChips = () => (
  <Popover renderContent={FilterChipContent} placement='bottom' ariaLabel='Default Popover' width={300}>
    <Button color='primary'>Popover with Filter Chips</Button>
  </Popover>
)

export const bottom = () => (
  <Popover renderContent={InnerContent} placement='bottom' ariaLabel='Bottom Popover' idx={2} width={400}>
    <Link m={3}>Open Popover</Link>
  </Popover>
)

export const hideOverlay = () => (
  <Popover
    renderContent={InnerContent}
    placement='bottom'
    ariaLabel='Bottom Popover'
    hideOverlay
    idx={2}
    width={400}
  >
    <Link m={3}>Open Popover</Link>
  </Popover>
)

export const rightWithOverlayOnScrollPosition = () => (
  <Flex flexDirection='column'>
    <Text mb='2000px'>Scroll down, popover trigger is at the end</Text>
    <Box>
      <Popover
        renderContent={InnerContent}
        placement='top-start'
        ariaLabel='Test Popover'
        idx={1}
        width={400}
        overlayOpacity={0.3}
        color='error.light'
        borderColor='error.dark'
      >
        <Button>Popover</Button>
      </Popover>
    </Box>
  </Flex>
)

export const hideArrow = () => (
  <Popover
    renderContent={SimpleTextContent}
    placement='bottom'
    ariaLabel='Test Popover'
    idx={1}
    width={150}
    hideArrow
  >
    <Button>Popover</Button>
  </Popover>
)

const SimpleTextContent = () => (
  <Box p={2}>
    <Text textAlign='center'>Hello world!</Text>
  </Box>
)

const InnerContent = ({ handleClose }) => (
  <Box p={4}>
    <Absolute top={15} right={15}>
      <CloseButton onClick={handleClose} />
    </Absolute>
    <BackgroundImage
      width='100%'
      height='100px'
      image='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'
    />
    <Text theme pb={3} pt={3} fontSize={16} textAlign='center' bold>
      Do you accept the terms and conditions?
    </Text>
    <Flex justifyContent='center'>
      <Button color='primary' onClick={handleClose} mr={2}>
        Agree
      </Button>
      <Button variation='subtle' onClick={handleClose} ml={2}>
        Close
      </Button>
    </Flex>
  </Box>
)

export const PassesThemeToContent = () => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            base: 'red',
          },
        },
      }}
    >
      <Popover
        renderContent={InnerContent}
        placement='bottom'
        ariaLabel='Bottom Popover'
        idx={2}
        width={400}
        borderColor='border.base'
      >
        <Text color={'primary.base'}>hello world</Text>
      </Popover>
    </ThemeProvider>
  )
}
