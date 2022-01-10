export const layoutToFlexWidths = (layout, totalSlides) => {
  if (!layout) {
    return []
  }

  const layoutValues = layout?.split('-').map((i) => parseInt(i))
  const numLayoutValues = layoutValues.length

  return layoutValues.reduce((acc, value) => {
    acc.push(`${value / (totalSlides / numLayoutValues)}%`)
    return acc
  }, [])
}
