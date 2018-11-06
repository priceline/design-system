import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, Box } from '../src'
import 'react-chromatic/storybook-addon'
import '@storybook/addon-actions/register';

createGlobalStyle([], {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    lineHeight: 1.5,
    margin: 0
  }
})

addDecorator(story => (
  <ThemeProvider>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
