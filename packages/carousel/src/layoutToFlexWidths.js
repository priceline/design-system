export const layoutToFlexWidths = (layout, totalSlides) => {
  if (!layout) {
    return []
  }

  const layoutValues = layout?.split('-').map((i) => {
    const value = parseInt(i)

    // 33-33-33 is the only supported layout where values don't sum to 100. We need to
    // account for this in order for slides not to be cut off.
    return value === 33 ? value + 1 / 3 : value
  })

  const numLayoutValues = layoutValues.length

  return layoutValues.reduce((acc, value) => {
    acc.push(`${value / (totalSlides / numLayoutValues)}%`)
    return acc
  }, [])
}
