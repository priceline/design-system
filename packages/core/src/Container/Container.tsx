import React from 'react'
import styled from 'styled-components'
import { Box, type BoxProps } from '../Box/Box'

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

/**
 * @public
 */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'

/**
 * @public
 */
export type ContainerProps = BoxProps & {
  children?: React.ReactNode
  maxWidth?: number
  size?: ContainerSize
}

/**
 * @public
 */
export const Container: React.FC<ContainerProps> = styled(Box).attrs((props) => {
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

Container.displayName = 'Container'
