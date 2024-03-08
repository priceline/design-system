import React from 'react'
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'
import { Hide } from 'pcln-design-system'
import styled from 'styled-components'

const FullHeightInView = styled(InView)`
  height: 100%;
`

const RenderInView = ({ children, onSlideChange, index, displayArrowsMobile }) => {
  const slideVisible = (inView) => {
    if (inView) {
      onSlideChange(index)
    }
  }
  return (
    <>
      {displayArrowsMobile === true ? (
        <Hide md lg xl xxl height='100%'>
          <FullHeightInView onChange={slideVisible}>{children}</FullHeightInView>
        </Hide>
      ) : null}
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
