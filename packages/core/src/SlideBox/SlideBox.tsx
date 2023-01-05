import React, { useEffect, useState, useRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { getVisibleSlides, getCustomWidths } from './helpers'
import { ScrollFlex } from './styles'
import { Slide } from './Slide'

const propTypes = {
  children: PropTypes.node,
  visibleSlides: PropTypes.any,
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  layout: PropTypes.string,
  currentSlideOverride: PropTypes.number,
}

const SlideBox: React.FC<InferProps<typeof propTypes>> = ({
  children,
  visibleSlides,
  onSlideChange,
  slideSpacing,
  stretchHeight,
  layout,
  currentSlideOverride,
}) => {
  const [currentSlide, setCurrentSlide] = useState()
  const ref = useRef()

  useEffect(() => {
    setCurrentSlide(currentSlideOverride)
  }, [currentSlideOverride])

  return (
    <ScrollFlex width='100%' py={2} data-testid='slide-box' ref={ref}>
      {React.Children.toArray(children).map((item: PropTypes.node, index: number) => (
        <Slide
          key={item.props.key || `slide${index}`}
          width={layout ? getCustomWidths(layout.split('-'), index) : getVisibleSlides(visibleSlides)}
          onSlideChange={onSlideChange}
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
  )
}

export { SlideBox }
