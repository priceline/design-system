import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card } from '../src'


storiesOf('Card', module)
  .add('Box Shadows', () => (
    <Box>
      <Card boxShadowSize='sm' mb={5} p={3} width={200} color='black' bg='white'>Small Shadow</Card>
      <Card boxShadowSize='md' mb={5} p={3} width={200} color='black' bg='white'>Medium Shadow</Card>
      <Card boxShadowSize='lg' mb={5} p={3} width={200} color='black' bg='white'>Large Shadow</Card>
      <Card boxShadowSize='xl' mb={5} p={3} width={200} color='black' bg='white'>XLarge Shadow</Card>
    </Box>
  ))