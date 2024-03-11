import styled from 'styled-components'
import { Flex } from '../Flex/Flex'
import { theme } from '../theme'
import { motion } from 'framer-motion'
import React from 'react'
import { Absolute } from '../Absolute/Absolute'
import { getPaletteColor } from '../utils'
import { Box } from '../Box/Box'
import { IconButton } from '../IconButton/IconButton'

const Component = React.forwardRef((props, ref: React.MutableRefObject<HTMLDivElement>) => (
  <Box {...props} ref={ref} />
))

const AnimatedAbsolute = motion(Component)

const getBorderRadiusStyles = (placement, isFloating) => {
  const themeRadius = theme.borderRadii['2xl']
  if (isFloating) {
    return themeRadius
  }
  switch (placement) {
    case 'top':
      return `0px 0px ${themeRadius} ${themeRadius}`
    case 'right':
      return `${themeRadius} 0px 0px  ${themeRadius}`
    case 'bottom':
      return `${themeRadius} ${themeRadius} 0px 0px`
    case 'left':
      return `0px ${themeRadius} ${themeRadius} 0px`
  }
}
export type PlacementOptions = 'top' | 'bottom' | 'right' | 'left'
const positions: Record<PlacementOptions, string> = {
  top: `top:0; left:0; right:0;`,
  right: `right: 0; bottom:0;`,
  bottom: `bottom:0; left:0; right:0;`,
  left: `left:0;bottom:0;`,
}
const getPlacementStyles = (placement) =>
  placement ? `margin-inline:auto; margin-block:auto; ${positions[placement]};` : ``
export const DrawerWrapper = styled(Absolute)`
  ${({ placement }) =>
    `
    ${getPlacementStyles(placement)}
    `}
`
export const DrawerRoot = styled(AnimatedAbsolute)`
  background-color: ${getPaletteColor('background.lightest')};
  ${({ theme, placement, isFloating }) =>
    `box-shadow: ${theme.shadows['overlay-md']};
    border-radius: ${getBorderRadiusStyles(placement, isFloating)};
    `}
`
export const HeadingWrapper = styled(Flex)``

export const HeaderButton = styled(IconButton)`
  background-color: ${getPaletteColor('background.lightest')};
  color: ${getPaletteColor('text.dark')};
  padding: 0;

  &:hover {
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.dark')};
  }
`
