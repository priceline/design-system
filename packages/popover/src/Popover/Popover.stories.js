/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
} from '@storybook/addon-docs/blocks'
import { boolean } from '@storybook/addon-knobs'
import { DraggableParent, DraggableItem } from 'react-draggable-playground'
import styled from 'styled-components'
import {
  Absolute,
  BackgroundImage,
  Box,
  Button,
  CloseButton,
  Flex,
  getPaletteColor,
  Link,
  Text,
  ThemeProvider,
} from 'pcln-design-system'
import Component from '@reach/component-component'
import Slider from 'pcln-slider'
import Popover from './Popover'
import { Graph as GraphIcon, Pin as PinIcon } from 'pcln-icons'

export default {
  title: 'pcln-popover / Popover',
  component: Popover,
  parameters: {
    componentSubtitle: 'Used to display some content on top of another',
    docs: {
      // Customize Docs page to omit Stories slot due to broken styling from playground
      // eslint-disable-next-line react/display-name
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Props />
        </>
      ),
    },
  },
}

export const playground = () => (
  <React.Fragment>
    <Playground>
      <Popover
        renderContent={PriceGuidanceContent}
        placement='top'
        ariaLabel='Price Guidance Popover'
        idx={1}
        width={370}
        overlayOpacity={0.3}
        trapFocus={boolean('Trap focus', false)}
      >
        <Button>Popover</Button>
      </Popover>
    </Playground>
  </React.Fragment>
)

export const colors = () => (
  <Flex>
    <Popover
      renderContent={SimpleTextContent}
      placement='bottom'
      ariaLabel='Default Popover'
      width={130}
    >
      <Button color='primary' variation='outline' mx={2}>
        Default Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='bottom'
      ariaLabel='Success Popover'
      width={130}
      color='success'
    >
      <Button color='success' variation='outline' mx={2}>
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
      <Button color='alert' variation='outline' mx={2}>
        Alert Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='bottom'
      ariaLabel='Error Popover'
      width={130}
      color='error'
    >
      <Button color='error' variation='outline' mx={2}>
        Error Popover
      </Button>
    </Popover>
  </Flex>
)

export const forcedOpenViaProp = () => (
  <Popover
    renderContent={InnerContent}
    placement='bottom'
    ariaLabel='Bottom Popover'
    idx={2}
    width={400}
    isOpen
  >
    <Link>Open Popover</Link>
  </Popover>
)

export const openByDefault = () => (
  <Popover
    renderContent={InnerContent}
    placement='bottom'
    ariaLabel='Bottom Popover'
    idx={2}
    width={400}
    openOnMount
  >
    <Link>Open Popover</Link>
  </Popover>
)

export const bottom = () => (
  <Popover
    renderContent={InnerContent}
    placement='bottom'
    ariaLabel='Bottom Popover'
    idx={2}
    width={400}
  >
    <Link>Open Popover</Link>
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
    <Link>Open Popover</Link>
  </Popover>
)

export const rightWithOverlayOnScrollPosition = () => (
  <Flex flexDirection='column'>
    <Text mb='2000px'>Scroll down, popover trigger is at the end</Text>
    <Box>
      <Popover
        renderContent={InnerContent}
        placement='top'
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

const StyledBox = styled(Box)`
  border-top: 1px solid ${getPaletteColor('border.base')};
`

const SimpleTextContent = () => (
  <Box p={2}>
    <Text textAlign='center'>Hello world!</Text>
  </Box>
)

const Playground = ({ children }) => (
  <DraggableParent height='300px' width='(100vw - 32px)'>
    <DraggableItem
      defaultPosition={{
        x: 100,
        y: 100,
      }} //Hard coded positioning
      onPositionChange={(position) => {}}
    >
      {({ isDragging }) => children}
    </DraggableItem>
  </DraggableParent>
)

const InnerContent = ({ handleClose }) => (
  <Box p={4}>
    <Absolute color='primary' top={25} right={25}>
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
      <Button color='secondary' onClick={handleClose} mr={2}>
        Agree
      </Button>
      <Button variation='outline' onClick={handleClose} ml={2}>
        Close
      </Button>
    </Flex>
  </Box>
)

const PriceGuidanceContent = ({ handleClose }) => (
  <Box p={3}>
    <Box p={2} pt={0} pb={3}>
      <Flex>
        <GraphIcon color='primary' size='32px' mr='2' />
        <Flex flexDirection='column'>
          <Text color='primary' fontSize='24px' bold>
            Price Guidance
          </Text>
          <Text color='text.light' fontSize='12px'>
            Lorem ipsum dolor sit amet, consect etur adipiscing elit. Mauris
            nisl sapi
          </Text>
        </Flex>
      </Flex>
    </Box>
    <StyledBox p={2} pb={0} pt={3}>
      <Flex>
        <PinIcon color='text.base' size='32px' mr='2' />
        <Flex flexDirection='column'>
          <Text color='text.base' fontSize='14px' bold>
            New York City
          </Text>
          <Text color='text.light' fontSize='12px'>
            Wed. Jan 24 - Fri. Jan 25
          </Text>
        </Flex>
      </Flex>
      <Box pt={2}>
        <Component
          initialState={{ value: [32, 64] }}
          // eslint-disable-next-line react/no-children-prop
          children={({ state, setState }) => (
            <Slider
              value={state.value}
              onChange={(value) => {
                setState({ value })
              }}
            />
          )}
        />
      </Box>
      <Flex pt={4} pb={2} justifyContent='center'>
        <Button color='secondary' mr={2}>
          Book Now
        </Button>
        <Button variation='outline' onClick={handleClose} ml={2}>
          Dismiss
        </Button>
      </Flex>
    </StyledBox>
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
        isOpen
      >
        <Text color={'primary.base'}>hello world</Text>
      </Popover>
    </ThemeProvider>
  )
}
