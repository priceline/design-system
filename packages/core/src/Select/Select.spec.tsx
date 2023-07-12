import React from 'react'
import { render, screen } from '../__test__/testing-library'

import { Select, theme, createTheme, getPaletteColor } from '..'

describe('Select', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Select />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders disabled', () => {
    const paletteTheme = createTheme(theme)
    render(
      <Select defaultValue='Premium Economy' disabled>
        <option>Premium Economy</option>
      </Select>
    )

    const select = screen.getByText('Premium Economy').closest('select')
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

  test('it renders read-only', () => {
    const paletteTheme = createTheme(theme)
    render(
      <Select defaultValue='Premium Economy' readOnly>
        <option>Premium Economy</option>
      </Select>
    )

    const select = screen.getByText('Premium Economy').closest('select')

    expect(screen.getByText('Premium Economy')).toBeDisabled()
    expect(select).toHaveAttribute('readonly')
    expect(select).toHaveStyleRule(
      'background-color',
      getPaletteColor('background.light')({ theme: paletteTheme }),
      { modifier: '[readOnly]' }
    )
    expect(select).toHaveStyleRule('color', getPaletteColor('text.light')({ theme: paletteTheme }), {
      modifier: '[readOnly]',
    })
    expect(select).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[readOnly]' })
    expect(select).toHaveStyleRule('opacity', '1', { modifier: '[readOnly]' })
  })
})
