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
    render(<Chip selected>Free Wifi</Chip>)
    expect(screen.queryAllByTitle('Close').length).toBe(2)
  })

  it('renders filter without close icon if not selected', () => {
    render(<Chip>Free Wifi</Chip>)
    expect(screen.queryAllByTitle('Close').length).toBe(0)
  })

  it('updates selected state when clicked', () => {
    const { result } = renderHook(() => useToggle(false))
    const [selected, toggleSelected] = result.current
    render(
      <Chip selected={selected} onClick={toggleSelected}>
        Free Wifi
      </Chip>
    )

    expect(result.current[0]).toBe(false)
    act(() => {
      fireEvent.click(screen.getByText('Free Wifi'))
    })
    expect(result.current[0]).toBe(true)
  })

  it('renders selected choice chip', () => {
    const { asFragment } = render(
      <Chip variation='choice' selected>
        Free Wifi
      </Chip>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders selected filter chip', () => {
    const { asFragment } = render(
      <Chip variation='filter' selected>
        Free Wifi
      </Chip>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders input chip', () => {
    const { asFragment } = render(
      <Chip variation='input' selected>
        Free Wifi
      </Chip>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
