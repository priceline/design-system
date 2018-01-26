import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Loader, Box, Button } from '../src'

const description = 'An animated loading state.'

storiesOf('Loader', module).add('Examples', () => (
  <div>
    <Box m={4}>
      <Loader />
    </Box>

    <Box m={4}>
      <Button>
        <Loader color="white" />
      </Button>
    </Box>
  </div>
))
