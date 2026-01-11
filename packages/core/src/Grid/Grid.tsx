import React from 'react'
import styled from 'styled-components'
import { FlexboxProps, GridProps as SSGridProps, system } from 'styled-system'
import { ComposedStyleFns, type ColorSchemeName, type IStyledSystemProps } from '../theme/theme'
import { colorScheme } from '../utils/utils'

/**
 * @public
 */
export interface GridProps extends IStyledSystemProps {
  children?: React.ReactNode
  gap?: SSGridProps['gridGap']
  rowGap?: SSGridProps['gridRowGap']
  columnGap?: SSGridProps['gridColumnGap']
  column?: SSGridProps['gridColumn']
  row?: SSGridProps['gridRow']
  area?: SSGridProps['gridArea']
  autoFlow?: SSGridProps['gridAutoFlow']
  autoRows?: SSGridProps['gridAutoRows']
  autoColumns?: SSGridProps['gridAutoColumns']
  templateRows?: SSGridProps['gridTemplateRows']
  templateColumns?: SSGridProps['gridTemplateColumns']
  templateAreas?: SSGridProps['gridTemplateAreas']
  placeItems?: FlexboxProps['alignItems']
  colorScheme?: ColorSchemeName
}

const GridStyleFns = system({
  gap: { property: 'gridGap', scale: 'space' },
  rowGap: { property: 'gridRowGap', scale: 'space' },
  columnGap: { property: 'gridColumnGap', scale: 'space' },
  column: { property: 'gridColumn' },
  row: { property: 'gridRow' },
  area: { property: 'gridArea' },
  autoFlow: { property: 'gridAutoFlow' },
  autoRows: { property: 'gridAutoRows' },
  autoColumns: { property: 'gridAutoColumns' },
  templateRows: { property: 'gridTemplateRows' },
  templateColumns: { property: 'gridTemplateColumns' },
  templateAreas: { property: 'gridTemplateAreas' },
  placeItems: { property: 'placeItems' },
})

const StyledGrid = styled.div<GridProps>`
  ${ComposedStyleFns}
  ${GridStyleFns}
  ${colorScheme}
  display: grid;
`

/**
 * A CSS Grid container for two-dimensional layouts.
 *
 * Extends `Box` with grid-specific props: `templateColumns`, `templateRows`,
 * `templateAreas`, `gap`, `placeItems`, and more. Use for complex layouts requiring
 * both row and column control. Supports responsive values for all grid properties.
 *
 * @public
 */
export const Grid = (props: GridProps) => <StyledGrid {...props} />
