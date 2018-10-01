import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as icons from '../lib'
import Icon from '../lib/Icon'
import AirplaneIcon from '../lib/Airplane'
import AcIcon from '../lib/Ac'

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
    const expected = TestRenderer.create(<AcIcon />).toJSON()
    const json = TestRenderer.create(<Icon name="Ac" />).toJSON()
    expect(json).toEqual(expected)
  })

  test('renders null for missing icons', () => {
    const json = TestRenderer.create(<Icon name="foo" />).toJSON()
    expect(json).toBe(null)
  })

  describe('propTypes', () => {
    test('warns with incorrect name', () => {
      const err = Icon.propTypes.name({ name: 'foo' }, 'name', 'Test')
      expect(err instanceof Error).toBe(true)
    })

    test('warns with lowercase name', () => {
      const err = Icon.propTypes.name({ name: 'ac' }, 'name', 'Test')
      expect(err instanceof Error).toBe(true)
    })
  })
})
