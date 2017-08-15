import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Icon } from '..'
import icons from '../../icons.json'

const keys = Object.keys(icons)

describe('Icon', () => {
  keys.forEach(name => {
    test(`${name} renders`, () => {
      const icon = renderer.create(<Icon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  test('returns false for non-existing icons', () => {
    const icon = renderer.create(<Icon name='nope' />).toJSON()
    expect(icon).toBe(null)
  })
})
