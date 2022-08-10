import React from 'react'
import moize from 'moize'
import PropTypes, { InferProps } from 'prop-types'
import { zIndex } from 'styled-system'
import styled from 'styled-components'

import { Flex, Box } from '..'

/**
 * Returns an array of values with the same length as numChildren with each item
 * set to the corresponding value in the variation string. If numChildren is greater than
 * the number of digits in variation, the same variation values will be repeated.
 * @param variationWidth - variation string
 * @param numChildren - number of children
 * @returns
 */
const getNonhomogeneousWidths = (variationWidth, numChildren) => {
  const variationWidths = variationWidth.split('-').map((width) => parseInt(width, 10))
  const widths = []

  for (let i = 0; i < numChildren; i++) {
    widths.push(variationWidths[i % variationWidths.length] / 100)
  }

  return widths
}

const getWidthsForVariation = (variation: string, numChildren: number) => {
  if (!variation) {
    return null
  }

  if (variation === '50-50') {
    return Array(numChildren).fill(1 / 2)
  } else if (variation === '33-33-33') {
    return Array(numChildren).fill(1 / 3)
  } else if (variation === '25-25-25-25') {
    return Array(numChildren).fill(1 / 4)
  } else if (variation !== '100') {
    return getNonhomogeneousWidths(variation, numChildren)
  }

  // For when variation is 100
  return Array(numChildren).fill(1)
}

/**
 * Returns an array of responsive arrays of numbers with same length as numChildren. Each value represents the
 * width of the corresponding child.
 * @param variation - variation string to determine how items are sized
 * @param numChildren - number of children
 * @returns
 */
const getChildrenWidths = (variation: string, numChildren: number) => {
  if (Array.isArray(variation)) {
    const variationWidths = variation.map((v) => {
      return getWidthsForVariation(v, numChildren)
    })

    const widthsPerChild = []

    for (let i = 0; i < numChildren; i++) {
      const widths = variationWidths.map((v) => v && v[i])
      widthsPerChild.push(widths)
    }

    return widthsPerChild
  } else {
    return getWidthsForVariation(variation, numChildren)
  }
}

const memoGetChildrenWidths = moize(getChildrenWidths, { profileName: 'getChildrenWidths' })

// Map named sizes to responsive size values from theme
const gapValues = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
}

/**
 * Returns an object containing responsive arrays of values for mx to apply to
 * the wrapper flex and px values to apply to the children.
 * @param gapProp - value passed in as gap prop
 * @returns
 */
const getGapValues = (gapProp, rowGapProp) => {
  let boxPaddingX
  let boxPaddingY
  let flexMarginX
  let flexMarginY

  if (Array.isArray(gapProp)) {
    boxPaddingX = gapProp.map((gap) => gapValues[gap])

    // These values are negative because we're trying to offset the padding
    // applied to the left of the first item and right of the last item.
    flexMarginX = gapProp.map((gap) => (gapValues[gap] ? -1 * gapValues[gap] : null))
  } else {
    boxPaddingX = gapValues[gapProp]
    flexMarginX = -1 * gapValues[gapProp]
  }

  if (Array.isArray(rowGapProp)) {
    boxPaddingY = rowGapProp.map((gap) => gapValues[gap] || null)
    flexMarginY = rowGapProp.map((gap) => (gapValues[gap] ? -1 * gapValues[gap] : null))
  } else {
    boxPaddingY = gapValues[rowGapProp]
    flexMarginY = -1 * gapValues[rowGapProp]
  }

  return { boxPaddingX, boxPaddingY, flexMarginX, flexMarginY }
}

const memoGetGapValues = moize(getGapValues, { profileName: 'getGapValues' })

const ALLOWED_LAYOUT_VALUES = ['50-50', '33-33-33', '33-66', '66-33', '25-25-25-25', '60-40', '40-60', '100']
const ALLOWED_GAP_VALUES = ['sm', 'md', 'lg', 'xl']

const propTypes = {
  /** Children will have their widths set based on `variation` */
  children: PropTypes.node.isRequired,
  /** Configure widths of children at different breakpoints. Numbers in each variation
   * represent the width of the element in that position as a percentage of `Layout`'s width.
   */
  variation: PropTypes.oneOfType([
    PropTypes.oneOf(ALLOWED_LAYOUT_VALUES),
    PropTypes.arrayOf(PropTypes.oneOf(ALLOWED_LAYOUT_VALUES)),
  ]).isRequired,
  /** Add space between columns */
  gap: PropTypes.oneOfType([
    PropTypes.oneOf(ALLOWED_GAP_VALUES),
    PropTypes.arrayOf(PropTypes.oneOf(ALLOWED_GAP_VALUES)),
  ]),
  /** Add space between rows */
  rowGap: PropTypes.oneOfType([
    PropTypes.oneOf(ALLOWED_GAP_VALUES),
    PropTypes.arrayOf(PropTypes.oneOf(ALLOWED_GAP_VALUES)),
  ]),
  /** Add space between rows */
  stretchHeight: PropTypes.bool,
}

const ZIndexBox = styled(Box)`
  ${zIndex}
`

const Layout: React.FC<InferProps<typeof propTypes>> = ({
  children,
  gap,
  rowGap,
  variation,
  stretchHeight,
}) => {
  const widths = memoGetChildrenWidths(variation, children.length)
  const { boxPaddingX, boxPaddingY, flexMarginX, flexMarginY } = memoGetGapValues(gap, rowGap)

  return (
    <Flex flexWrap='wrap' mx={flexMarginX} my={flexMarginY} data-testid='layout-flex'>
      {React.Children.map(
        children,
        (child, idx) =>
          child && (
            <ZIndexBox
              width={widths[idx]}
              px={boxPaddingX}
              py={boxPaddingY}
              data-testid={`box-${idx}`}
              zIndex={child.props.zIndex}
            >
              {React.cloneElement(child, {
                minHeight: stretchHeight ? '100%' : undefined,
              })}
            </ZIndexBox>
          )
      )}
    </Flex>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = {}

Layout.displayName = 'Layout'

export default Layout
