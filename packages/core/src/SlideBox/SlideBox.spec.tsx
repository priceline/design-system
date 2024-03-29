import React from 'react'
import { mockAllIsIntersecting, mockIsIntersecting } from 'react-intersection-observer/test-utils'
import { Box } from '../Box/Box'
import { render } from '../__test__/testing-library'
import { SlideBox } from './SlideBox'

describe('SlideBox', () => {
  it('renders with layout', () => {
    const { getByTestId } = render(
      <SlideBox layout='60-40' onSlideChange={() => {}} slideSpacing={2} stretchHeight arrowPosition='side'>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    mockAllIsIntersecting(true)
    expect(getByTestId('slide1')).toHaveStyle(`width: ${(100 / 1.1).toString()}%;`)
  })

  it('renders with array visible slides', () => {
    const { getByTestId } = render(
      <SlideBox
        visibleSlides={[2, 3, 4]}
        onSlideChange={() => {}}
        slideSpacing={2}
        currentSlideOverride={2}
        arrowPosition='side'
        overflowAllowancePxX={20}
        overflowAllowancePxY={40}
      >
        <Box key='testkey'>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    mockAllIsIntersecting(true)
    expect(getByTestId('slide1')).toHaveStyle(`width: 50%;`)
  })

  it('renders with int visible slides (small browser should default to 1.1 slides)', () => {
    const slideChange = jest.fn()

    const { getByTestId } = render(
      <SlideBox
        visibleSlides={1}
        onSlideChange={slideChange}
        slideSpacing={2}
        arrowPosition='bottom'
        overflowAllowancePxTop={10}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    mockIsIntersecting(getByTestId('render-in-view-1'), true)
    expect(slideChange).toHaveBeenCalledTimes(1)
    expect(slideChange).toHaveBeenCalledWith(1)
    expect(getByTestId('slide1')).toHaveStyle(`width: ${(100 / 1.1).toString()}%;`)
  })

  it('renders with arrows on top', () => {
    const { getByTestId } = render(
      <SlideBox visibleSlides={1} arrowButtonVariation='fill' arrowPosition='top'>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )

    getByTestId('top-arrows')
  })

  it('renders with no arrows default', () => {
    const { queryByTestId } = render(
      <SlideBox visibleSlides={1}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SlideBox>
    )
    expect(queryByTestId('top-arrows')).not.toBeInTheDocument()
    expect(queryByTestId('bottom-arrows')).not.toBeInTheDocument()
    expect(queryByTestId('side-left-arrow')).not.toBeInTheDocument()
    expect(queryByTestId('side-right-arrow')).not.toBeInTheDocument()
  })
})
