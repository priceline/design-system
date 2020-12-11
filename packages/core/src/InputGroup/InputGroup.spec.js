import React from 'react'
import { render } from 'testing-library'

import { InputGroup } from '..'

describe('InputGroup', () => {
  test('renders', () => {
    const { asFragment } = render(<InputGroup />)
    expect(asFragment()).toMatchSnapshot()
  })
})
