import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import { CarouselWrapper } from './Carousel.styles'

export const Carousel = ({ children, visibleSlides }) => {
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
          {children.map((item, index) => {
            return <Slide index={index}>{item}</Slide>
          })}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  visibleSlides: PropTypes.number,
}
