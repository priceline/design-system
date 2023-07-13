import React from 'react'
import { Toggle } from '.'
import { createTheme } from '..'
import { render, fireEvent } from '../__test__/testing-library'
import { theme as customThemes } from '../theme/theme'

const theme = createTheme()

describe('Toggle', () => {
  test('renders correctly when off', () => {
    const { getByRole } = render(<Toggle label='Total price toggle' />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', theme.palette.background.dark)
  })

  test('renders correctly when on', () => {
    const { getByRole } = render(<Toggle isOn label='Total price toggle' />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', theme.palette.primary.base)
  })

  test('renders correctly when disabled', () => {
    const { getByRole } = render(<Toggle label='Total price toggle' disabled />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', theme.palette.background.light)
  })

  test('calls callback', () => {
    const cb = jest.fn()

    const { getByLabelText } = render(<Toggle label='Total price toggle' onToggle={cb} />)
    const input = getByLabelText('Total price toggle')
    fireEvent.click(input)
    expect(cb).toHaveBeenCalled()
  })

  test('add boxshadow and bgColor when hover over the selected states', () => {
    const { getByTestId, getByRole } = render(<Toggle label='Total price toggle' isOn={true} />)
    const wrapper = getByRole('switch').parentNode
    const circleHandle = getByTestId('handle-div')
    expect(wrapper).toHaveStyleRule('background-color', theme.palette.primary.base)
    expect(circleHandle).toHaveStyleRule('box-shadow', customThemes.shadows.sm)

    // when it is hover
    expect(wrapper).toHaveStyleRule('background-color', theme.palette.primary.dark, {
      modifier: ':hover:not([disabled])',
    })
    expect(wrapper).toHaveStyleRule('box-shadow', customThemes.shadows.xl, {
      modifier: ':hover:not([disabled]) > #circle-handle',
    })
  })
})
