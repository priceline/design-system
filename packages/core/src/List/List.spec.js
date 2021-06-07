import React from 'react'
import { render, screen } from 'testing-library'
import { List } from '..'

describe('List', () => {
  it('renders ordered list', () => {
    render(
      <List.ol color='text.light' data-testid='list'>
        <li>Example Text 1</li>
        <li>Example Text 2</li>
        <li>Example Text 3</li>
      </List.ol>
    )

    const list = screen.getByTestId('list')

    expect(list).toHaveStyleRule('color', '#4f6f8f')
    screen.getByText('Example Text 1')
    screen.getByText('Example Text 2')
    screen.getByText('Example Text 3')
  })

  it('renders unordered list', () => {
    render(
      <List.ul color='text.light' fontSize={1} data-testid='list'>
        <li>Example Text 1</li>
        <li>Example Text 2</li>
        <li>Example Text 3</li>
      </List.ul>
    )

    const list = screen.getByTestId('list')

    expect(list).toHaveStyleRule('color', '#4f6f8f')
    expect(list).toHaveStyleRule('font-size', '14px')
    screen.getByText('Example Text 1')
    screen.getByText('Example Text 2')
    screen.getByText('Example Text 3')
  })
})
