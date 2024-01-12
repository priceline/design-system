import React, { useRef } from 'react'

/**
 * This is a demo component for Storybook that provides a ref to content using a render prop
 */
export default function ForwardRefsDemo({ refChild }) {
  const dsRef = useRef(null)

  return <>{refChild(dsRef)}</>
}
