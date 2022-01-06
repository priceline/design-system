import React from 'react'
import { render, fireEvent } from 'testing-library'

import { IconButton } from '..'
import { Key as KeyIcon } from 'pcln-icons'

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<IconButton icon={<KeyIcon />} onClick={handleClick} />)

    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('renders without background color in disabled state', () => {
    const { container } = render(<IconButton icon={<KeyIcon />} disabled />)

    const button = container.querySelector('button:disabled')
    expect(button).toHaveStyleRule('background-color', 'transparent')
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<IconButton icon={<KeyIcon />} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
