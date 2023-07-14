import React from 'react'
import { render, screen } from '../__test__/testing-library'
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

  it('renders list with listStyles and indentation which is passed in props ', () => {
    render(
      <List.ul color='text.light' fontSize={1} listStyle='upper-roman' indentSize='md' data-testid='list'>
        <li>Example Text 1</li>
        <li>Example Text 2</li>
        <li>Example Text 3</li>
      </List.ul>
    )

    const list = screen.getByTestId('list')
    expect(list).toHaveStyleRule('list-style-type', 'upper-roman')
    expect(list).toHaveStyleRule('margin-left', '32px')
  })

  it('should renders list with default listStyles and indentation if right props are not passed ', () => {
    render(
      <List.ul color='text.light' fontSize={1} listStyle='roman' data-testid='list'>
        <li>Example Text 1</li>
        <li>Example Text 2</li>
        <li>Example Text 3</li>
      </List.ul>
    )

    const list = screen.getByTestId('list')
    expect(list).toHaveStyleRule('list-style-type', 'auto')
    expect(list).toHaveStyleRule('margin-left', '40px')
  })
})
