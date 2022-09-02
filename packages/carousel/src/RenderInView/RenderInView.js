import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { Hide } from 'pcln-design-system'

const RenderInView = ({ children, onSlideChange, index }) => {
  const slideVisible = (inView) => {
    if (inView) {
      onSlideChange(index)
    }
  }
  return (
    <>
      <Hide md lg xl xxl>
        <InView onChange={slideVisible}>{children}</InView>
      </Hide>
      <Hide xs sm>
        {children}
      </Hide>
    </>
  )
}

RenderInView.propTypes = {
  onSlideChange: PropTypes.func,
  index: PropTypes.number,
}

export { RenderInView }
