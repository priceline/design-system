/* istanbul ignore file */

import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

const FullHeightInView = styled(InView)`
  height: 100%;
`

const RenderInView = ({ children, onSlideChange, index, slideRef }) => {
  const slideVisible = (inView) => {
    if (inView) {
      const { offsetParent, offsetWidth } = slideRef?.current || {}
      const numSlides = Math.round(offsetParent?.offsetWidth / offsetWidth)
      onSlideChange(index, numSlides)
    }
  }
  return (
    <FullHeightInView threshold={0.01} data-testid={`render-in-view-${index}`} onChange={slideVisible}>
      {children}
    </FullHeightInView>
  )
}

RenderInView.propTypes = {
  onSlideChange: PropTypes.func,
  index: PropTypes.number,
}

export { RenderInView }
