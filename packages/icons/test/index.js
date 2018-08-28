import React from 'react'
import TestRenderer from 'react-test-renderer'
import 'jest-styled-components'
import * as customIcons from '../src/custom'
import * as mdIcons from '../src/material-design'

const icons = [
  ...Object.keys(customIcons).map(key => [key, customIcons[key]]),
  ...Object.keys(mdIcons).map(key => [key, mdIcons[key]])
]

test.each(icons)('renders %s', (key, Component) => {
  const json = TestRenderer.create(<Component />).toJSON()
  expect(json).toMatchSnapshot()
})
