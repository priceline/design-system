import React from 'react'
import TestRenderer from 'react-test-renderer'
import 'jest-styled-components'
import * as customIcons from '../src/custom'
import * as mdIcons from '../src/material-design'
import Icon from '../src/Icon'
import AirplaneIcon from '../src/custom/Airplane'
import AcUnitIcon from '../src/material-design/AcUnit'

const icons = [
  ...Object.keys(customIcons).map(key => [key, customIcons[key]]),
  ...Object.keys(mdIcons).map(key => [key, mdIcons[key]])
]

test.each(icons)('renders %s', (key, Component) => {
  const json = TestRenderer.create(<Component />).toJSON()
  expect(json).toMatchSnapshot()
})

describe('Icon', () => {
  test('renders custom icon', () => {
    const expected = TestRenderer.create(<AirplaneIcon />).toJSON()
    const json = TestRenderer.create(<Icon name="Airplane" />).toJSON()
    expect(json).toEqual(expected)
  })

  test('renders material design icon', () => {
    const expected = TestRenderer.create(<AcUnitIcon />).toJSON()
    const json = TestRenderer.create(<Icon name="AcUnit" />).toJSON()
    expect(json).toEqual(expected)
  })
})
