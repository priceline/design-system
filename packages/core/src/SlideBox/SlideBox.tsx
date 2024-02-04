import React, { useEffect, useRef } from 'react'
import { type ArrowPosition } from './Arrow'
import { BottomArrows } from './BottomArrows'
import { Slide } from './Slide'
import { ScrollFlex } from './SlideBox.styled'
import { SlideBoxWrapper } from './SlideBoxWrapper'
import { TopArrows } from './TopArrows'
import { getCustomWidths, getVisibleSlides } from './helpers'
import { useSlideBoxNav } from './useSlideBoxNav'

/**
 * @public
 */
export type SlideBoxProps = {
  children?: React.ReactNode
  visibleSlides?: Array<number> | number
  onSlideChange?: (unknown) => unknown
  slideSpacing?: number
  stretchHeight?: boolean
  layout?: string
  currentSlideOverride?: number
  arrowSizeOverride?: string
  arrowButtonVariation?: 'fill' | 'link' | 'outline' | 'plain' | 'subtle' | 'white' | 'lightFill' | 'input'
  arrowPosition?: ArrowPosition
  slideScrollNum?: number
  mobileSlideScrollNum?: number
  overflowAllowancePxX?: number
  overflowAllowancePxY?: number
  overflowAllowancePxTop?: number
}

/**
 * @public
 */
export function SlideBox({
  children,
  visibleSlides,
  onSlideChange,
  slideSpacing,
  stretchHeight,
  layout,
  currentSlideOverride,
  arrowSizeOverride,
  arrowButtonVariation = 'white',
  arrowPosition = 'hide',
  slideScrollNum = 2,
  mobileSlideScrollNum = 1,
  overflowAllowancePxX = 0,
  overflowAllowancePxY = 4,
  overflowAllowancePxTop,
}: SlideBoxProps): JSX.Element {
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
    <SlideBoxWrapper arrowPosition={arrowPosition}>
      <TopArrows arrowProps={arrowProps} arrowPosition={arrowPosition} />
      <ScrollFlex
        data-testid='slide-box'
        ref={ref}
        pt={`${overflowAllowancePxTop || overflowAllowancePxY}px`}
        mt={`-${overflowAllowancePxTop || overflowAllowancePxY}px`}
        pb={`${overflowAllowancePxY}px`}
        mb={`-${overflowAllowancePxY}px`}
        px={`${overflowAllowancePxX}px`}
        mx={`-${overflowAllowancePxX}px`}
      >
        {childArray.map((item: string & React.JSX.Element, index: number) => (
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
            overflowAllowancePxX={overflowAllowancePxX}
          />
        ))}
      </ScrollFlex>
      <BottomArrows arrowProps={arrowProps} arrowPosition={arrowPosition} />
    </SlideBoxWrapper>
  )
}
