/* istanbul ignore file */

import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

const FullHeightInView = styled(InView)`
  height: 100%;
`

const RenderInView = ({ children, onSlideChange, index }) => {
  const slideVisible = (inView) => {
    if (inView) {
      onSlideChange(index)
    }
  }
  return (
    <FullHeightInView data-testid={`render-in-view-${index}`} onChange={slideVisible}>
      {children}
    </FullHeightInView>
  )
}

RenderInView.propTypes = {
  onSlideChange: PropTypes.func,
  index: PropTypes.number,
}

export { RenderInView }
