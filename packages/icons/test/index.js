import React from 'react'
import TestRenderer from 'react-test-renderer'

import {
  Airplane as AirplaneIcon,
  Accessible as AccessibleIcon,
  Icon,
} from '../'

import * as icons from '../'
const iconList = Object.keys(icons).map((key) => [key, icons[key]])

test.each(iconList)('renders %s', (key, Component) => {
  const json = TestRenderer.create(<Component />).toJSON()
  expect(json).toMatchSnapshot()
})

describe('Icon', () => {
  test('defaults title to name if not provided', () => {
    const testRenderer = TestRenderer.create(<Icon name='Accessible' />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType('title').children[0]).toBe('Accessible')
  })

  describe('SVG Icon Accessibility', () => {
    test.each(iconList)(
      'renders %s with accessibility attributes when title and desc is passed ',
      (key, Component) => {
        if (key !== 'Icon') {
          const testRenderer = TestRenderer.create(
            <Component
              title='SVG title'
              titleId='unique-svg-title-id'
              desc='SVG icon description'
              descId='unique-svg-icon-descId'
            />
          )
          const testInstance = testRenderer.root

          expect(testInstance.findByType('title').children[0]).toBe('SVG title')
          expect(testInstance.findByType('desc').children[0]).toBe(
            'SVG icon description'
          )
        }
      }
    )

    test(`render svg <Icon /> with accessibility attributes when 'title' and 'desc' props are passed`, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon
          title='Accessible Logo'
          titleId='titleId'
          desc='Accessible Logo description'
          descId='descId'
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
        'titleId descId'
      )
    })

    test(`render svg <Icon /> with 'aria-hidden' as 'true' when 'title' prop is not passed`, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon desc='Accessible Logo description' descId='descId' />
      )
      const testInstance = testRenderer.root
      const title = testInstance.findAll((el) => el.type == 'title')
      expect(title).toHaveLength(0)
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Accessible Logo description'
      )
      expect(testRenderer.toJSON().props['role']).toBe('img')

      const tree = testRenderer.toTree()
      const renderedProps = tree.rendered.props
      expect(renderedProps['aria-hidden']).toBeTruthy()
      expect(renderedProps['focusable']).toBeFalsy()
      expect(renderedProps['tabIndex']).toBe(-1)
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <Icon
          name='Accessible'
          title='Accessible Logo'
          titleId='accessible-logo'
        />
      )
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'accessible-logo'
      )
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon title='Accessible Logo' />
      )

      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(undefined)
    })

    test.each(iconList)(
      'Icons should render with no outline ',
      (key, Component) => {
        if (key !== 'Icon') {
          const testRenderer = TestRenderer.create(<Component />)
          const testInstance = testRenderer.toJSON()
          expect(testInstance).toHaveStyleRule('outline', 'none')
        }
      }
    )

    test('Icon should render with no outline ', () => {
      const namedJson = TestRenderer.create(<AirplaneIcon />).toJSON()
      const json = TestRenderer.create(<Icon name='Airplane' />).toJSON()
      expect(json).toHaveStyleRule('outline', 'none')
      expect(namedJson).toHaveStyleRule('outline', 'none')
    })
  })
})
