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
  <React.Fragment>
    <Text>Do you accept the terms and conditions?</Text>
    <Flex justifyContent='space-around'>
      <GreenButton onClick={handleClose}>Agree</GreenButton>
      <OutlineButton onClick={handleClose}>Close</OutlineButton>
    </Flex>
  </React.Fragment>
)

storiesOf('PopOver', module)
  .add('Basic', () => (
    <Playground>
      <PopOver
        placement='right'
        renderContent={InnerContent}
        allowClose
        ariaLabel={'Test PopOver'}
        id={1}
      > 
        <Button>Popover</Button>
      </PopOver>
    </Playground>
  ))


const PlaygroundContainer = styled(Flex)`
  height: 100vh;
`
