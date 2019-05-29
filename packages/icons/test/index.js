import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as icons from '../lib'
import Icon from '../lib/Icon'
import AirplaneIcon from '../lib/Airplane'
import AcIcon from '../lib/Ac'
import Accessible from '../lib/Accessible'

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

  describe('SVG Icon Accessibility', () => {
    test('render svg icon with accessibility attributes when title and desc is passed', () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name="Accessible"
          title="Airplane Logo"
          titleId="airplane-logo"
          desc="Airplane Logo description"
          descId="descId"
        />
      )
      const testInstance = testRenderer.root

      expect(testInstance.findByType('title').children[0]).toBe('Airplane Logo')
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Airplane Logo description'
      )
      expect(testRenderer.toJSON().props['aria-hidden']).toBe('false')
      expect(testRenderer.toJSON().props['focusable']).toBe('false')
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'airplane-logo descId'
      )
    })

    test('render svg icon with aria-hidden as false when title prop is not passed', () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name="Accessible"
          desc="Airplane Logo description"
          descId="descId"
        />
      )
      const testInstance = testRenderer.root

      const title = testInstance.findAll(el => el.type == 'title')
      expect(title).toHaveLength(0)
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Airplane Logo description'
      )
      expect(testRenderer.toJSON().props['aria-hidden']).toBe('true')
      expect(testRenderer.toJSON().props['focusable']).toBe('false')
    })
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

    test('warns about title being a string', () => {
      const err = Icon.propTypes.title({ title: 23 }, 'title', 'Airplane')

      expect(err instanceof Error).toBe(true)
      expect(err.message).toBe(
        `'title' prop supplied to 'Airplane' should be a string`
      )
    })

    test('warn: titleId prop should be passed along with title props', () => {
      const err = Icon.propTypes.title(
        { title: 'Airplane' },
        'title',
        'Airplane'
      )

      expect(err instanceof Error).toBe(true)
      expect(err.message).toBe(
        `'titleId' prop should be passed along with 'title' prop to 'Airplane'`
      )
    })

    test('warns about desc prop being a string', () => {
      const err = Icon.propTypes.desc(
        { title: 'Airplane', desc: 345 },
        'desc',
        'Airplane'
      )

      expect(err instanceof Error).toBe(true)
      expect(err.message).toBe(
        `'desc' prop supplied to 'Airplane' should be a string`
      )
    })

    test('warn: when title props is not passed along with desc props', () => {
      const err = Icon.propTypes.desc({ desc: 'logo' }, 'desc', 'Airplane')

      expect(err instanceof Error).toBe(true)
      expect(err.message).toBe(
        `'title' prop should be passed along with 'desc' prop to 'Airplane'`
      )
    })

    test('warn: descId prop should be passed along with desc props', () => {
      const err = Icon.propTypes.desc(
        { title: 'Airplane', desc: 'logo' },
        'desc',
        'Airplane'
      )

      expect(err instanceof Error).toBe(true)
      expect(err.message).toBe(
        `'descId' prop should be passed along with 'desc' prop to 'Airplane'`
      )
    })
  })
})
