import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Box, AppBar } from '../src'
import theme from '../src/theme'

storiesOf('Navigation', module).add('AppBar', () => (
  <Box bg={theme.colors.gray100} p={2}>
    <AppBar
      inverse={boolean('Inverse', false)}   
      color={text('Color')} 
    >
      <a href="">Sign Out</a>
    </AppBar>
  </Box>
))
