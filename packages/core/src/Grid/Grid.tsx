import React from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  // color,
  // ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system'

export interface IStyledSystemProps
  extends BackgroundProps,
    BorderProps,
    // ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  style?: React.CSSProperties
}

const ComposedStyleFns = compose(
  background,
  border,
  // color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
)

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
  display: grid;
`

export const Grid = (props: IGridProps) => <StyledGrid {...props} />
