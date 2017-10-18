import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Banner } from '../src'

storiesOf('Banner', module)
  .add('All palettes', () => (
    <Box>
      <Banner align='right' mb={2} p={3} title='DEFAULT' subtitle='Secondary Text' />
      <Banner align='left' mb={2} p={3} title='INFORMATION' subtitle='Secondary Text' palette='information' />
      <Banner align='right' mb={2} p={3} title='SUCCESS' subtitle='Secondary Text' palette='success' />
      <Banner align='left' mb={2} p={3} title='ATTENTION' subtitle='Secondary Text' palette='attention' />
      <Banner align='right' mb={2} p={3} title='WARNING' subtitle='Secondary Text' palette='warning' />
    </Box>
  ))

  .add('All palettes bold', () => (
    <Box>
      <Banner bold align='right' mb={2} p={3} title='DEFAULT' subtitle='Secondary Text' />
      <Banner bold align='left' mb={2} p={3} title='INFORMATION' subtitle='Secondary Text' palette='information' />
      <Banner bold align='right' mb={2} p={3} title='SUCCESS' subtitle='Secondary Text' palette='success' />
      <Banner bold align='left' mb={2} p={3} title='ATTENTION' subtitle='Secondary Text' palette='attention' />
      <Banner bold align='right' mb={2} p={3} title='WARNING' subtitle='Secondary Text' palette='warning' />
    </Box>
  ))

  .add('All palettes title only', () => (
    <Box>
      <Banner bold align='right' mb={2} p={3} title='DEFAULT' />
      <Banner bold align='left' mb={2} p={3} title='INFORMATION' palette='information' />
      <Banner bold align='right' mb={2} p={3} title='SUCCESS' palette='success' />
      <Banner bold align='left' mb={2} p={3} title='ATTENTION' palette='attention' />
      <Banner bold align='right' mb={2} p={3} title='WARNING' palette='warning' />
    </Box>
  ))

  .add('All palettes subtitle only', () => (
    <Box>
      <Banner bold align='right' mb={2} p={3} subtitle='DEFAULT' />
      <Banner bold align='left' mb={2} p={3} subtitle='INFORMATION' palette='information' />
      <Banner bold align='right' mb={2} p={3} subtitle='SUCCESS' palette='success' />
      <Banner bold align='left' mb={2} p={3} subtitle='ATTENTION' palette='attention' />
      <Banner bold align='right' mb={2} p={3} subtitle='WARNING' palette='warning' />
    </Box>
  ))

  .add('palette aliases', () => (
    <Box>
      <Banner align='right' mb={2} p={3} title='GRAY' subtitle='Secondary Text' palette='gray' />
      <Banner align='left' mb={2} p={3} title='BLUE' subtitle='Secondary Text' palette='blue' />
      <Banner align='right' mb={2} p={3} title='GREEN' subtitle='Secondary Text' palette='green' />
      <Banner align='left' mb={2} p={3} title='ORANGE' subtitle='Secondary Text' palette='orange' />
      <Banner align='right' mb={2} p={3} title='RED' subtitle='Secondary Text' palette='red' />
    </Box>
  ))