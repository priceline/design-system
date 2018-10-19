import React from 'react'
import TestRenderer from 'react-test-renderer'
import { IconField, Icon, Input } from '..'

describe('IconField', () => {
  test('renders', () => {
    const json = TestRenderer.create(
      <IconField>
        <Icon name="calendar" />
        <Input id="test" placeholder="IconField" />
      </IconField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('does not render unknown children', () => {
    const json = TestRenderer.create(
      <IconField>
        <pre>Does not render</pre>
      </IconField>
    ).toJSON()
    expect(json.children).toBe(null)
  })

  test('adds styles to icons', () => {
    const json = TestRenderer.create(
      <IconField>
        <Icon name="calendar" />
        <Input id="test" />
      </IconField>
    ).toJSON()
    const [icon] = json.children
    expect(icon.props.style.pointerEvents).toBe('none')
    expect(icon.props.style.marginLeft).toBe(8)
    expect(icon.props.style.marginRight).toBe(-32)
  })

  test('adds styles to icons on the right', () => {
    const json = TestRenderer.create(
      <IconField>
        <Input id="test" />
        <Icon name="calendar" />
      </IconField>
    ).toJSON()
    const [input, icon] = json.children
    expect(icon.props.style.pointerEvents).toBe('none')
    expect(icon.props.style.marginLeft).toBe(-32)
    expect(icon.props.style.marginRight).toBe(8)
  })

  test('adds styles to the form field', () => {
    const json = TestRenderer.create(
      <IconField>
        <Icon name="calendar" />
        <Input id="test" />
      </IconField>
    ).toJSON()
    const [icon, input] = json.children
    expect(input.props.style.paddingLeft).toBe(40)
    expect(input.props.style.paddingRight).toBe(undefined)
  })
})
