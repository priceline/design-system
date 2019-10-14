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

  describe('SVG Icon Accessibility', () => {
    // Test individual icons in './lib'
    test.each(iconList)(
      'renders %s with accessibility attributes when title and desc is passed ',
      (key, Component) => {
        const testRenderer = TestRenderer.create(
          <Component
            title="SVG title"
            titleId="unique-svg-title-id"
            desc="SVG icon description"
            descId="unique-svg-icon-descId"
          />
        )
        const testInstance = testRenderer.root

        expect(testInstance.findByType('title').children[0]).toBe('SVG title')
        expect(testInstance.findByType('desc').children[0]).toBe(
          'SVG icon description'
        )
      }
    )

    test(`render svg <Icon /> with accessibility attributes when 'title' and 'desc' props are passed`, () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name="Accessible"
          title="Accessible Logo"
          titleId="accessible-logo"
          desc="Accessible Logo description"
          descId="descId"
        />
      )
      const testInstance = testRenderer.root

      expect(testInstance.findByType('title').children[0]).toBe(
        'Accessible Logo'
      )
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Accessible Logo description'
      )
      expect(testRenderer.toJSON().props['focusable']).toBe(false)
      expect(testRenderer.toJSON().props['tabIndex']).toBe(-1)
      expect(testRenderer.toJSON().props['role']).toBe('img')
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'accessible-logo descId'
      )
    })

    test(`render svg <Icon /> with 'aria-hidden' as 'true' when 'title' prop is not passed`, () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name="Accessible"
          desc="Accessible Logo description"
          descId="descId"
        />
      )
      const testInstance = testRenderer.root
      const title = testInstance.findAll(el => el.type == 'title')
      expect(title).toHaveLength(0)
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Accessible Logo description'
      )
      expect(testRenderer.toJSON().props['role']).toBe('img')

      const tree = testRenderer.toTree()
      const renderedProps = tree.rendered.props
      expect(renderedProps['aria-hidden']).toBeFalsy()
      expect(renderedProps['focusable']).toBeFalsy()
      expect(renderedProps['tabIndex']).toBe(-1)
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name="Accessible"
          title="Accessible Logo"
          titleId="accessible-logo"
        />
      )
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'accessible-logo'
      )
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <Icon name="Accessible" title="Accessible Logo" />
      )

      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(undefined)
    })

    test.each(iconList)(
      // Test individual icons in './lib'
      'Icons should render with no outline ',
      (key, Component) => {
        const testRenderer = TestRenderer.create(<Component />)
        const testInstance = testRenderer.toJSON()
        expect(testInstance).toHaveStyleRule('outline', 'none')
      }
    )

    test('Icon should render with no outline ', () => {
      const namedJson = TestRenderer.create(<AirplaneIcon />).toJSON()
      const json = TestRenderer.create(<Icon name="Airplane" />).toJSON()
      expect(json).toEqual(namedJson)
      expect(json).toHaveStyleRule('outline', 'none')
    })
  })

  describe('propTypes', () => {
    test('warns with incorrect name', () => {
      const err = Icon.propTypes.name({ name: 'foo' }, 'name', 'Test')
      expect(err instanceof Error).toBe(true)
    })
  })
})
