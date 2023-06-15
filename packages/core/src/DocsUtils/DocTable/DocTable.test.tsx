import React from 'react'
import { DocTable, DocTableProps } from '..'
import { render } from '../../__test__/testing-library'

const props: DocTableProps<{ id: number; name: string; age: number }> = {
  data: [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ],

  columns: [
    { field: 'id', heading: 'ID' },
    { field: 'name', heading: 'Name', noWrap: true },
    { field: 'age', heading: 'Age' },
  ],
}

describe('DocTable', () => {
  test('renders a table with the correct data and columns', () => {
    const { getByText } = render(<DocTable {...props} />)
    expect(getByText('ID')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Age')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('John')).toBeInTheDocument()
    expect(getByText('25')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('30')).toBeInTheDocument()
  })

  test('renders noWrap', () => {
    const { getByText } = render(<DocTable {...props} />)
    expect(getByText('John').parentElement).toHaveStyle('white-space: nowrap;')
    expect(getByText('Jane').parentElement).toHaveStyle('white-space: nowrap;')
  })
})
