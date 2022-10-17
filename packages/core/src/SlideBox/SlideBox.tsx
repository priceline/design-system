/* istanbul ignore file */

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '..'
import { RenderInView } from './RenderInView'
import { getVisibleSlides, getCustomWidths } from './helpers'
import { ScrollFlex } from './styles'

const propTypes = {
  children: PropTypes.any,
  visibleSlides: PropTypes.any,
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  layout: PropTypes.string,
}

const SlideBox: React.FC<InferProps<typeof propTypes>> = ({
  children,
  visibleSlides,
  onSlideChange,
  slideSpacing,
  stretchHeight,
  layout,
}) => (
  <ScrollFlex width='100%' py={2}>
    {React.Children.toArray(children).map((item, index) => (
      <Box
        key={`slide${index}`}
        width={layout ? getCustomWidths(layout?.split('-'), index) : getVisibleSlides(visibleSlides)}
      >
        <RenderInView onSlideChange={onSlideChange} index={index}>
          <Box
            height='100%'
            pl={index === 0 ? 2 : 0}
            pr={index === children.length - 1 ? 2 : 0}
            ml={index === 0 ? 0 : slideSpacing}
            mr={index === children.length - 1 ? 0 : slideSpacing}
          >
            {stretchHeight ? React.cloneElement(item, { style: { 'min-height': '100%' } }) : item}
          </Box>
        </RenderInView>
      </Box>
    ))}
  </ScrollFlex>
)

export { SlideBox }
