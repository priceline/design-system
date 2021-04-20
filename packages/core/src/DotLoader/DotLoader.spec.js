import React from 'react'
import { render, screen } from 'testing-library'
import DotLoader from './DotLoader'

describe('DotLoader', () => {
  it('renders a dot loader', () => {
    render(<DotLoader />)
  })
})
