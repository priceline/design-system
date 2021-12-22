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
})
