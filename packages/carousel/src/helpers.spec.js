import React from 'react'
import { render, waitFor } from 'testing-library'
import { getVisibleSlidesArray, useResponsiveVisibleSlides, getMobileVisibleSlides } from './helpers'

const resizeWindow = (width) => {
  // Simulate window resize event
  const resizeEvent = document.createEvent('Event')
  resizeEvent.initEvent('resize', true, true)
  global.window.innerWidth = width
  global.window.dispatchEvent(resizeEvent)
}

const input = [1, 2, 3]
const TextVisibleSlides = () => {
  const { responsiveVisibleSlides } = useResponsiveVisibleSlides(input)
  return <div>{responsiveVisibleSlides} Slide(s)</div>
}

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

describe('useResponsiveVisibleSlides with matchMedia', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('Small Browser Width', () => {
    window.innerWidth = 600
    const { getByText } = render(<TextVisibleSlides />)
    expect(getByText('1 Slide(s)')).toBeInTheDocument()
  })

  it('Medium Browser Width', () => {
    window.innerWidth = 800
    const { getByText } = render(<TextVisibleSlides />)
    expect(getByText('2 Slide(s)')).toBeInTheDocument()
  })

  it('Large Browser Width', () => {
    window.innerWidth = 1400
    const { getByText } = render(<TextVisibleSlides />)
    expect(getByText('3 Slide(s)')).toBeInTheDocument()
  })
})

describe('useResponsiveVisibleSlides without matchMedia', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: undefined,
    })
  })

  beforeEach(() => {
    resizeWindow(1400)
  })

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
    expect(getByText('3 Slide(s)')).toBeInTheDocument()

    resizeWindow(600)

    await waitFor(() => {
      expect(getByText('1 Slide(s)')).toBeInTheDocument()
    })
  })
})

describe('getMobileVisibleSlides without matchMedia', () => {
  it('return modified array with number inputr', () => {
    expect(getMobileVisibleSlides(5)).toBe(5)
  })
  it('return modified array', () => {
    const visibleSlides = getMobileVisibleSlides([1, 2, 3])
    expect(visibleSlides[0]).toBe(1)
    expect(visibleSlides[1]).toBeNull()
    expect(visibleSlides[2]).toBe(2)
  })
})
