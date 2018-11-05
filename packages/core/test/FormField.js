import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { FormField, Icon, Input, Label, Select } from '../src'

afterEach(cleanup)

describe('FormField', () => {
  test('it renders using the old api, but should throw a prop-type warning', () => {
    console.error = jest.fn()

    const test = render(
      <FormField label="test" icon="lock" id="test-input" onChange={() => {}} />
    )

    expect(
      console.error.mock.calls
        .toString()
        .indexOf("No 'Input' child found for 'FormField'") !== -1
    )
    console.error.mockRestore()
  })

  test('it renders using FormField alias', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="email" />
          <Input id="with-left-icon" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select ', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Select id="with-no-options" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select and Icon', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="email" />
          <Select id="with-no-options" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select and Options', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Select id="with-options">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select icons on both sides', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="key" />
          <Select id="with-options">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select icons on the left side', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="key" />
          <Select id="with-options">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders using FormField alias with Select icons on the right side', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Select id="with-options">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders a with a left side icon', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="email" />
          <Input id="with-left-icon" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a with a right side icon', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Input id="with-right-icon" />
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a with a conditional right side icon', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Input id="with-right-icon" />
          {false && <Icon name="email" />}
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a with a both icons', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Icon name="email" />
          <Input id="with-both-icons" />
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a form field wth a label and icons', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Label>A Label</Label>
          <Icon name="email" />
          <Input id="with-both-icons" />
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it always renders a label when `alwaysShowLabel` is true', () => {
    const json = renderer
      .create(
        <FormField alwaysShowLabel onChange={() => {}}>
          <Label>A Label</Label>
          <Icon name="email" />
          <Input id="with-both-icons" />
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it calls the `onChange` handler passed into `FormField` when the child `Input` components value updates', () => {
    const onChange = jest.fn()
    const { container } = render(
      <FormField onChange={onChange}>
        <Label>A Label</Label>
        <Input id="caller" placeholder="placeholder text" />
      </FormField>
    )
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'hello' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('it correctly places an aria-label with the placeholder value before user has interacted with the input', () => {
    const { container } = render(
      <FormField>
        <Label>A Label</Label>
        <Icon name="email" />
        <Input id="with-both-icons" placeholder="placeholder text" />
        <Icon name="email" />
      </FormField>
    )
    const label = container.querySelector('label')
    const input = container.querySelector('input')
    expect(label).toBeFalsy()
    expect(input.getAttribute('aria-label')).toBe('placeholder text')
  })

  test('it shows a label when the input has a value', () => {
    const { container } = render(
      <FormField>
        <Label>Hello</Label>
        <Input placeholder="Hello" value="Howdy" />
      </FormField>
    )
    const label = container.querySelector('label')
    const input = container.querySelector('input')
    expect(label).toBeTruthy()
    expect(input.getAttribute('aria-label')).toBeFalsy()
  })

  test('it does not display a label when Label has `hidden` prop', () => {
    const json = renderer
      .create(
        <FormField onChange={() => {}}>
          <Label hidden>A Label</Label>
          <Icon name="email" />
          <Input id="with-both-icons" />
          <Icon name="email" />
        </FormField>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it calls onChange prop if provided', () => {
    const onChange = jest.fn()
    const { container } = render(
      <FormField>
        <Input onChange={onChange} />
      </FormField>
    )
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'hi' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('it triggers a prop-type warning when 3 icons are provided', () => {
    console.error = jest.fn()
    render(
      <FormField onChange={() => {}}>
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
        .indexOf('Warning: Failed prop type: Up to 2') !== -1
    )
    console.error.mockRestore()
  })

  test('it triggers a prop-type warning when any element besides Label, Icon, and Input is provided as a child.', () => {
    console.error = jest.fn()
    render(
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
    render(
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
    render(
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
})
