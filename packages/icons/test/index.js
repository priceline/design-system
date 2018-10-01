import React from 'react'
import TestRenderer from 'react-test-renderer'
import 'jest-styled-components'
import * as icons from '../src'
import Icon from '../src/Icon'
import AirplaneIcon from '../src/Airplane'
import AcUnitIcon from '../src/AcUnit'

const iconList = Object.keys(icons).map(key => [key, icons[key]])

test.each(iconList)('renders %s', (key, Component) => {
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
