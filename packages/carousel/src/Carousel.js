import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'

import { CarouselWrapper } from './Carousel.styles'

const getSlideKey = moize(uuidv4)

export const Carousel = ({
  children,
  visibleSlides = 1,
  showDots,
  showForwardBackBtns,
}) => {
  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={children.length}
        visibleSlides={visibleSlides}
        dragEnabled={false}
      >
        <Slider>
          {React.Children.map(children, (item, index) => {
            return (
              <Slide index={index} key={getSlideKey(item)}>
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
  visibleSlides: PropTypes.number,
  showDots: PropTypes.bool,
  showForwardBackBtns: PropTypes.bool,
}
