import React from 'react'
import { render } from '../__test__/testing-library'

import { InputGroup } from './InputGroup'

describe('InputGroup', () => {
  test('renders', () => {
    const { asFragment } = render(<InputGroup />)
    expect(asFragment()).toMatchSnapshot()
  })
})
