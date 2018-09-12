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
})
