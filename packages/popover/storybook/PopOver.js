import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, Button, GreenButton, OutlineButton, Box, Text } from 'pcln-design-system'
import PopOver from '../src'
import styled from 'styled-components';

const Playground = ({children}) => (
  <PlaygroundContainer justifyContent='center' alignItems='center'>
    <Box width={1/2}>
      <Flex justifyContent='center'>
        {children}
      </Flex>
    </Box>
  </PlaygroundContainer>
)

const InnerContent = ({handleClose}) => (
  <Box p={2}>
    <Text pb={2} pt={2}>Do you accept the terms and conditions?</Text>
    <Flex justifyContent='space-around'>
      <GreenButton onClick={handleClose}>Agree</GreenButton>
      <OutlineButton onClick={handleClose}>Close</OutlineButton>
    </Flex>
  </Box>
)

const Partial = ({placement}) => (
  <Playground>
      <PopOver
        placement={placement}
        renderContent={InnerContent}
        allowClose
        ariaLabel={'Test PopOver'}
        bg={'white'}
        p={4}
        id={1}
      > 
        <Button>Popover</Button>
      </PopOver>
    </Playground>
)

storiesOf('PopOver', module)
  .add('Top', () => (
    <React.Fragment>
      <Partial placement='top'/>
      <Partial placement='top-start'/>
      <Partial placement='top-end'/>
    </React.Fragment>
  ))
  .add('Bottom', () => (
    <React.Fragment>
      <Partial placement='bottom'/>
      <Partial placement='bottom-start'/>
      <Partial placement='bottom-end'/>
    </React.Fragment>
  ))
  .add('Left', () => (
    <React.Fragment>
      <Partial placement='left'/>
      <Partial placement='left-start'/>
      <Partial placement='left-end'/>
    </React.Fragment>
  ))
  .add('Right', () => (
    <React.Fragment>
      <Partial placement='right'/>
      <Partial placement='right-start'/>
      <Partial placement='right-end'/>
    </React.Fragment>
  ))


const PlaygroundContainer = styled(Flex)`
  height: 100vh;
`
