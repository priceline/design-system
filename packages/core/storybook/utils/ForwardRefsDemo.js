import React, { useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * This is a demo component for Storybook that provides a ref to content using a render prop
 */
export default function ForwardRefsDemo({ refChild }) {
  const dsRef = useRef(null)

  return <>{refChild(dsRef)}</>
}

ForwardRefsDemo.propTypes = {
  /**
   * Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>
   */
  refChild: PropTypes.node
}
