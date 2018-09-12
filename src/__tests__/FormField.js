import React from 'react'
import renderer from 'react-test-renderer'
import { renderIntoDocument } from 'react-dom/test-utils'
import 'jest-styled-components'
import { FormField, Icon, Input, Label, Select } from '..'

describe('FormField', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <FormField>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Icon', () => {
    const json = renderer
      .create(
        <FormField>
          <Label htmlFor="email">Email Address</Label>
          <Icon id="email" />
          <Input id="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select ', () => {
    const json = renderer
      .create(
        <FormField>
          <Select />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select and Icon', () => {
    const json = renderer
      .create(
        <FormField>
          <Icon name="email" />
          <Select />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with showLabel prop', () => {
    const json = renderer
      .create(
        <FormField showLabel>
          <Label htmlFor="email">Email</Label>
          <Icon name="email" />
          <Input id="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('shows label with field value', () => {
    const json = renderer
      .create(
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Icon name="email" />
          <Input id="email" value="hello@example.com" />
        </FormField>
      )
      .toJSON()
    const [label] = json.children
    expect(label.props.style.opacity).toBe(1)
  })

  /*
  test('it correctly places an aria-label with the placeholder value before user has interacted with the input', () => {
    const test = mount(
      <FormField>
        <Label>A Label</Label>
        <Icon name="email" />
        <Input id="with-both-icons" placeholder="placeholder text" />
        <Icon name="email" />
      </FormField>
    )

    // before user interaction the Label element should not be rendered
    let label = test.find(Label)
    expect(label.length).toBe(0)

    let input = test.find(Input)
    expect(input.getDOMNode().getAttribute('aria-label')).toBe(
      'placeholder text'
    )
  })

  */

  test('warns when there is no form field', () => {
    const spy = jest.spyOn(global.console, 'error')
    renderIntoDocument(
      <FormField>
        <Label>Email Address</Label>
      </FormField>
    )
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  test('warns when there is no label', () => {
    const spy = jest.spyOn(global.console, 'error')
    renderIntoDocument(
      <FormField>
        <Input />
      </FormField>
    )
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  /*
  test('it triggers a prop-type warning when any element besides Label, Icon, and Input is provided as a child.', () => {
    console.error = jest.fn()

    const test = mount(
      <FormField onChange={() => {}}>
        <span>Extra stuff not supported</span>
        <Label>A Label</Label>

        <Icon name="email" />
        <Icon name="email" />
        <Input id="with-both-icons" />
        <Icon name="email" />
      </FormField>
    )

    expect(
      console.error.mock.calls
        .toString()
        .indexOf('is not a valid child for') !== -1
    )
    console.error.mockRestore()
  })
  test('it triggers a prop-type warning when more than one Label is provided', () => {
    console.error = jest.fn()

    const test = mount(
      <FormField onChange={() => {}}>
        <Label>A Label</Label>
        <Label>Another Label</Label>
        <Input id="with-both-icons" />
      </FormField>
    )

    expect(
      console.error.mock.calls
        .toString()
        .indexOf("Exactly 0 or 1 'Label' children should be supplied to ") !==
        -1
    )
    console.error.mockRestore()
  })
  test('it triggers a prop-type warning when there is more than one icon before or after the Input element', () => {
    console.error = jest.fn()

    const test = mount(
      <FormField onChange={() => {}}>
        <span>Extra stuff not supported</span>
        <Label>A Label</Label>

        <Icon name="email" />
        <Icon name="email" />
        <Input id="with-both-icons" />
      </FormField>
    )

    expect(
      console.error.mock.calls
        .toString()
        .indexOf('component must be positioned between them as children of') !==
        -1
    )
    console.error.mockRestore()
  })
  */
})
