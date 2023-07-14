import React, { useEffect, useRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { getVisibleSlides, getCustomWidths } from './helpers'
import { ScrollFlex } from './styles'
import { Slide } from './Slide'
import { SlideBoxWrapper } from './SlideBoxWrapper'
import { TopArrows } from './TopArrows'
import { BottomArrows } from './BottomArrows'
import { useSlideBoxNav } from './useSlideBoxNav'

const propTypes = {
  children: PropTypes.node,
  visibleSlides: PropTypes.any,
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  layout: PropTypes.string,
  currentSlideOverride: PropTypes.number,
  arrowSizeOverride: PropTypes.string,
  arrowButtonVariation: PropTypes.string,
  arrowPosition: PropTypes.string,
  slideScrollNum: PropTypes.num,
  mobileSlideScrollNum: PropTypes.num,
}

const SlideBox: React.FC<InferProps<typeof propTypes>> = ({
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
            numSlides={children.length}
            slideBoxRef={ref}
          />
        ))}
      </ScrollFlex>
      <BottomArrows arrowProps={arrowProps} arrowPosition={arrowPosition} />
    </SlideBoxWrapper>
  )
}

export { SlideBox }
