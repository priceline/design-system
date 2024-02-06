import React from 'react'
import { render } from '../../__test__/testing-library'
import { Note } from './Note'

describe('Note', () => {
  it('renders children', () => {
    const { getByText } = render(<Note>Important note!</Note>)
    expect(getByText('Important note!')).toBeInTheDocument()
  })

  it('has a "Note" prefix', () => {
    const { getByText } = render(<Note>Something</Note>)
    expect(getByText('NOTE')).toBeInTheDocument()
  })
})
