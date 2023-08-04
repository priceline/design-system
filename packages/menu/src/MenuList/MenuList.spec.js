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
})
