import { themeGet } from '@styled-system/theme-get'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Box, BoxProps } from '../Box/Box'
import { PaletteColor } from '../theme/theme'
import { applyVariations, colorScheme, getPaletteColor } from '../utils/utils'

const arrowShadow = (props) => {
  return props.top
    ? {
        'box-shadow': '-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)',
      }
    : {
        'box-shadow': '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)',
      }
}

const arrowAlign = (props) => {
  return props.left
    ? { left: '16px', 'margin-left': props.top ? 0 : '15px' }
    : props.center
    ? { left: '50%', 'margin-left': props.top ? '-7px' : '7px' }
    : { right: '16px', 'margin-right': props.top ? '5px' : '-10px' }
}

const arrowPosition = (props) => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
        bottom: '-10px',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
        top: '0',
      }
}

const arrow = (props) => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
      }
}

const tooltipPosition = (props) => {
  return props.top ? { bottom: '-8px' } : { top: 0 }
}

const tooltipAlign = (props) => {
  return props.right
    ? { right: 0 }
    : props.center
    ? { left: '50%', width: 'auto', transform: 'translateX(-50%)' }
    : null
}

const TooltipContent = styled(Box)`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  position: absolute;
  box-sizing: border-box;
  background: ${(props) => getPaletteColor(props.bg || props.color, 'base')(props)};
  text-align: center;

  ${tooltipPosition} ${tooltipAlign} &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => getPaletteColor(props.bg || props.color, 'base')(props)}
      ${(props) => getPaletteColor(props.bg || props.color, 'base')(props)};

    ${arrow} ${arrowPosition} ${arrowAlign} ${arrowShadow};
    ${(props) => {
      const colorScheme = themeGet(`colorSchemes.${props.colorScheme}`)(props)
      return colorScheme
        ? `
        color: ${colorScheme.background};
        border-color: ${colorScheme.background};
      `
        : ''
    }}
  }

  ${colorScheme}

  ${applyVariations('Tooltip')}
`

/**
 * @public
 */
export type TooltipProps = BoxProps & {
  bg?: PaletteColor
  bottom?: boolean
  center?: boolean
  children?: React.ReactNode
  color?: PaletteColor
  left?: boolean
  position?: string
  right?: boolean
  top?: boolean
  zIndex?: number | string
}

function _Tooltip({
  borderRadius = 'md',
  children,
  color = 'background.lightest',
  position = 'bottom',
  zIndex = 'auto',
  ...props
}: TooltipProps): React.ReactElement {
  return (
    <div style={{ position: 'relative', zIndex: zIndex }}>
      <TooltipContent
        borderRadius={borderRadius}
        boxShadowSize='md'
        color={color}
        mb={3}
        mt={2}
        p={2}
        position={position}
        zIndex={zIndex}
        {...props}
      >
        {children}
      </TooltipContent>
    </div>
  )
}

/**
 * @public
 */
export const Tooltip = withTheme(_Tooltip)
