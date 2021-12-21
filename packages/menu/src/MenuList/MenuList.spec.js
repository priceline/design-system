import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import MenuList from './MenuList'
import MenuItem from '../MenuItem'
import { ThemeProvider } from 'styled-components'

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

    expect(screen.getByRole('listbox')).toHaveStyleRule(
      'font-family',
      "'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif"
    )
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
  it('grabs font family from theme', () => {
    const mockTheme = {
      font: "'Source Sans Pro',Verdana,sans-serif",
    }
    render(
      <ThemeProvider theme={mockTheme}>
        <MenuList id='test-menu'>
          <MenuItem selected>Item One</MenuItem>
        </MenuList>
      </ThemeProvider>
    )
    expect(screen.getByRole('listbox')).toHaveStyleRule(
      'font-family',
      mockTheme.font
    )
  })
})
