import React from 'react'
import { render } from '../__test__/testing-library'
import { SlideBox, Box } from '..'

describe('SlideBox', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('renders with layout', () => {
    const { getByTestId } = render(
      <SlideBox layout='60-40' onSlideChange={() => {}} slideSpacing={2} stretchHeight>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    expect(getByTestId('slide1')).toHaveStyle(`width: ${(100 / 1.2).toString()}%;`)
  })

  it('renders with array visible slides', () => {
    const { getByTestId } = render(
      <SlideBox visibleSlides={[2, 3, 4]} onSlideChange={() => {}} slideSpacing={2}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    expect(getByTestId('slide1')).toHaveStyle(`width: 50%;`)
  })

  it('renders with oint visible slides (small browser should default to 1.2 slides)', () => {
    const { getByTestId } = render(
      <SlideBox visibleSlides={2} onSlideChange={() => {}} slideSpacing={2}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    expect(getByTestId('slide1')).toHaveStyle(`width: ${(100 / 1.2).toString()}%;`)
  })
})
