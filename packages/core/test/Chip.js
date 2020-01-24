import React from 'react'

import { Chip } from '../src'

describe('Chip', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithTheme(<Chip />)

    expect(asFragment()).toMatchSnapshot()
  })
})
