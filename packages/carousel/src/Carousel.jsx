import React, { useState, useContext, useEffect, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slide, CarouselContext, Slider } from 'pure-react-carousel'
import { layoutToFlexWidths } from './layoutToFlexWidths'
import { CarouselWrapper, RelativeFlex } from './Carousel.styles'
import { Flex, Relative, Box, SlideBox } from 'pcln-design-system'
import { Dots } from './Dots'
import { ArrowButton } from './ArrowButton'
import {
  getSlideKey,
  getVisibleSlidesArray,
  useResponsiveVisibleSlides,
  getMobileVisibleSlides,
} from './helpers'
import { RenderInView } from './RenderInView'
import { CAROUSEL_BREAKPOINT_1, ARROW_MARGIN, ARROW_JUSTIFY_CONTENT } from './constants'

const ChangeDetector = ({ onSlideChange, numVisibleSlides }) => {
  const carouselContext = useContext(CarouselContext)
  // eslint-disable-next-line no-unused-vars
  const [_currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)

  useEffect(() => {
    function onChange() {
      const slideNum = Math.floor(carouselContext.state.currentSlide + numVisibleSlides - 1)
      setCurrentSlide(slideNum)

      if (typeof onSlideChange === 'function') {
        onSlideChange(slideNum)
      }
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext, onSlideChange, numVisibleSlides])

  return null
}
ChangeDetector.propTypes = {
  onSlideChange: PropTypes.func,
}

export const Carousel = ({
  children,
  showDots = false,
  layout,
  infinite = false,
  naturalSlideHeight,
  step = 1,
  isIntrinsicHeight = true,
  lockOnWindowScroll = true,
  orientation = 'horizontal',
  naturalSlideWidth = 100,
  visibleSlides = 1,
  arrowsPosition = 'side',
  slideSpacing = 2,
  onSlideChange,
  sideButtonMargin = '-30px',
  sidePositionArrowButton,
  stretchSlideHeight = true,
  currentSlide = 0,
  onSlideClick = () => {},
  onSlideKeyDown = () => {},
  mobileVisibleSlides,
  displayArrowsMobile,
  buttonSize = '60px',
  showArrowsOnHover = false,
  nodeBesideArrowsLeft,
  nodeBesideArrowsRight,
  arrowsAlignment = 'center',
  overflowAllowancePxX = 0,
  overflowAllowancePxY = 0,
  overflowAllowancePxTop = 0,
  maxHeight,
  arrowButtonZIndex,
}) => {
  const widths = layoutToFlexWidths(layout, children.length)
  const layoutSize = layout?.split('-').length
  const visibleSlidesArray = getVisibleSlidesArray(visibleSlides)
  const { responsiveVisibleSlides, browserWidth } = useResponsiveVisibleSlides(visibleSlidesArray)
  const overflowAdjust = overflowAllowancePxTop
    ? (overflowAllowancePxTop + overflowAllowancePxY) / 2
    : overflowAllowancePxY

  if (!displayArrowsMobile && browserWidth < CAROUSEL_BREAKPOINT_1) {
    return (
      <SlideBox
        slideSpacing={slideSpacing}
        stretchHeight={stretchSlideHeight}
        layout={layout}
        onSlideChange={onSlideChange}
        visibleSlides={mobileVisibleSlides || getMobileVisibleSlides(visibleSlides)}
        currentSlideOverride={currentSlide}
        overflowAllowancePxX={overflowAllowancePxX}
        overflowAllowancePxY={overflowAllowancePxY}
        overflowAllowancePxTop={overflowAllowancePxTop}
      >
        {React.Children.map(children, (item) => item)}
      </SlideBox>
    )
  }

  return (
    <CarouselWrapper
      overflowAllowancePxX={overflowAllowancePxX}
      overflowAllowancePxY={overflowAllowancePxY}
      overflowAllowancePxTop={overflowAllowancePxTop}
      maxHeight={maxHeight}
    >
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={children.length}
        visibleSlides={layoutSize || responsiveVisibleSlides}
        dragEnabled={children.length > (layoutSize || responsiveVisibleSlides)}
        isIntrinsicHeight={isIntrinsicHeight}
        step={layoutSize || step}
        dragStep={layoutSize || step}
        lockOnWindowScroll={lockOnWindowScroll}
        orientation={orientation}
        infinite={infinite}
        currentSlide={currentSlide}
      >
        <ChangeDetector
          onSlideChange={onSlideChange}
          numVisibleSlides={layoutSize || responsiveVisibleSlides}
        />
        {arrowsPosition === 'top' ? (
          <Flex justifyContent='flex-end' alignItems='center' mb={2} mr={slideSpacing}>
            {nodeBesideArrowsLeft ? (
              <Box ml={2} mr='auto'>
                {nodeBesideArrowsLeft}
              </Box>
            ) : null}
            <ArrowButton type='prev' position='top' setPosition={arrowsPosition} buttonSize={buttonSize} />
            <ArrowButton
              type='next'
              position='top'
              ml={3}
              setPosition={arrowsPosition}
              buttonSize={buttonSize}
            />
          </Flex>
        ) : null}
        <Relative>
          {sidePositionArrowButton ? (
            cloneElement(sidePositionArrowButton, {
              ml: sideButtonMargin,
              pl: slideSpacing,
              type: 'prev',
              position: 'side',
              setPosition: arrowsPosition,
              showArrowsOnHover,
            })
          ) : (
            <ArrowButton
              overflowAdjust={overflowAdjust}
              ml={sideButtonMargin}
              pl={slideSpacing}
              type='prev'
              position='side'
              setPosition={arrowsPosition}
              buttonSize={buttonSize}
              showArrowsOnHover={showArrowsOnHover}
            />
          )}
          <Slider>
            {React.Children.map(children, (item, index) => {
              return (
                // We only need to manually set width of Slide if using the `layout` prop
                <Slide
                  index={index}
                  key={getSlideKey(item)}
                  style={widths[index] && { width: widths[index] }}
                  data-testid={`slide-${index}`}
                  onClick={(e) => {
                    onSlideClick(index, e)
                  }}
                  onKeyDown={(e) => {
                    onSlideKeyDown(index, e)
                  }}
                >
                  <RenderInView
                    index={index}
                    onSlideChange={onSlideChange}
                    displayArrowsMobile={displayArrowsMobile}
                  >
                    <Box p={slideSpacing} height='100%'>
                      {!layout && stretchSlideHeight
                        ? React.cloneElement(item, { style: { 'min-height': '100%' } })
                        : item}
                    </Box>
                  </RenderInView>
                </Slide>
              )
            })}
          </Slider>
          {sidePositionArrowButton ? (
            cloneElement(sidePositionArrowButton, {
              mr: sideButtonMargin,
              pr: slideSpacing,
              type: 'next',
              position: 'side',
              setPosition: arrowsPosition,
              showArrowsOnHover,
            })
          ) : (
            <ArrowButton
              overflowAdjust={overflowAdjust}
              mr={sideButtonMargin}
              pr={slideSpacing}
              type='next'
              position='side'
              setPosition={arrowsPosition}
              buttonSize={buttonSize}
              showArrowsOnHover={showArrowsOnHover}
            />
          )}
        </Relative>
        {arrowsPosition === 'bottom' || showDots ? (
          <RelativeFlex
            alignItems='center'
            justifyContent={ARROW_JUSTIFY_CONTENT[arrowsAlignment]}
            pt={2}
            zIndex={arrowButtonZIndex}
          >
            {nodeBesideArrowsLeft && arrowsAlignment === 'right' ? (
              <Box ml={2} mr='auto'>
                {nodeBesideArrowsLeft}
              </Box>
            ) : null}
            <ArrowButton
              mr={ARROW_MARGIN[arrowsAlignment]}
              type='prev'
              position='bottom'
              setPosition={arrowsPosition}
            />
            {showDots && <Dots />}
            <ArrowButton
              ml={ARROW_MARGIN[arrowsAlignment]}
              type='next'
              position='bottom'
              setPosition={arrowsPosition}
            />
            {nodeBesideArrowsRight && arrowsAlignment === 'left' ? (
              <Box mr={2} ml='auto'>
                {nodeBesideArrowsRight}
              </Box>
            ) : null}
          </RelativeFlex>
        ) : null}
      </CarouselProvider>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Number of slides to display at once. If using `layout`,
   * this will be overridden by the number of items in the layout.
   * Can also be sent as array to set responsive sizes:
   * [below 768px, below 1024px, above 1020px]
   * E.g. `layout={'25-50-25'}` will result in 3 slides shown per page.
   * Note: decimal values are accepted too E.g. `[1,2.5,3.2]`*/
  visibleSlides: PropTypes.any,
  /** Show clickable navigation dots */
  showDots: PropTypes.bool,
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
   * Not compatible with `layout`. Use vertical at own risk */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The number of slides to move when pressing the <ButtonBack /> and <ButtonNext /> buttons.
   * When using `layout`, this will be overridden with the number of items in the layout value. */
  step: PropTypes.number,
  /** Should the carousel continue or stop at the beginning or end of the slides */
  infinite: PropTypes.bool,
  /** Disables the enforced height ratio, and instead uses the intrinsic height of the slides.
   * This option can only be active in horizontalorientation, it will throw an error in vertical orientation. */
  isIntrinsicHeight: PropTypes.bool,
  /** Positioning for the navigation arrow buttons */
  arrowsPosition: PropTypes.oneOf(['side', 'top', 'bottom', 'hide']),
  /** Padding around the slides */
  slideSpacing: PropTypes.number,
  /** Custom arrow button margin for side position/horizontal orientation */
  sideButtonMargin: PropTypes.string,
  /** Called each time the current slide changes, passed the new currentSlide (zero-indexed) */
  onSlideChange: PropTypes.func,
  /** Custom styled arrow button component */
  sidePositionArrowButton: PropTypes.element,
  /** Set height of slides based on tallest slide */
  stretchSlideHeight: PropTypes.bool,
  /** Set the initial visible slide (starts with 0) */
  currentSlide: PropTypes.number,
  /** Custom onClick event handler for each Slide child */
  onSlideClick: PropTypes.func,
  /** Custom onKeyDown event handler for each Slide child */
  onSlideKeyDown: PropTypes.func,
  /** Allows extra breakpoints for mobile. Should eventually combine with VisibleSlides */
  mobileVisibleSlides: PropTypes.array,
  /** Use the desktop carousel for mobile */
  displayArrowsMobile: PropTypes.bool,
  /** Set the height and width of the forward and back buttons to this value, e.g. "30px" */
  buttonSize: PropTypes.string,
  /** When arrow position is side, hide arrows and shows when hovers on carousel */
  showArrowsOnHover: PropTypes.bool,
  /** Node that will display to the left of the arrows (available if arrows are top, bottom-right) */
  nodeBesideArrowsLeft: PropTypes.node,
  /** Node that will display to the left of the arrows (availalbe if arrows are bottom-left) */
  nodeBesideArrowsRight: PropTypes.node,
  /** String "left" or "right" or "center" (only available if arrowsPosition is set to "bottom") */
  arrowsAlignment: PropTypes.oneOf(['left', 'right', 'center']),
  /** Number of px to allow overflow on top and bottom of Carousel to display things like shadows */
  overflowAllowancePxY: PropTypes.number,
  /** Number of px to allow overflow on left and right to display things like shadows */
  overflowAllowancePxX: PropTypes.number,
  /** Number of px to allow oveflow on top (will override the overflowAllowancePxY value for top) */
  overflowAllowancePxTop: PropTypes.number,
  /** Number of px to set maxHeight to counteract large overflow values*/
  maxHeight: PropTypes.number,
  /** z-index for arrow buttons*/
  arrowButtonZIndex: PropTypes.number,
}
