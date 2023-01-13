import React from 'react'
import { render } from '../__test__/testing-library'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { Slide } from './Slide'

const props = {
  onSlideChange: jest.fn(),
  stretchHeight: false,
  index: 0,
  slideSpacing: 2,
  width: 1,
  numSlides: 2,
}

describe('Slide', () => {
  it('Expect scroll function to trigger', () => {
    mockAllIsIntersecting(true)
    const slideBoxRef = {
      current: {
        scroll: jest.fn(),
      },
    }
    const { getByText } = render(<Slide isCurrentSlide slideBoxRef={slideBoxRef} content='WOOP' {...props} />)
    expect(slideBoxRef.current.scroll).toHaveBeenCalled()
    getByText('WOOP')
  })

  it('Expect to render without slideBoxRef', () => {
    mockAllIsIntersecting(true)

    const { getByText } = render(<Slide slideBoxRef={undefined} isCurrentSlide content='WOOP' {...props} />)
    getByText('WOOP')
  })
})
