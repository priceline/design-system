import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Icon } from '..'
import icons from '../../icons.json'

const keys = Object.keys(icons).filter(name => name !== 'legacy')
const oldIcons = ['srollLeft', 'chevronLight', 'chevronThick']

describe('Icon', () => {
  keys.forEach(name => {
    test(`${name} renders`, () => {
      const icon = renderer.create(<Icon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  oldIcons.forEach(name => {
    test(`${name} still renders old renamed icons`, () => {
      const icon = renderer.create(<Icon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  test('The next prop forces using the new icon set', () => {
    const icon = renderer.create(<Icon name="chevronDown" next />).toJSON()
    const [path] = icon.children
    expect(path.props.d).toEqual(icons.chevronDown.path)
    expect(icon).toMatchSnapshot()
  })

  test('returns false for non-existing icons', () => {
    const icon = renderer.create(<Icon name="nope" />).toJSON()
    expect(icon).toBe(null)
  })
})
