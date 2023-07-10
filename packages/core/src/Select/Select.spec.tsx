import React from 'react'
import { render, screen } from '../__test__/testing-library'

import { Select } from '..'

describe('Select', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Select />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('it renders disabled', () => {
    render(
      <Select defaultValue='Premium Economy' disabled>
        <option>Premium Economy</option>
      </Select>
    )

    const select = screen.getByText('Premium Economy').closest('select')
    expect(select).toBeDisabled()
    expect(select).toHaveStyleRule('background-color', '#f4f6f8', { modifier: ':disabled' })
    expect(select).toHaveStyleRule('color', '#4f6f8f', { modifier: ':disabled' })
    expect(select).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
    expect(select).toHaveStyleRule('opacity', '1', { modifier: ':disabled' })
  })
})
