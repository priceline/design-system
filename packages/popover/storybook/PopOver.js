import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, Button, GreenButton, OutlineButton, Box, Text, BackgroundImage } from 'pcln-design-system'
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
  <Box p={4} pt={0} width={400}>
    <BackgroundImage 
      width='100%'
      height='100px'
      image='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'
    />
    <Text 
      pb={2} 
      pt={2}
      fontSize={16}
      textAlign='center'
      bold
    >
      Do you accept the terms and conditions?
    </Text>
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
        bg={'lightGray'}
        p={3}
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
