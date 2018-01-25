import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Loader, Box } from '../src'

const description = 'An animated loading state.'

storiesOf('Loader', module).add('Examples', () => (
  <Box m={4}>
    <Loader />
  </Box>
))
