import React from 'react'
import styled from 'styled-components'
import { FlexboxProps, GridProps, system } from 'styled-system'
import type { ColorSchemeName, IStyledSystemProps } from '..'
import { ComposedStyleFns, colorScheme } from '..'

export interface IGridProps extends IStyledSystemProps {
  children?: React.ReactNode
  gap?: GridProps['gridGap']
  rowGap?: GridProps['gridRowGap']
  columnGap?: GridProps['gridColumnGap']
  column?: GridProps['gridColumn']
  row?: GridProps['gridRow']
  area?: GridProps['gridArea']
  autoFlow?: GridProps['gridAutoFlow']
  autoRows?: GridProps['gridAutoRows']
  autoColumns?: GridProps['gridAutoColumns']
  templateRows?: GridProps['gridTemplateRows']
  templateColumns?: GridProps['gridTemplateColumns']
  templateAreas?: GridProps['gridTemplateAreas']
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

const StyledGrid = styled.div<IGridProps>`
  ${ComposedStyleFns}
  ${GridStyleFns}
  ${colorScheme}
  display: grid;
`

export const Grid = (props: IGridProps) => <StyledGrid {...props} />
