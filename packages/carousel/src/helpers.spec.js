import React from 'react'
import { render, waitFor } from 'testing-library'
import { getVisibleSlidesArray, useResponsiveVisibleSlides } from './helpers'
import { act } from 'react-dom/test-utils'

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
    act(() => {
      global.window.innerWidth = width
      global.window.dispatchEvent(resizeEvent)
    })
  }

  const input = [1, 2, 3]
  const TextVisibleSlides = () => {
    const visibleSlides = useResponsiveVisibleSlides(input)
    return <div className={`visible_${visibleSlides}`}>{visibleSlides} Slide(s)</div>
  }

  it('Resize Browser Width', async () => {
    const { container } = render(<TextVisibleSlides />)
    expect(container.querySelector('.visible_3')).toBeInTheDocument()

    resizeWindow(600)

    await waitFor(() => {
      expect(container.querySelector('.visible_1')).toBeInTheDocument()
    })
  })
})
