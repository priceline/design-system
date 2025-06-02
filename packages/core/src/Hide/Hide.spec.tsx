import React from 'react'
import { render } from '../__test__/testing-library'
import { Hide } from './Hide'

describe('Hide', () => {
  test('renders', () => {
    const { asFragment } = render(<Hide />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with breakpoint props', () => {
    const { rerender, asFragment } = render(<Hide xs />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Hide sm />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Hide md />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Hide lg />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Hide xl />)
    expect(asFragment()).toMatchSnapshot()

    rerender(<Hide xxl />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with print prop', () => {
    const { asFragment } = render(<Hide print />)
    expect(asFragment()).toMatchSnapshot()
  })
})
