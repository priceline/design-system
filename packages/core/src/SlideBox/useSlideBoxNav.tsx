import { useState } from 'react'

const useSlideBoxNav = ({
  onSlideChange,
  currentSlideOverride,
  arrowSizeOverride,
  arrowButtonVariation,
  arrowPosition,
  childArray,
  slideScrollNum,
}) => {
  const [currentSlide, setCurrentSlide] = useState(currentSlideOverride || 0)
  const [slideInView, setSlideInView] = useState(currentSlideOverride || 0)
  const [numSlides, setNumSlides] = useState(0)

  const checkSlideBounds = (index) =>
    index < numSlides - 1 ? numSlides - 1 : index > childArray.length - 1 ? childArray.length - 1 : index

  const navigateToSlide = (index) => {
    const newIndex = checkSlideBounds(index)
    if (newIndex === currentSlide) {
      //edge case when flinging around slides
      new Promise<void>((resolve) => {
        setCurrentSlide(slideInView)
        resolve()
      })
        .then(() => {
          setSlideInView(newIndex)
          setCurrentSlide(newIndex)
        })
        .catch(() => {})
    } else {
      setCurrentSlide(newIndex)
    }
  }

  const onSlideChangeWrapper = (index, slideCount) => {
    new Promise<void>((resolve) => {
      setNumSlides(slideCount)
      resolve()
    })
      .then(() => {
        const isRightSlide = slideInView < index + numSlides
        const newIndex = checkSlideBounds(isRightSlide ? index : index + numSlides - 1)
        setSlideInView(newIndex)
        onSlideChange?.(newIndex)
      })
      .catch(() => {})
  }

  return {
    setCurrentSlide,
    currentSlide,
    onSlideChangeWrapper,
    arrowProps: {
      leftDisabled: slideInView - numSlides === -1,
      rightDisabled: slideInView === childArray.length - 1,
      arrowButtonVariation,
      arrowPosition,
      size: arrowSizeOverride || arrowPosition === 'side' ? 'lg' : 'sm',
      leftArrowClick: () => {
        navigateToSlide(slideInView - slideScrollNum)
      },
      rightArrowClick: () => {
        navigateToSlide(slideInView + slideScrollNum)
      },
    },
  }
}

export { useSlideBoxNav }
