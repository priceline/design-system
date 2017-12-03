import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { RadioButton, ThemeProvider } from '..'

describe('RadioButton', () => {
  test('Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <RadioButton isSelected />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <RadioButton />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <RadioButton disabled />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})

describe('RadioButton onClick', () => {
  const onClick = jest.fn()

  test('Disabled', () => {
    const wrapper = mount(
      <ThemeProvider>
        <RadioButton onClick={onClick} disabled />
      </ThemeProvider>
    )
    wrapper.find('[data-test-id="RADIO_BUTTON_DISABLED"]').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  test('Not Disabled', () => {
    const wrapper = mount(
      <ThemeProvider>
        <RadioButton onClick={onClick} />
      </ThemeProvider>
    )
    wrapper.find('[data-test-id="RADIO_BUTTON_NOT_SELECTED"]').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
