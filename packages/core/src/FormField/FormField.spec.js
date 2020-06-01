import React from 'react'
import PropTypes from 'prop-types'

import { FormField, Icon, Input, Label, Select } from '..'

afterEach(() => {
  // bust cache for propTypes
  FormField.displayName = 'FormField' + Math.random()
})

describe('FormField', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <Input id='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <Icon name='Email' />
        <Input name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select ', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select and Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Icon name='Email' />
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Label autoHide prop', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label autoHide>Email</Label>
        <Icon name='Email' />
        <Input name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('shows Label with autoHide prop and field value', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label autoHide>Email</Label>
        <Icon name='Email' />
        <Input name='email' value='hello@example.com' />
      </FormField>
    ).toJSON()
    const [label] = json.children
    expect(label.props.style.opacity).toBe(1)
  })

  test('adds htmlFor prop to Label', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label />
        <Input name='hello' />
      </FormField>
    ).toJSON()
    const [label] = json.children
    expect(label.props.htmlFor).toBe('hello')
  })

  describe('propTypes', () => {
    test('warns when field is missing', () => {
      const spy = jest.spyOn(global.console, 'error')

      PropTypes.checkPropTypes(
        FormField.propTypes,
        {
          // eslint-disable-next-line react/jsx-key
          children: [<Label />],
        },
        'children',
        'FormField'
      )
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })

    test('warns when Label is missing', () => {
      const spy = jest.spyOn(global.console, 'error')
      PropTypes.checkPropTypes(
        FormField.propTypes,
        {
          // eslint-disable-next-line react/jsx-key
          children: [<Input name='test' />],
        },
        'children',
        'FormField'
      )
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })
})
