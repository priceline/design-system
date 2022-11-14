import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box } from '..'
import { RenderInView } from './RenderInView'
import { SlideWrapper } from './styles'

interface ISlideProps {
  onSlideChange: PropTypes.func
  slideSpacing: PropTypes.number
  stretchHeight: PropTypes.bool
  index: PropTypes.number
  content: PropTypes.node
  isCurrentSlide: PropTypes.bool
  width: PropTypes.any
  numSlides: PropTypes.number
}

const Slide: React.FC<ISlideProps> = ({
  onSlideChange,
  slideSpacing,
  stretchHeight,
  index,
  content,
  isCurrentSlide,
  width,
  numSlides,
}) => {
  const ref = useRef()

  useEffect(() => {
    if (isCurrentSlide === true) {
      /* istanbul ignore next */
      ref?.current?.scrollIntoView({ block: 'end' })
    }
  }, [isCurrentSlide])

  return (
    <SlideWrapper data-testid={`slide${index + 1}`} ref={ref} width={width}>
      <RenderInView onSlideChange={onSlideChange} index={index}>
        <Box
          height='100%'
          pl={index === 0 ? 2 : 0}
          pr={index === numSlides - 1 ? 2 : 0}
          ml={index === 0 ? 0 : slideSpacing}
          mr={index === numSlides - 1 ? 0 : slideSpacing}
        >
          {stretchHeight ? React.cloneElement(content, { style: { 'min-height': '100%' } }) : content}
        </Box>
      </RenderInView>
    </SlideWrapper>
  )
}

Slide.propTypes = {
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  index: PropTypes.number,
  content: PropTypes.node,
  isCurrentSlide: PropTypes.bool,
  width: PropTypes.any,
  numSlides: PropTypes.number,
}

export { Slide }
