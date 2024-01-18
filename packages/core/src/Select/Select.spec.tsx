import React from 'react'
import { Select } from '../Select/Select'
import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme'
import { getPaletteColor } from '../utils'
import { createTheme } from '../utils/createTheme'

describe('Select', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Select />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders disabled', () => {
    const paletteTheme = createTheme(theme)
    render(
      <Select data-testId='disabled-select' defaultValue='Premium Economy' disabled>
        <option>Premium Economy</option>
      </Select>
    )

    const select = screen.getByTestId('disabled-select')
    expect(select).toBeDisabled()
    expect(select).toHaveStyleRule(
      'background-color',
      getPaletteColor('background.light')({ theme: paletteTheme }),
      { modifier: ':disabled' }
    )
    expect(select).toHaveStyleRule('color', getPaletteColor('text.light')({ theme: paletteTheme }), {
      modifier: ':disabled',
    })
    expect(select).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
    expect(select).toHaveStyleRule('opacity', '1', { modifier: ':disabled' })
  })
})
