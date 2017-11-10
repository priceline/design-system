import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { RadioButton, theme } from '..'

describe('RadioButton', () => {
  test('Selected, rendering', () => {
    const json = renderer
      .create(
        <RadioButton
          theme={theme}
          isSelected
          radioButtonText="Option Selected"
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = renderer
      .create(
        <RadioButton theme={theme} radioButtonText="Option Not Selected" />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = renderer
      .create(
        <RadioButton theme={theme} disabled radioButtonText="Option Disabled" />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})

describe('RadioButton onClick', () => {
  const onClick = jest.fn()

  test('Disabled', () => {
    const wrapper = mount(
      <RadioButton
        theme={theme}
        onClick={onClick}
        disabled
        radioButtonText="Option Disabled"
      />
    )
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  test('Not Disabled', () => {
    const wrapper = mount(
      <RadioButton
        theme={theme}
        onClick={onClick}
        radioButtonText="Option Not Selected"
      />
    )
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
