import React, { useEffect, useRef } from 'react'
import { Box, type BoxProps } from '../Box/Box'
import { RenderInView } from './RenderInView'
import { SlideWrapper } from './SlideBox.styled'

export type SlideProps = BoxProps & {
  onSlideChange: (index: number, numSlides: number) => void
  slideSpacing: number
  stretchHeight: boolean
  index: number
  content?: React.JSX.Element
  isCurrentSlide: boolean
  numSlides: number
  slideBoxRef: React.RefObject<HTMLDivElement>
}

export function Slide({
  onSlideChange,
  slideSpacing,
  stretchHeight,
  index,
  content,
  isCurrentSlide,
  width,
  numSlides,
  slideBoxRef,
}: SlideProps): JSX.Element {
  const ref = useRef()

  useEffect(() => {
    /* istanbul ignore next */
    if (isCurrentSlide === true && typeof slideBoxRef?.current?.scroll === 'function' && ref?.current) {
      const { offsetLeft, offsetParent, offsetWidth } = ref.current
      const { offsetWidth: parentOffset } = offsetParent || {}
      slideBoxRef?.current?.scroll({ left: offsetLeft - parentOffset + offsetWidth })
    }
  }, [isCurrentSlide, ref])

  return (
    <SlideWrapper data-testid={`slide${index + 1}`} ref={ref} width={width}>
      <RenderInView onSlideChange={onSlideChange} index={index} slideRef={ref}>
        <Box
          height='100%'
          pl={index === 0 ? 2 : 0}
          pr={index === numSlides - 1 ? 2 : 0}
          ml={index === 0 ? 0 : slideSpacing}
          mr={index === numSlides - 1 ? 0 : slideSpacing}
        >
          {stretchHeight && React.isValidElement(content)
            ? React.cloneElement(content, { style: { 'min-height': '100%' } })
            : content}
        </Box>
      </RenderInView>
    </SlideWrapper>
  )
}
