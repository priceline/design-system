import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Box } from '../src'

storiesOf('Container', module)
  .add('Default align center', () => (
    <Container maxWidth={500}>
      <Box p={4} bg='gray0' style={{height: `100vh`}}>
        Container Compnent
      </Box>
    </Container>
  ))
  .add('Align left', () => (
    <Container maxWidth={500} align='left'>
      <Box p={4} bg='gray0' style={{height: `100vh`}}>
        Container Compnent
      </Box>
    </Container>
  ))
  .add('Align right', () => (
    <Container maxWidth={500} align='right'>
      <Box p={4} bg='gray0' style={{height: `100vh`}}>
        Container Compnent
      </Box>
    </Container>
  ))
