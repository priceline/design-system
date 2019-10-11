import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider, Box } from '../packages/core/src'
import { checkA11y } from '@storybook/addon-a11y'

addDecorator(checkA11y)

addDecorator(story => (
  <ThemeProvider>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('../packages', true, /storybook\/[\w\d\s]+\.js$/)

const load = () => {
  req.keys().forEach(key => {
    req(key)
  })
}

configure(load, module)
