import React from 'react'
import { render } from 'testing-library'
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

  const input = [1, 2, 3]
  const TextVisibleSlides = () => {
    const visibleSlides = useResponsiveVisibleSlides(input)
    return <div>{visibleSlides} Slide(s)</div>
  }

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
