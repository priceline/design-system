import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '..'

const sizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const paddings = {
  sm: 3,
  md: [3, null, 4],
  lg: [3, null, 4],
  xl: [3, null, 4],
}

const propTypes = {
  maxWidth: PropTypes.number,
  // Set the max width and padding of the container. Do not use with maxWidth prop.
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

const Container: React.FC<InferProps<typeof propTypes>> = styled(Box).attrs((props) => {
  if (props.size) {
    const px = paddings[props.size]
    const maxWidth = props.size ? `${sizes[props.size]}px` : props.maxWidth
    return { px, maxWidth }
  } else {
    return props.maxWidth ? { maxWidth: `${props.maxWidth}px` } : { maxWidth: props.theme.maxContainerWidth }
  }
})`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

Container.propTypes = propTypes

Container.displayName = 'Container'

export { Container }
