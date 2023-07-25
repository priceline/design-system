import { useState } from 'react'

const useSlideBoxNav = ({
  onSlideChange,
  currentSlideOverride,
  arrowSizeOverride,
  arrowButtonVariation,
  arrowPosition,
  childArray,
  slideScrollNum,
  mobileSlideScrollNum,
}) => {
  const [currentSlide, setCurrentSlide] = useState(currentSlideOverride || 0)
  const [slideInView, setSlideInView] = useState(currentSlideOverride || 0)
  const [numSlides, setNumSlides] = useState(mobileSlideScrollNum)

  const checkSlideBounds = (index, slideCount = numSlides) =>
    index < slideCount - 1
      ? slideCount - 1 //Slide 0 to numSlide visible
      : index > childArray.length - 1
      ? childArray.length - 1 //Last Slide
      : index

  const navigateToSlide = (index) => {
    let newIndex = checkSlideBounds(index)
    //Edge case when flinging slides around, only seems to happen when scrolling left
    /* istanbul ignore next */
    if (newIndex === currentSlide) {
      newIndex--
    }
    setCurrentSlide(newIndex)
  }

  const onSlideChangeWrapper = (index, slideCount) => {
    const isRightSlide = slideInView < index + numSlides
    const newIndex = checkSlideBounds(isRightSlide ? index : index + numSlides - 1, slideCount)
    setNumSlides(slideCount)
    setSlideInView(newIndex)
    onSlideChange?.(newIndex)
  }

  const getSlideScrollNum = () =>
    typeof window === 'undefined'
      ? /* istanbul ignore next */ mobileSlideScrollNum
      : window.innerWidth < 1024
      ? mobileSlideScrollNum
      : slideScrollNum

  return {
    setCurrentSlide,
    currentSlide,
    slideInView,
    onSlideChangeWrapper,
    arrowProps: {
      leftDisabled: slideInView - numSlides === -1,
      rightDisabled: slideInView === childArray.length - 1,
      arrowButtonVariation,
      arrowPosition,
      size: arrowSizeOverride || arrowPosition === 'side' ? 'lg' : 'sm',
      leftArrowClick: () => {
        navigateToSlide(slideInView - getSlideScrollNum())
      },
      rightArrowClick: () => {
        navigateToSlide(slideInView + getSlideScrollNum())
      },
    },
  }
}

export { useSlideBoxNav }
