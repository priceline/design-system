import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import Menu from './Menu'
import MenuItem from '../MenuItem'

describe('Menu', () => {
  it('renders a menu', () => {
    const onItemOneClick = jest.fn()
    const onItemTwoClick = jest.fn()

    render(
      <Menu id='menu' idx='1' buttonText='Click Me'>
        <MenuItem onClick={onItemOneClick}>Item One</MenuItem>
        <MenuItem onClick={onItemTwoClick}>Item Two</MenuItem>
      </Menu>
    )

    fireEvent.click(screen.getByText('Click Me'))
    expect(onItemOneClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText('Item One'))
    expect(onItemOneClick).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Click Me'))
    expect(onItemTwoClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByText('Item Two'))
    expect(onItemTwoClick).toHaveBeenCalledTimes(1)
  })

  it('is a11y friendly', () => {
    render(
      <Menu id='menu' idx='1' buttonText='Click Me'>
        <MenuItem selected>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
      </Menu>
    )

    fireEvent.keyDown(screen.getByText('Click Me'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    })

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
    fireEvent.click(screen.getByText('Item One'))

    fireEvent.keyDown(screen.getByText('Click Me'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    })
    expect(screen.getByText('Item One').parentNode).toHaveFocus()
    fireEvent.click(screen.getByText('Item One'))

    fireEvent.keyDown(screen.getByText('Click Me'), {
      key: 'ArrowRight',
      code: 'ArrowRight',
    })
    expect(screen.queryByText('Item One')).not.toBeInTheDocument()
  })
})
