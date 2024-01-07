import { Calendar } from 'pcln-icons'
import React from 'react'
import { IconAnimation } from '..'
import { render } from '../__test__/testing-library'
describe('IconAnimation', () => {
  test('Renders Icon with animation when prop is present', () => {
    const { getByRole } = render(
      <IconAnimation animation='spin'>
        <Calendar />
      </IconAnimation>
    )

    expect(getByRole('flex')).toBeTruthy()
  })
})
