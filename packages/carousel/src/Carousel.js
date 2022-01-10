import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'

import { layoutToFlexWidths } from './layoutToFlexWidths'
import { CarouselWrapper } from './Carousel.styles'

const getSlideKey = moize(uuidv4)

export const Carousel = ({
  children,
  showDots = false,
  showForwardBackBtns = false,
  layout,
  infinite = false,
  naturalSlideHeight,
  step = 1,
  isIntrinsicHeight = true,
  lockOnWindowScroll = true,
  orientation = 'horizontal',
  naturalSlideWidth = 100,
  visibleSlides = 1,
}) => {
  const widths = layoutToFlexWidths(layout, children.length)
  const layoutSize = layout?.split('-').length

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={children.length}
        visibleSlides={layoutSize || visibleSlides}
        dragEnabled
        isIntrinsicHeight={isIntrinsicHeight}
        step={layoutSize || step}
        dragStep={layoutSize || step}
        lockOnWindowScroll={lockOnWindowScroll}
        orientation={orientation}
        infinite={infinite}
      >
        <Slider>
          {React.Children.map(children, (item, index) => {
            return (
              // We only need to manually set width of Slide if using the `layout` prop
              <Slide
                index={index}
                key={getSlideKey(item)}
                style={widths[index] && { width: widths[index] }}
                data-testid={`slide-${index}`}
              >
                {item}
              </Slide>
            )
          })}
        </Slider>
        {showForwardBackBtns && (
          <>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </>
        )}
        {showDots && <DotGroup />}
      </CarouselProvider>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Number of slides to display at once. If using `layout`,
   * this will be overridden by the number of items in the layout.
   * E.g. `layout={'25-50-25'}` will result in 3 slides shown per page. */
  visibleSlides: PropTypes.number,
  /** Show clickable navigation dots */
  showDots: PropTypes.bool,
  /** Show forward/back navigation buttons */
  showForwardBackBtns: PropTypes.bool,
  /** Percent width for each of the first N slides to use as a layout. Remaining slides will be divided
   * into pages with the same number of items as the "layout" page. Not compatible with vertical orientation. */
  layout: PropTypes.oneOf(['25-25-25-25', '33-33-33', '50-50', '40-60', '60-40', '25-75', '75-25']),
  /** When set to true, scrolling of the carousel slides are disabled while the browser window is scrolling */
  lockOnWindowScroll: PropTypes.bool,
  /** The natural height of each <Slide /> component */
  naturalSlideHeight: PropTypes.number,
  /** The natural width of each <Slide /> component */
  naturalSlideWidth: PropTypes.number,
  /** Possible values are "horizontal" and "vertical". Lets you have a horizontal or vertical carousel.
   * Not compatible with `layout`. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The number of slides to move when pressing the <ButtonBack /> and <ButtonNext /> buttons.
   * When using `layout`, this will be overridden with the number of items in the layout value. */
  step: PropTypes.number,
  /** Should the carousel continue or stop at the beginning or end of the slides */
  infinite: PropTypes.bool,
  /** Disables the enforced height ratio, and instead uses the intrinsic height of the slides.
   * This option can only be active in horizontalorientation, it will throw an error in vertical orientation. */
  isIntrinsicHeight: PropTypes.bool,

  arrowsPosition: PropTypes.oneOf(['']), // todo
}
