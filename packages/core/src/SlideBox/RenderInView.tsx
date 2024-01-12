/* istanbul ignore file */

import React from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

const FullHeightInView = styled(InView)`
  height: 100%;
`

export type RenderInViewProps = {
  children: React.ReactNode
  onSlideChange: (index: number, numSlides: number) => void
  index: number
  slideRef?: React.RefObject<HTMLElement>
}

export function RenderInView({ children, onSlideChange, index, slideRef }: RenderInViewProps): JSX.Element {
  const slideVisible = (inView) => {
    if (inView) {
      const { offsetParent, offsetWidth } = slideRef?.current || {}
      // @ts-ignore
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
