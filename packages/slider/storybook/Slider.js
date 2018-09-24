import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from 'pcln-design-system'
import Slider from '../src'

storiesOf('New Slider', module).add('default', () => (
  <Box p={4}>
    <Slider value={[32, 64]} min={0} max={128} />
  </Box>
))
