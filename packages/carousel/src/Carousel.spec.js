import React from 'react'
import { render } from 'testing-library'
import { Flex } from 'pcln-design-system'
import { Carousel } from './Carousel'

describe('Carousel', () => {
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

  it('should render a carousel', () => {
    const { getByText, getByTestId } = render(
      <Carousel showDots arrowsPosition='side'>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    expect(getByText('Slide 1')).toBeInTheDocument()
    expect(getByTestId('dot_group')).toBeInTheDocument()
    expect(getByTestId('prev-side')).toBeInTheDocument()
    expect(getByTestId('next-side')).toBeInTheDocument()
  })

  it('should set slide widths if layout is set', () => {
    const { getByTestId, queryByTestId } = render(
      <Carousel layout='75-25' arrowsPosition='bottom'>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    expect(getByTestId('slide-0')).toHaveStyle('width: 50%')
    expect(getByTestId('slide-1')).toHaveStyle('width: 16.666666666666668%')
    expect(queryByTestId('dot_group')).not.toBeInTheDocument()
    expect(getByTestId('prev-bottom')).toBeInTheDocument()
    expect(getByTestId('next-bottom')).toBeInTheDocument()
  })
})
