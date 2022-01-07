import React from 'react'
import { render } from 'testing-library'
import { Flex } from 'pcln-design-system'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('should render a carousel', () => {
    const { getByText } = render(
      <Carousel>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    expect(getByText('Slide 1')).toBeInTheDocument()
  })

  it('should set slide widths if layout is set', () => {
    const { getByTestId } = render(
      <Carousel layout='75-25'>
        <Flex>Slide 1</Flex>
        <Flex>Slide 2</Flex>
        <Flex>Slide 3</Flex>
      </Carousel>
    )

    expect(getByTestId('slide-0')).toHaveStyle('width: 50%')
    expect(getByTestId('slide-1')).toHaveStyle('width: 16.666666666666668%')
  })
})
