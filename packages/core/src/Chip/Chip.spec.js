import React, { useState } from 'react'
import { fireEvent, render, screen } from 'testing-library'
import { act, renderHook } from '@testing-library/react-hooks'
import Chip from './Chip'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => setValue(!value)

  return [value, toggle]
}

describe('Chip', () => {
  it('renders filter with close icon if selected', () => {
    render(
      <Chip id='wifi_chip' selected>
        Free Wifi
      </Chip>
    )
    expect(screen.queryAllByTitle('Close')).toHaveLength(2)
  })

  it('renders filter without close icon if not selected', () => {
    render(<Chip id='wifi_chip'>Free Wifi</Chip>)
    expect(screen.queryAllByTitle('Close')).toHaveLength(0)
  })

  it('updates selected state when clicked', () => {
    const { result } = renderHook(() => useToggle(false))
    const [selected, toggleSelected] = result.current
    render(
      <Chip id='wifi_chip' selected={selected} onClick={toggleSelected}>
        Free Wifi
      </Chip>
    )

    expect(result.current[0]).toBe(false)
    act(() => {
      fireEvent.click(screen.getByText('Free Wifi'))
    })
    expect(result.current[0]).toBe(true)
  })

  it('renders filter chip', () => {
    render(<Chip id='wifi_chip'>Free Wifi</Chip>)

    const Component = screen.getByText('Free Wifi')

    expect(Component).toHaveStyleRule('border', '1px solid #c0cad5')
    expect(Component).toHaveStyleRule('background-color', '#fff')
    expect(Component).toHaveStyleRule('color', '#007aff')
  })

  it('renders selected filter chip', () => {
    render(
      <Chip id='wifi_chip' variation='filter' selected>
        Free Wifi
      </Chip>
    )
    const Component = screen.getByText('Free Wifi')

    expect(Component).toHaveStyleRule('border', '1px solid #007aff')
    expect(Component).toHaveStyleRule('background-color', '#e8f2ff')
    expect(Component).toHaveStyleRule('color', '#007aff')
  })

  it('renders disabled chip', () => {
    render(
      <Chip id='wifi_chip' disabled>
        Free Wifi
      </Chip>
    )

    const Component = screen.getByText('Free Wifi')

    expect(Component).toHaveStyleRule('border', '1px solid transparent')
    expect(Component).toHaveStyleRule('background-color', '#f4f6f8')
    expect(Component).toHaveStyleRule('color', '#4f6f8f')
  })
})
