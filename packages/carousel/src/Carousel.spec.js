import React from 'react'
import { render, fireEvent } from 'testing-library'
import { Flex } from 'pcln-design-system'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  beforeAll(() => {
    mockAllIsIntersecting(true)
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

  it('should render a carousel', () => {
    const onSlideChange = jest.fn()
    const onSlideClick = jest.fn()
    const onSlideKeyDown = jest.fn()

    const { getByTestId, getByLabelText, queryAllByText } = render(
      <Carousel
        showDots
        arrowsPosition='side'
        onSlideChange={onSlideChange}
        onSlideClick={onSlideClick}
        onSlideKeyDown={onSlideKeyDown}
      >
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    //Slide contains a <Hide> with separate mobile and desktop contents to allow mobile only RenderInView
    const slide1 = queryAllByText('Slide 1')[1]

    expect(slide1).toBeInTheDocument()
    expect(getByTestId('dot_group')).toBeInTheDocument()
    expect(getByTestId('prev-side')).toBeInTheDocument()
    expect(getByTestId('next-side')).toBeInTheDocument()

    fireEvent.click(getByLabelText('next'))
    expect(onSlideChange).toHaveBeenCalledWith(1)
    fireEvent.click(getByLabelText('previous'))
    expect(onSlideChange).toHaveBeenCalledWith(0)
    fireEvent.click(slide1)
    expect(onSlideClick).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(slide1, { key: 'Enter' })
    expect(onSlideKeyDown).toHaveBeenCalledTimes(1)
  })

  it('Should render SlideBox for mobile sizes', () => {
    window.innerWidth = 720
    const { getByText, getByTestId } = render(
      <Carousel layout='50-50' arrowsPosition='bottom' currentSlide={1}>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    getByTestId('slide-box')
    getByText('Slide 1')
    getByText('Slide 2')
    getByText('Slide 3')
  })

  it('Should NOT render SlideBox for mobile sizes with displayArrowsMobile = true', () => {
    window.innerWidth = 720
    const { queryByTestId } = render(
      <Carousel displayArrowsMobile layout='50-50' arrowsPosition='bottom' currentSlide={1}>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    expect(queryByTestId('slide-box')).not.toBeInTheDocument()
  })

  it('Should render arrow button with opacity 0', () => {
    window.innerWidth = 1400
    const { getByTestId } = render(
      <Carousel layout='50-50' arrowsPosition='side' currentSlide={1} showArrowsOnHover>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    const nextArrow = getByTestId('next-side')
    expect(nextArrow).toHaveStyleRule('opacity', '0')
  })
})
