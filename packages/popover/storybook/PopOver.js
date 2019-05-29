import React from 'react'
import { storiesOf } from '@storybook/react'
import { DraggableParent, DraggableItem } from 'react-draggable-playground'
import styled from 'styled-components'
import {
  ThemeProvider,
  Flex,
  Button,
  GreenButton,
  OutlineButton,
  CloseButton,
  Box,
  Text,
  BackgroundImage,
  Absolute,
  Link,
  Stamp,
  Icon
} from 'pcln-design-system'
import Component from '@reach/component-component'
import Slider from '../../slider/src'
import Popover from '../src'

storiesOf('Popover', module)
  .add('Playground', () => (
    <React.Fragment>
      <Playground>
        <Popover
          renderContent={PriceGuidanceContent}
          placement="top"
          ariaLabel={'Price Guidance PopOver'}
          idx={1}
          width={370}
        >
          <Button>Popover</Button>
        </Popover>
      </Playground>
    </React.Fragment>
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
  .add('Right with overlay', () => (
    <Flex justifyContent="center">
      <Box mt={4}>
        <Popover
          renderContent={InnerContent}
          placement="right"
          ariaLabel={'Test PopOver'}
          idx={1}
          width={400}
          overlayOpacity={0.2}
          bg="lightRed"
          borderColor="darkRed"
          zIndex={-1}
        >
          <Stamp color="red">
            <Icon name="Warning" size={16} mr={1} />
            terms & conditions
          </Stamp>
        </Popover>
      </Box>
    </Flex>
  ))

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
        <GreenButton onClick={handleClose} mr={2}>
          Agree
        </GreenButton>
        <OutlineButton onClick={handleClose} ml={2}>
          Close
        </OutlineButton>
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
          <GreenButton mr={2}>Book Now</GreenButton>
          <OutlineButton onClick={handleClose} ml={2}>
            Dismiss
          </OutlineButton>
        </Flex>
      </StyledBox>
    </Box>
  </ThemeProvider>
)

const StyledBox = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors['borderGray']};
`
const BlockFlex = styled(Flex)`
  display: block;
`
