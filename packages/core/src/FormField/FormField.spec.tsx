import React from 'react'
import { render } from '../__test__/testing-library'
import { FormField, Input, Label, Select } from '..'
import { Email as EmailIcon } from 'pcln-icons'

afterEach(() => {
  // bust cache for propTypes
  FormField.displayName = 'FormField' + Math.random()
})

describe('FormField', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select ', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Pick Option</Label>
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select and Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Pick Email Address</Label>
        <EmailIcon />
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Label autoHide prop', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label autoHide>Email</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('shows Label with autoHide prop and field value', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label autoHide>Email</Label>
        <EmailIcon />
        <Input id='email' name='email' value='hello@example.com' />
      </FormField>
    ).toJSON()
    const [label] = json.children
    expect(label.props.style.opacity).toBe(1)
  })

  test('adds htmlFor prop to Label', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label />
        <Input id='hello' name='hello' />
      </FormField>
    ).toJSON()
    const [label] = json.children
    expect(label.props.htmlFor).toBe('hello')
  })

  describe ('disabled state', () => {
    it ('renders input with icon - disabled', () => {
      render(
        <FormField disabled>
          <Label>Email Address</Label>
          <EmailIcon data-testid='email-icon' />
          <Input id='email' name='email' placeholder='Email' />
        </FormField>
      )

      // const input = screen.getByPlaceholderText('Email')
      // expect(input).toBeDisabled()
      // expect(input).toHaveStyle('background-color: transparent')
      // expect(input).toHaveStyle('color: #4f6f8f')
      // expect(input).toHaveStyleRule('cursor', 'not-allowed')

      // const label = screen.getByText('Email Address')
      // expect(label).toHaveStyleRule('color', '#4f6f8f')
      // expect(label).toHaveStyleRule('cursor', 'not-allowed')

      // const icon = screen.getByTestId('email-icon')
      // expect(icon).toHaveStyleRule('color', '#4f6f8f')
      // expect(icon).toHaveStyleRule('cursor', 'not-allowed')
    })

    it ('renders select with icon - disabled', () => {
      render(
        <FormField disabled>
          <Label>Pick Email Address</Label>
          <EmailIcon />
          <Select defaultValue='Premium Economy'>
            <option>Premium Economy</option>
          </Select>
        </FormField>
      )

      // const select = screen.getByText('Premium Economy').closest('select')
      // expect(select).toBeDisabled()
      // expect(select).toHaveStyle('background-color: transparent')
      // expect(select).toHaveStyle('color: #4f6f8f')
      // expect(select).toHaveStyleRule('cursor', 'not-allowed')

      // const label = screen.getByText('Email Address')
      // expect(label).toHaveStyleRule('color', '#4f6f8f')
      // expect(label).toHaveStyleRule('cursor', 'not-allowed')

      // const icon = screen.getByTestId('email-icon')
      // expect(icon).toHaveStyleRule('color', '#4f6f8f')
      // expect(icon).toHaveStyleRule('cursor', 'not-allowed')
    })
  })
})
