import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const StretchSlide = ({ slideContents, height, setHeight }) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.clientHeight > height && setHeight(ref.current.clientHeight)
  }, [height, setHeight])

  return React.cloneElement(slideContents, {
    ref: ref,
    minHeight: height ? `${height}px` : undefined,
  })
}

StretchSlide.propTypes = {
  slideContents: PropTypes.node,
  height: PropTypes.number,
  setHeight: PropTypes.func,
}

export { StretchSlide }
