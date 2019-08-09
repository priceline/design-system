import React from 'react'
import TestRenderer from 'react-test-renderer'
import { IconField, Icon, IconButton, Input } from '../src'

describe('IconField', () => {
  test('renders', () => {
    const json = TestRenderer.create(
      <IconField>
        <Icon name="Calendar" />
        <Input id="test" placeholder="IconField" />
      </IconField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders icon button', () => {
    const json = TestRenderer.create(
      <IconField>
        <Input id="test" placeholder="IconField" />
        <IconButton name="close" />
      </IconField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders icon, input and icon button together', () => {
    const json = TestRenderer.create(
      <IconField>
        <Icon name="Calendar" />
        <Input id="test" placeholder="IconField" />
        <IconButton name="close" />
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
        <Icon name="Calendar" />
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
        <Icon name="Calendar" />
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
        <Icon name="Calendar" />
        <Input id="test" />
      </IconField>
    ).toJSON()
    const [icon, input] = json.children
    expect(input.props.style.paddingLeft).toBe(40)
    expect(input.props.style.paddingRight).toBe(undefined)
  })

  test('adds styles to the icon button on the right', () => {
    const json = TestRenderer.create(
      <IconField>
        <Input id="test" />
        <IconButton name="close" />
      </IconField>
    ).toJSON()
    const [, iconButton] = json.children
    expect(iconButton.props.style.pointerEvents).toBe('auto')
    expect(iconButton.props.style.marginLeft).toBe(-32)
    expect(iconButton.props.style.marginRight).toBe(8)
  })
})
