import React from 'react'
import { render, fireEvent } from 'testing-library'
import { Flex, Badge } from 'pcln-design-system'
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
    const { getByTestId } = render(
      <Carousel>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    expect(getByTestId('carousel-provider')).toBeInTheDocument()
    expect(getByTestId('slider')).toBeInTheDocument()
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
      <Carousel
        displayArrowsMobile
        layout='50-50'
        arrowsPosition='bottom'
        currentSlide={1}
        overflowAllowancePxTop={10}
        maxHeight={220}
      >
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

  it('Should render the nodeBesideArrowsLeft', () => {
    window.innerWidth = 1400
    const { getByText } = render(
      <Carousel
        layout='50-50'
        arrowsPosition='bottom'
        arrowsAlignment='right'
        currentSlide={1}
        nodeBesideArrowsLeft={<Badge>Hello</Badge>}
      >
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('Should NOT render the nodeBesideArrowsLeft when arrow center aligment bottom', () => {
    window.innerWidth = 1400
    const { queryByText } = render(
      <Carousel
        layout='50-50'
        arrowsPosition='bottom'
        currentSlide={1}
        nodeBesideArrowsLeft={<Badge>Hello</Badge>}
      >
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    expect(queryByText('Hello')).not.toBeInTheDocument()
  })

  it('Should render the nodeBesideArrowsRight when arrow right aligment bottom', () => {
    window.innerWidth = 1400
    const { getByText } = render(
      <Carousel
        layout='50-50'
        arrowsPosition='bottom'
        arrowsAlignment='left'
        currentSlide={1}
        nodeBesideArrowsRight={<Badge>Hello</Badge>}
      >
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )
    expect(getByText('Hello')).toBeInTheDocument()
  })
})
