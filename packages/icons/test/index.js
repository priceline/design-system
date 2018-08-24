import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as icons from '../src'

const renders = Object.keys(icons).map(key => [key, icons[key]])

test.each(renders)('renders %s', (key, Component) => {
  const json = TestRenderer.create(<Component />).toJSON()
  expect(json).toMatchSnapshot()
})
