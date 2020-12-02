import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import MenuList from './MenuList'
import MenuItem from '../MenuItem'

describe('MenuList', () => {
  it('renders a menu list', () => {
    const onItemOneClick = jest.fn()
    const onItemTwoClick = jest.fn()

    render(
      <MenuList>
        <MenuItem onClick={onItemOneClick}>Item One</MenuItem>
        <MenuItem onClick={onItemTwoClick}>Item Two</MenuItem>
      </MenuList>
    )

    fireEvent.click(screen.getByText('Item One'))
    expect(onItemOneClick).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Item Two'))
    expect(onItemTwoClick).toHaveBeenCalledTimes(1)
  })

  it('is a11y friendly', () => {
    render(
      <MenuList>
        <MenuItem selected>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
      </MenuList>
    )

    expect(screen.getByText('Item One').parentNode).toHaveFocus()
    fireEvent.keyDown(screen.getByRole('listbox'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    })
    expect(screen.getByText('Item Two').parentNode).toHaveFocus()
    fireEvent.keyDown(screen.getByRole('listbox'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    })
    expect(screen.getByText('Item One').parentNode).toHaveFocus()
    fireEvent.keyDown(screen.getByRole('listbox'), {
      key: 'ArrowRight',
      code: 'ArrowRight',
    })
    expect(screen.getByText('Item One').parentNode).toHaveFocus()
  })
})
