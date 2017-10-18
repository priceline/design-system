import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Banner, Text } from '../src'

storiesOf('Banner', module)
  .add('All palettes', () => (
    <Box>
      <Banner align='right' mb={2} p={3}>
        DEFAULT
      </Banner>
      <Banner mb={2} p={3} palette='information'>
        INFORMATION
      </Banner>
      <Banner align='right' mb={2} p={3} palette='success'>
        SUCCESS
      </Banner>
      <Banner mb={2} p={3} palette='attention'>
        ATTENTION
      </Banner>
      <Banner align='right' mb={2} p={3} palette='warning'>
        WARNING
      </Banner>
    </Box>
  ))

  .add('palette aliases', () => (
    <Box>
      <Banner align='right' mb={2} p={3} palette='gray'>
        GRAY
      </Banner>
      <Banner mb={2} p={3} palette='blue'>
        BLUE
      </Banner>
      <Banner align='right' mb={2} p={3} palette='green'>
        GREEN
      </Banner>
      <Banner mb={2} p={3} palette='orange'>
        ORANGE
      </Banner>
      <Banner align='right' mb={2} p={3} palette='red'>
        RED
      </Banner>
    </Box>
  ))

  .add('All palettes with Text Children', () => (
    <Box>
      <Banner align='right' mb={2} p={3}>
        <Text bold>DEFAULT</Text>
        <Text bold color='gray'>Secondary Text</Text>
      </Banner>
      <Banner mb={2} p={3} palette='information'>
        <Text bold>INFORMATION</Text>
        <Text bold color='lightBlue'>Secondary Text</Text>
      </Banner>
      <Banner align='right' mb={2} p={3} palette='success'>
        <Text bold>SUCCESS</Text>
        <Text bold color='lightGreen'>Secondary Text</Text>
      </Banner>
      <Banner mb={2} p={3} palette='attention'>
        <Text bold>ATTENTION</Text>
        <Text bold color='lightOrange'>Secondary Text</Text>
      </Banner>
      <Banner align='right' mb={2} p={3} palette='warning'>
        <Text bold>WARNING</Text>
        <Text bold color='lightRed'>Secondary Text</Text>
      </Banner>
    </Box>
  ))