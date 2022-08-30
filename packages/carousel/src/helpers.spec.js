import React from 'react'
import { render, waitFor } from 'testing-library'
import { getVisibleSlidesArray, useResponsiveVisibleSlides } from './helpers'

describe('getVisibleSlidesArray', () => {
  it('Pass an array, return same input', () => {
    const input = [2, 2, 3]
    expect(getVisibleSlidesArray(input)).toEqual(input)
  })

  it('Pass an int, set default responsive sizes', () => {
    const expected = [1.1, 2.1, 3]
    expect(getVisibleSlidesArray(3)).toEqual(expected)
  })
})

describe('useResponsiveVisibleSlides', () => {
  const resizeWindow = (width) => {
    // Simulate window resize event
    const resizeEvent = document.createEvent('Event')
    resizeEvent.initEvent('resize', true, true)
    global.window.innerWidth = width
    global.window.dispatchEvent(resizeEvent)
  }

  const input = [1, 2, 3]
  const TextVisibleSlides = () => {
    const visibleSlides = useResponsiveVisibleSlides(input)
    return <div>{visibleSlides} Slide(s)</div>
  }

  it('Resize Browser Width to Medium', async () => {
    const { getByText } = render(<TextVisibleSlides />)
    expect(getByText('3 Slide(s)')).toBeInTheDocument()

    resizeWindow(1000)

    await waitFor(() => {
      expect(getByText('2 Slide(s)')).toBeInTheDocument()
    })
  })

  it('Resize Browser Width to Small', async () => {
    const { getByText } = render(<TextVisibleSlides />)
    expect(getByText('2 Slide(s)')).toBeInTheDocument()

    resizeWindow(600)

    await waitFor(() => {
      expect(getByText('1 Slide(s)')).toBeInTheDocument()
    })
  })
})
