import { motion } from 'motion/react'
import React from 'react'
import styled from 'styled-components'
import { Absolute } from '../Absolute/Absolute'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { IconButton } from '../IconButton/IconButton'
import { theme } from '../theme'
import { getPaletteColor } from '../utils'
import { PlacementOptions } from './Drawer'

const Component = React.forwardRef((props, ref: React.MutableRefObject<HTMLDivElement>) => (
  <Box {...props} ref={ref} />
))

const AnimatedComponent = motion.create(Component)

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

const positions: Record<PlacementOptions, string> = {
  top: `top:0; left:0; right:0;`,
  right: `right: 0; bottom:0;`,
  bottom: `bottom:0; left:0; right:0;`,
  left: `left:0;bottom:0;`,
}
const getPlacementStyles = (placement) =>
  placement ? `margin-inline:auto; margin-block:auto; ${positions[placement]};` : ``
export const DrawerWrapper = styled(Box)`
  ${({ placement, zIndex, position }) =>
    `
    position: ${position || 'absolute'};
    ${getPlacementStyles(placement)}
    ${getPlacementStyles(placement)}
    z-index: ${zIndex || theme.zIndices.modal};
    `}
`
export const DrawerRoot = styled(AnimatedComponent)`
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

/**
 * Data below is used for Drawer.stories.tsx
 */
export const Handle = styled.div`
  /* Handle */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;

  width: 48px;
  height: 8px;

  /* Background/Tint */
  background: #d5dce4;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 999px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`

export const HandleContainer = styled(Absolute)`
  /* Centers the handle wrt parent */
  transform: translateX(-50%);
  cursor: grab;
  left: 50%;
`

export const DrawerHandle = () => (
  <HandleContainer>
    <Handle />
  </HandleContainer>
)
