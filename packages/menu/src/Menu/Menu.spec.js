import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import Menu from './Menu'
import MenuItem from '../MenuItem'

describe('Menu', () => {
  it('renders a menu', async () => {
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

    const itemOne = await screen.findByText('Item One')
    fireEvent.click(itemOne)
    expect(onItemOneClick).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Click Me'))
    expect(onItemTwoClick).toHaveBeenCalledTimes(0)

    const itemTwo = await screen.findByText('Item Two')
    fireEvent.click(itemTwo)
    expect(onItemTwoClick).toHaveBeenCalledTimes(1)
  })

  it('is a11y friendly', async () => {
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

    const listBox = await screen.findByRole('listbox')
    let itemOne = await screen.findByText('Item One')
    const itemTwo = await screen.findByText('Item Two')

    expect(itemOne.closest('button')).toHaveFocus()
    fireEvent.keyDown(listBox, {
      key: 'ArrowDown',
      code: 'ArrowDown',
    })
    expect(itemTwo.closest('button')).toHaveFocus()
    fireEvent.keyDown(listBox, {
      key: 'ArrowUp',
      code: 'ArrowUp',
    })
    expect(itemOne.closest('button')).toHaveFocus()
    fireEvent.click(itemOne)

    fireEvent.keyDown(screen.getByText('Click Me'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    })

    itemOne = await screen.findByText('Item One')
    expect(itemOne.closest('button')).toHaveFocus()
    fireEvent.click(itemOne)

    fireEvent.keyDown(screen.getByText('Click Me'), {
      key: 'ArrowRight',
      code: 'ArrowRight',
    })
    expect(screen.queryByText('Item One')).not.toBeInTheDocument()
  })

  it('renders with an input for clickable node', async () => {
    const onItemOneClick = jest.fn()
    const onItemTwoClick = jest.fn()

    const Button = <button>Click me!</button>
    render(
      <Menu id='menu' idx='1' buttonNode={Button}>
        <MenuItem onClick={onItemOneClick}>Item One</MenuItem>
        <MenuItem onClick={onItemTwoClick}>Item Two</MenuItem>
      </Menu>
    )

    fireEvent.click(screen.getByText('Click me!'))

    const itemOne = await screen.findByText('Item One')
    expect(onItemOneClick).toHaveBeenCalledTimes(0)
    fireEvent.click(itemOne)
    expect(onItemOneClick).toHaveBeenCalledTimes(1)
  })

  it('renders content at bottom-start as default placement', async () => {
    render(
      <Menu id='menu' idx='1' buttonText='Click Me'>
        <MenuItem>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
      </Menu>
    )

    fireEvent.click(screen.getByText('Click Me'))
    const dialog = await screen.findByRole('dialog')
    expect(dialog).toHaveAttribute('data-placement', 'bottom-start')
  })

  it('renders content with custom placement', async () => {
    render(
      <Menu id='menu' idx='1' buttonText='Click Me' placement='bottom'>
        <MenuItem>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
      </Menu>
    )

    fireEvent.click(screen.getByText('Click Me'))
    const dialog = await screen.findByRole('dialog')
    expect(dialog).toHaveAttribute('data-placement', 'bottom')
  })
})
