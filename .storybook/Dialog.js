import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Card } from '../src'

storiesOf('Dialog', module)
  .add('Default', () => (
    <Container>
      <Card>Dialog 1</Card>
    </Container>
  ))
  .add('Input maxWidth', () => (
    <Container maxWidth={500}>
      <Card>Dialog 2</Card>
    </Container>
  ))
