import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slide, CarouselContext } from 'pure-react-carousel'
import { layoutToFlexWidths } from './layoutToFlexWidths'
import { CarouselWrapper } from './Carousel.styles'
import { Flex, Relative, Box } from 'pcln-design-system'
import { Dots } from './Dots'
import { ArrowButton } from './ArrowButton'
import { Slider } from './Slider'
import { getSlideKey, getVisibleSlidesArray, useResponsiveVisibleSlides } from './helpers'

const ChangeDetector = ({ onSlideChange }) => {
  const carouselContext = useContext(CarouselContext)
  // eslint-disable-next-line no-unused-vars
  const [_currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)

      if (typeof onSlideChange === 'function') {
        onSlideChange(carouselContext.state.currentSlide)
      }
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return null
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
  buttonStyles,
  isTwoColumnLayout = false,
}) => {
  const widths = layoutToFlexWidths(layout, children.length)
  const layoutSize = layout?.split('-').length
  const visibleSlidesArray = getVisibleSlidesArray(visibleSlides)
  const responsiveVisibleSlides = useResponsiveVisibleSlides(visibleSlidesArray, isTwoColumnLayout)

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={children.length}
        visibleSlides={layoutSize || responsiveVisibleSlides}
        dragEnabled
        isIntrinsicHeight={isIntrinsicHeight}
        step={layoutSize || step}
        dragStep={layoutSize || step}
        lockOnWindowScroll={lockOnWindowScroll}
        orientation={orientation}
        infinite={infinite}
      >
        <ChangeDetector onSlideChange={onSlideChange} />
        {arrowsPosition === 'top' ? (
          <Flex justifyContent='flex-end' mb={2} mr={slideSpacing}>
            <ArrowButton type='prev' position='top' setPosition={arrowsPosition} {...buttonStyles} />
            <ArrowButton type='next' position='top' ml={3} setPosition={arrowsPosition} {...buttonStyles} />
          </Flex>
        ) : null}
        <Relative>
          <ArrowButton
            pl={slideSpacing}
            ml={sideButtonMargin}
            type='prev'
            position='side'
            setPosition={arrowsPosition}
            {...buttonStyles}
          />
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
                  <Box p={slideSpacing}>{item}</Box>
                </Slide>
              )
            })}
          </Slider>
          <ArrowButton
            mr={sideButtonMargin}
            pr={slideSpacing}
            type='next'
            position='side'
            setPosition={arrowsPosition}
            {...buttonStyles}
          />
        </Relative>
        {arrowsPosition === 'bottom' || showDots ? (
          <Flex alignItems='center' justifyContent='center' pt={2}>
            <ArrowButton
              mr={3}
              type='prev'
              position='bottom'
              setPosition={arrowsPosition}
              {...buttonStyles}
            />
            {showDots && <Dots />}
            <ArrowButton
              ml={3}
              type='next'
              position='bottom'
              setPosition={arrowsPosition}
              {...buttonStyles}
            />
          </Flex>
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
   * E.g. `layout={'25-50-25'}` will result in 3 slides shown per page. */
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
  /** Custom button styles width, height, color based on color.shade palette color */
  buttonStyles: PropTypes.shape({
    buttonBackground: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonHoverBackground: PropTypes.string,
    buttonHoverColor: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string,
  }),
  /** Called each time the current slide changes, passed the new currentSlide (zero-indexed) */
  onSlideChange: PropTypes.func,
  /** When true, carousel does not span the entire width of parent container, rather it is adjacent to another element with width */
  isTwoColumnLayout: PropTypes.bool,
}
