import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { Flex } from '..'
import { Box } from '..'
import { RenderInView } from './RenderInView'

const StyledFlex = styled(Flex)`
  position: relative;
  overflow: auto;
  > * {
    flex-shrink: 0;
  }
`

const propTypes = {
  children: PropTypes.any,
  visibleSlides: PropTypes.any,
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  layout: PropTypes.string,
}

const getVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides) ? visibleSlides.map((slide) => 1 / slide) : 1 / visibleSlides

const SlideBox: React.FC<InferProps<typeof propTypes>> = ({
  children,
  visibleSlides,
  onSlideChange,
  slideSpacing,
  stretchHeight,
  layout,
}) => {
  const widths = layout?.split('-')
  const childrenArray = React.Children.toArray(children)
  return (
    <StyledFlex width='100%' py={2}>
      {childrenArray.map((item, index) => (
        <Box
          key={`slide${index}`}
          width={
            layout ? `${widths[(index + widths.length) % widths.length]}%` : getVisibleSlides(visibleSlides)
          }
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
    </StyledFlex>
  )
}

export { SlideBox }
