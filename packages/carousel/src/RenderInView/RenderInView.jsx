import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { Hide } from 'pcln-design-system'
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
    <>
      <Hide md lg xl xxl height='100%'>
        <FullHeightInView onChange={slideVisible}>{children}</FullHeightInView>
      </Hide>
      <Hide xs sm height='100%'>
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
