import React from 'react'
import { render, fireEvent } from '../__test__/testing-library'
import { useSlideBoxNav } from './useSlideBoxNav'
import { Button } from '../Button'

const getChildArray = () => {
  const childarray = []
  for (let i = 0; i < 10; i++) {
    childarray.push(<div>d{i}</div>)
  }
  return childarray
}

const props = {
  onSlideChange: jest.fn(),
  currentSlideOverride: 0,
  arrowSizeOverride: 'lg',
  arrowButtonVariation: 'white',
  arrowPosition: 'side',
  childArray: getChildArray(),
  slideScrollNum: 1,
  mobileSlideScrollNum: 1,
}

const Test = (testProps) => {
  const { setCurrentSlide, currentSlide, onSlideChangeWrapper, arrowProps, slideInView } = useSlideBoxNav(
    testProps
  )
  const {
    leftDisabled,
    rightDisabled,
    arrowButtonVariation,
    arrowPosition,
    size,
    leftArrowClick,
    rightArrowClick,
  } = arrowProps

  const slideChange = () => {
    onSlideChangeWrapper(6, 3)
  }

  const slideChangeOutsideBounds = () => {
    onSlideChangeWrapper(-5, 3)
  }

  const slideChangeOutsideBoundsUpper = () => {
    onSlideChangeWrapper(99, 3)
  }

  return (
    <div>
      <div data-testid='leftdisabled'>{leftDisabled ? 'true' : 'false'}</div>
      <div data-testid='rightdisabled'>{rightDisabled ? 'true' : 'false'}</div>
      <div data-testid='arrowButtonVariation'>{arrowButtonVariation}</div>
      <div data-testid='arrowPosition'>{arrowPosition}</div>
      <div data-testid='arrowSize'>{size}</div>
      <div data-testid='currentslide'>slide {currentSlide}</div>
      <div data-testid='slideInView'>slide {slideInView}</div>
      <Button onClick={setCurrentSlide}>Set Current Slide</Button>
      <Button onClick={leftArrowClick}>Left Arrow Click</Button>
      <Button onClick={rightArrowClick}>Right Arrow Click</Button>
      <Button onClick={slideChange}>Slide Change Wrapper</Button>
      <Button onClick={slideChangeOutsideBounds}>Slide Change Outside Bounds</Button>
      <Button onClick={slideChangeOutsideBoundsUpper}>Slide Change Outside Bounds Upper</Button>
    </div>
  )
}

describe('useSlideBoxNav', () => {
  it('Basic functionality', () => {
    const { getByTestId, getByText } = render(<Test {...props} />)
    expect(getByTestId('leftdisabled').innerHTML).toEqual('true')
    expect(getByTestId('rightdisabled').innerHTML).toEqual('false')
    expect(getByTestId('arrowButtonVariation').innerHTML).toEqual('white')
    expect(getByTestId('arrowPosition').innerHTML).toEqual('side')
    expect(getByTestId('arrowSize').innerHTML).toEqual('lg')
    expect(getByTestId('currentslide').innerHTML).toEqual('slide 0')

    //Right arrow click
    fireEvent.click(getByText('Right Arrow Click'))
    expect(getByTestId('currentslide').innerHTML).toEqual('slide 1')

    //Left arrow click
    fireEvent.click(getByText('Left Arrow Click'))
    expect(getByTestId('currentslide').innerHTML).toEqual('slide 0')

    //Slide Change (used in useEffect)
    fireEvent.click(getByText('Slide Change Wrapper'))
    expect(getByTestId('slideInView').innerHTML).toEqual('slide 6')

    //Slide Change outside bounds
    fireEvent.click(getByText('Slide Change Outside Bounds'))
    expect(getByTestId('slideInView').innerHTML).toEqual('slide 2')

    //Slide Change outside bounds (lower)
    fireEvent.click(getByText('Slide Change Outside Bounds'))
    expect(getByTestId('slideInView').innerHTML).toEqual('slide 2')

    //Slide Change outside bounds (upper)
    fireEvent.click(getByText('Slide Change Outside Bounds Upper'))
    expect(getByTestId('slideInView').innerHTML).toEqual('slide 9')
  })
})

describe('useSlideBoxNav', () => {
  beforeAll(() => {
    // @ts-ignore
    global.window.innerWidth = 800
  })

  it('Edge cases', () => {
    const { getByText, getByTestId } = render(
      <Test {...{ ...props, onSlideChange: undefined, arrowSizeOverride: undefined }} />
    )

    //Slide Change (used in useEffect)
    fireEvent.click(getByText('Slide Change Wrapper'))
    expect(getByTestId('slideInView').innerHTML).toEqual('slide 6')

    //Right arrow click
    fireEvent.click(getByText('Right Arrow Click'))
    expect(getByTestId('currentslide').innerHTML).toEqual('slide 7')

    //Default arrow size to lg
    expect(getByTestId('arrowSize').innerHTML).toEqual('lg')
  })

  it('Uncovered prop cases', () => {
    const { getByTestId } = render(
      <Test {...{ ...props, arrowPosition: 'top', arrowSizeOverride: undefined }} />
    )

    //Default arrow size to sm when arrowPosition top
    expect(getByTestId('arrowSize').innerHTML).toEqual('sm')
  })
})
