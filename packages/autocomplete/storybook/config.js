import path from 'path'
import React from 'react'
import { configure, addDecorator, storiesOf } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import { ThemeProvider, Box } from 'pcln-design-system'

injectGlobal([], {
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

const blacklist = ['config', 'webpack.config']

const load = () => {
  const examples = req.keys().forEach(key => {
    const name = path.basename(key, '.js')
    if (blacklist.includes(name)) return
    const example = req(key)
    storiesOf(name, module).add(example.name || 'default', example.default)
  })
}

configure(load, module)
