import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { DraggableParent, DraggableItem } from 'react-draggable-playground'
import styled from 'styled-components'
import {
  ThemeProvider,
  Flex,
  Button,
  CloseButton,
  Box,
  Text,
  BackgroundImage,
  Absolute,
  Link,
  Icon,
  getPaletteColor
} from 'pcln-design-system'
import Component from '@reach/component-component'
import Slider from '../../slider/src'
import Popover from '../src'

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <React.Fragment>
      <Playground>
        <Popover
          renderContent={PriceGuidanceContent}
          placement="top"
          ariaLabel={'Price Guidance PopOver'}
          idx={1}
          width={370}
          overlayOpacity={0.3}
          trapFocus={boolean('Trap focus', false)}
        >
          <Button>Popover</Button>
        </Popover>
      </Playground>
    </React.Fragment>
  ))
  .add('Forced open via prop', () => (
    <Popover
      renderContent={InnerContent}
      placement="bottom"
      ariaLabel="Bottonm PopOver"
      idx={2}
      width={400}
      borderColor="darkGray"
      isOpen
    >
      <Link>Open Popover</Link>
    </Popover>
  ))
  .add('Opened by default via prop', () => (
    <Popover
      renderContent={InnerContent}
      placement="bottom"
      ariaLabel="Bottonm PopOver"
      idx={2}
      width={400}
      borderColor="darkGray"
      openOnMount
    >
      <Link>Open Popover</Link>
    </Popover>
  ))
  .add('Bottom', () => (
    <Popover
      renderContent={InnerContent}
      placement="bottom"
      ariaLabel="Bottonm PopOver"
      idx={2}
      width={400}
      borderColor="darkGray"
    >
      <Link>Open Popover</Link>
    </Popover>
  ))
  .add('Right with overlay on scroll position', () => (
    <Flex flexDirection="column">
      <Text mb="2000px">Scroll down, popover trigger is at the end</Text>
      <Box>
        <Popover
          renderContent={InnerContent}
          placement="top"
          ariaLabel="Test PopOver"
          idx={1}
          width={400}
          overlayOpacity={0.3}
          bg="lightRed"
          borderColor="darkRed"
        >
          <Button>Popover</Button>
        </Popover>
      </Box>
    </Flex>
  ))

const StyledBox = styled(Box)`
  border-top: 1px solid ${getPaletteColor('border.base')};
`

const Playground = ({ children }) => (
  <DraggableParent height="calc(100vh - 32px)" width="(100vw - 32px)">
    <DraggableItem
      defaultPosition={{
        x: window.innerWidth / 2 - 30,
        y: window.innerHeight / 2 - 10
      }} //Hard coded positioning
      onPositionChange={position => {}}
    >
      {({ isDragging }) => children}
    </DraggableItem>
  </DraggableParent>
)

const InnerContent = ({ handleClose }) => (
  <ThemeProvider>
    <Box p={4}>
      <Absolute color={'blue'} top={25} right={25}>
        <CloseButton onClick={handleClose} />
      </Absolute>
      <BackgroundImage
        width="100%"
        height="100px"
        image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4"
      />
      <Text theme pb={3} pt={3} fontSize={16} textAlign="center" bold>
        Do you accept the terms and conditions?
      </Text>
      <Flex justifyContent="center">
        <Button color="secondary" onClick={handleClose} mr={2}>
          Agree
        </Button>
        <Button variation="outline" onClick={handleClose} ml={2}>
          Close
        </Button>
      </Flex>
    </Box>
  </ThemeProvider>
)

const PriceGuidanceContent = ({ handleClose }) => (
  <ThemeProvider>
    <Box p={3}>
      <Box p={2} pt={0} pb={3}>
        <Flex>
          <Icon name="Graph" color="blue" size="32px" mr="2" />
          <Flex flexDirection="column">
            <Text color="blue" fontSize="24px" bold>
              Price Guidance
            </Text>
            <Text color="gray" fontSize="12px">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit. Mauris
              nisl sapi
            </Text>
          </Flex>
        </Flex>
      </Box>
      <StyledBox p={2} pb={0} pt={3}>
        <Flex>
          <Icon name="Pin" color="black" size="32px" mr="2" />
          <Flex flexDirection="column">
            <Text color="black" fontSize="14px" bold>
              New York City
            </Text>
            <Text color="gray" fontSize="12px">
              Wed. Jan 24 - Fri. Jan 25
            </Text>
          </Flex>
        </Flex>
        <Box pt={2}>
          <Component
            initialState={{ value: [32, 64] }}
            children={({ state, setState }) => (
              <Slider
                value={state.value}
                onChange={value => {
                  setState({ value })
                }}
              />
            )}
          />
        </Box>
        <Flex pt={4} pb={2} justifyContent="center">
          <Button color="secondary" mr={2}>
            Book Now
          </Button>
          <Button variation="outline" onClick={handleClose} ml={2}>
            Dismiss
          </Button>
        </Flex>
      </StyledBox>
    </Box>
  </ThemeProvider>
)
