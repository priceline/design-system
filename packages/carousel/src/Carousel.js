import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slide } from 'pure-react-carousel'
import { layoutToFlexWidths } from './layoutToFlexWidths'
import { CarouselWrapper } from './Carousel.styles'
import { Flex, Relative, Box } from 'pcln-design-system'
import { Dots } from './Dots'
import { ArrowButton } from './ArrowButton'
import { Slider } from './Slider'
import { getSlideKey, getVisibleSlidesArray, useResponsiveVisibleSlides } from './helpers'

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
  buttonColorProps,
}) => {
  const widths = layoutToFlexWidths(layout, children.length)
  const layoutSize = layout?.split('-').length
  const visibleSlidesArray = getVisibleSlidesArray(visibleSlides)
  const responsiveVisibleSlides = useResponsiveVisibleSlides(visibleSlidesArray)

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
        {arrowsPosition === 'top' ? (
          <Flex justifyContent='flex-end' mb={2} mr={slideSpacing}>
            <ArrowButton type='prev' position='top' setPosition={arrowsPosition} {...buttonColorProps} />
            <ArrowButton
              type='next'
              position='top'
              ml={3}
              setPosition={arrowsPosition}
              {...buttonColorProps}
            />
          </Flex>
        ) : null}
        <Relative>
          <ArrowButton
            pl={slideSpacing}
            ml='-30px'
            type='prev'
            position='side'
            setPosition={arrowsPosition}
            {...buttonColorProps}
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
            mr='-30px'
            pr={slideSpacing}
            type='next'
            position='side'
            setPosition={arrowsPosition}
            {...buttonColorProps}
          />
        </Relative>
        {arrowsPosition === 'bottom' || showDots ? (
          <Flex alignItems='center' justifyContent='center' pt={2}>
            <ArrowButton
              mr={3}
              type='prev'
              position='bottom'
              setPosition={arrowsPosition}
              {...buttonColorProps}
            />
            {showDots && <Dots />}
            <ArrowButton
              ml={3}
              type='next'
              position='bottom'
              setPosition={arrowsPosition}
              {...buttonColorProps}
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
  /** Option to specify arrow button colors based on color.shade palette color */
  buttonColorProps: PropTypes.shape({
    buttonBackground: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonHoverBackground: PropTypes.string,
    buttonHoverColor: PropTypes.string,
  }),
}
