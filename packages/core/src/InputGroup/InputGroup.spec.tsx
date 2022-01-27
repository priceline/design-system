import React from 'react'
import { render } from '@priceline/react-jesting-library'

import { InputGroup } from '..'

describe('InputGroup', () => {
  test('renders', () => {
    const { asFragment } = render(<InputGroup />)
    expect(asFragment()).toMatchSnapshot()
  })
})
