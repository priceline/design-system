import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { getVisibleSlides, getCustomWidths } from './helpers'
import { ScrollFlex } from './SlideBox.styled'
import { Slide } from './Slide'
import { SlideBoxWrapper } from './SlideBoxWrapper'
import { TopArrows } from './TopArrows'
import { BottomArrows } from './BottomArrows'
import { useSlideBoxNav } from './useSlideBoxNav'

export interface ISlideBoxProps {
  children?: React.ReactNode | string
  visibleSlides?: Array<number> | number
  onSlideChange?: (unknown) => unknown
  slideSpacing?: number
  stretchHeight?: boolean
  layout?: string
  currentSlideOverride?: number
  arrowSizeOverride?: string
  arrowButtonVariation?: 'fill' | 'link' | 'outline' | 'plain' | 'subtle' | 'white' | 'lightFill' | 'input'
  arrowPosition?: 'top' | 'bottom' | 'side' | 'hide'
  slideScrollNum?: number
  mobileSlideScrollNum?: number
}

const SlideBox: React.FC<ISlideBoxProps> = ({
  children,
  visibleSlides,
  onSlideChange,
  slideSpacing,
  stretchHeight,
  layout,
  currentSlideOverride,
  arrowSizeOverride,
  arrowButtonVariation = 'white',
  arrowPosition = 'side',
  slideScrollNum = 2,
  mobileSlideScrollNum = 1,
}) => {
  const childArray = React.Children.toArray(children)
  const ref = useRef()
  const { setCurrentSlide, currentSlide, onSlideChangeWrapper, arrowProps } = useSlideBoxNav({
    onSlideChange,
    currentSlideOverride,
    arrowSizeOverride,
    arrowButtonVariation,
    arrowPosition,
    childArray,
    slideScrollNum,
    mobileSlideScrollNum,
  })

  useEffect(() => {
    setCurrentSlide(currentSlideOverride)
  }, [currentSlideOverride])

  return (
    <SlideBoxWrapper alignItems='center' arrowPosition={arrowPosition}>
      <TopArrows arrowProps={arrowProps} arrowPosition={arrowPosition} />
      <ScrollFlex width='100%' py={2} data-testid='slide-box' ref={ref}>
        {childArray.map((item: PropTypes.node, index: number) => (
          <Slide
            key={item.props.key || `slide${index}`}
            width={layout ? getCustomWidths(layout.split('-'), index) : getVisibleSlides(visibleSlides)}
            onSlideChange={onSlideChangeWrapper}
            slideSpacing={slideSpacing}
            stretchHeight={stretchHeight}
            index={index}
            content={item}
            isCurrentSlide={currentSlide === index}
            numSlides={childArray.length}
            slideBoxRef={ref}
          />
        ))}
      </ScrollFlex>
      <BottomArrows arrowProps={arrowProps} arrowPosition={arrowPosition} />
    </SlideBoxWrapper>
  )
}

//SlideBox props
SlideBox.propTypes = {
  children: PropTypes.node,
  visibleSlides: PropTypes.oneOf([PropTypes.array, PropTypes.humber]),
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  layout: PropTypes.string,
  currentSlideOverride: PropTypes.number,
  arrowSizeOverride: PropTypes.string,
  arrowButtonVariation: PropTypes.string,
  arrowPosition: PropTypes.oneOf(['top', 'bottom', 'side', 'hide', undefined]),
  slideScrollNum: PropTypes.num,
  mobileSlideScrollNum: PropTypes.num,
}

export { SlideBox }
