import { Email as EmailIcon } from 'pcln-icons'
import React from 'react'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { Select } from '../Select/Select'
import { render, screen } from '../__test__/testing-library'
import { FormField } from './FormField'

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

  test('renders with Label - forces truncate', () => {
    render(
      <FormField>
        <Label>Pick Email Address</Label>
        <Input />
      </FormField>
    )

    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('white-space', 'nowrap')
    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('overflow', 'hidden')
    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('text-overflow', 'ellipsis')
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

  describe('disabled state', () => {
    it('renders input with icon - disabled', () => {
      const { asFragment } = render(
        <FormField disabled>
          <Label>Email Address</Label>
          <EmailIcon data-testid='email-icon' />
          <Input id='email' name='email' placeholder='Email' />
        </FormField>
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('renders select with icon - disabled', () => {
      const { asFragment } = render(
        <FormField disabled>
          <Label>Pick Email Address</Label>
          <EmailIcon />
          <Select defaultValue='Premium Economy'>
            <option>Premium Economy</option>
          </Select>
        </FormField>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
