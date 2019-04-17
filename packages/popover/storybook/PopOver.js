import React from 'react'
import { storiesOf } from '@storybook/react'
import { DraggableParent, DraggableItem } from 'react-draggable-playground'
import {
  Flex,
  Button,
  GreenButton,
  OutlineButton,
  CloseButton,
  Box,
  Text,
  BackgroundImage,
  Absolute
} from 'pcln-design-system'
import PopOver from '../src/Popover'

storiesOf('PopOver', module).add('Playground', () => (
  <React.Fragment>
    <Playground>
      <PopOver
        renderContent={InnerContent}
        placement="top"
        ariaLabel={'Test PopOver'}
        idx={1}
        width={400}
      >
        <Button>Popover</Button>
      </PopOver>
    </Playground>
  </React.Fragment>
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
  <Box p={4}>
    <Absolute color={'blue'} top={25} right={25}>
      <CloseButton onClick={handleClose} />
    </Absolute>
    <BackgroundImage
      width="100%"
      height="100px"
      image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4"
    />
    <Text theme pb={3} pt={3} fontSize={18} textAlign="center" bold>
      Do you accept the terms and conditions?
    </Text>
    <Flex justifyContent="space-around">
      <GreenButton onClick={handleClose}>Agree</GreenButton>
      <OutlineButton onClick={handleClose}>Close</OutlineButton>
    </Flex>
  </Box>
)
