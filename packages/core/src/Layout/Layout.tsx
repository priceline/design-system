import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { zIndex } from 'styled-system'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'
import { spaceValues } from '../theme'

const getWidthsForVariation = (variation: string) => {
  return (
    variation &&
    variation
      .split('-')
      .map((width) => `${parseInt(width, 10) / 10}fr`)
      .join(' ')
  )
}

/**
 * Returns an array of responsive arrays of numbers with same length as numChildren. Each value represents the
 * width of the corresponding child.
 * @param variation - variation string to determine how items are sized
 * @param numChildren - number of children
 * @returns
 */
const getGridTemplateColumns = (variation: LayoutVariation) => {
  if (Array.isArray(variation)) {
    return variation.map((v) => {
      return getWidthsForVariation(v)
    })
  } else {
    return getWidthsForVariation(variation)
  }
}

// After converting Layout from using Flex to Grid, we need to multiply
// the space values by 2 since we're using them for gap instead of padding on each child.
const spaceToGapValue = (idx) => `${spaceValues[idx] * 2}px`

// Map named sizes to responsive size values from theme
const gapValues = {
  sm: spaceToGapValue(1),
  md: spaceToGapValue(2),
  lg: spaceToGapValue(3),
  xl: spaceToGapValue(4),
}

/**
 * Returns an object containing responsive arrays of values for mx to apply to
 * the wrapper flex and px values to apply to the children.
 * @param gapProp - value passed in as gap prop
 * @returns
 */
const getGapValues = (gapProp, rowGapProp) => {
  let columnGap
  let rowGap

  if (Array.isArray(rowGapProp)) {
    rowGap = rowGapProp.map((gap) => gapValues[gap] || null)
  } else {
    rowGap = gapValues[rowGapProp]
  }

  if (Array.isArray(gapProp)) {
    columnGap = gapProp.map((gap) => gapValues[gap] || null)
  } else {
    columnGap = gapValues[gapProp]
  }

  return { columnGap, rowGap }
}

/**
 * @public
 */
export const ALLOWED_LAYOUT_VALUES = [
  '50-50',
  '33-33-33',
  '33-66',
  '66-33',
  '25-25-25-25',
  '60-40',
  '40-60',
  '100',
] as const

/**
 * @public
 */
export const ALLOWED_GAP_VALUES = ['sm', 'md', 'lg', 'xl'] as const

const ZIndexBox = styled(Box)`
  ${zIndex}
`

/**
 * @public
 */
export type LayoutGap = (typeof ALLOWED_GAP_VALUES)[number] | Array<(typeof ALLOWED_GAP_VALUES)[number]>

/**
 * @public
 */
export type LayoutVariation =
  | (typeof ALLOWED_LAYOUT_VALUES)[number]
  | Array<(typeof ALLOWED_LAYOUT_VALUES)[number]>

/**
 * @public
 */
export type LayoutProps = {
  children: React.ReactNode
  gap?: LayoutGap
  rowGap?: LayoutGap
  variation?: LayoutVariation
  stretchHeight?: boolean
}

/**
 * @public
 */
export function Layout({ children, gap, rowGap, variation, stretchHeight, ...props }: LayoutProps) {
  const [gapValues, setGapValues] = useState(getGapValues(gap, rowGap))
  const [gridTemplateColumns, setGridTemplateColumns] = useState(getGridTemplateColumns(variation))

  useEffect(() => {
    setGapValues(getGapValues(gap, rowGap))
  }, [gap, rowGap])

  useEffect(() => {
    setGridTemplateColumns(getGridTemplateColumns(variation))
  }, [variation])

  return (
    <Grid
      {...props}
      data-testid='layout-grid'
      width={1}
      gridTemplateColumns={gridTemplateColumns}
      rowGap={gapValues.rowGap}
      columnGap={gapValues.columnGap}
    >
      {React.Children.map(
        children,
        (child, idx) =>
          child &&
          React.isValidElement(child) && (
            <ZIndexBox
              data-testid={`box-${idx}`}
              // TS ignored because the type of child.props is unknown
              // @ts-ignore
              zIndex={child?.props?.zIndex}
            >
              {React.cloneElement<{ minHeight?: string }>(child, {
                minHeight: stretchHeight ? '100%' : undefined,
              })}
            </ZIndexBox>
          )
      )}
    </Grid>
  )
}

Layout.displayName = 'Layout'
