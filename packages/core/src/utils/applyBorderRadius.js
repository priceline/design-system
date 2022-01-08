export function applyBorderRadius({ borderRadius, rounded, theme }) {
  if (!borderRadius) {
    return ``
  }

  const radius = theme.borderRadii[borderRadius]

  if (!radius) {
    return ``
  }

  if (!rounded) {
    return `border-radius: ${radius};`
  }

  let topRightRadius = 0,
    bottomRightRadius = 0,
    bottomLeftRadius = 0,
    topLeftRadius = 0

  if (rounded === 'top') {
    topLeftRadius = topRightRadius = radius
  } else if (rounded === 'right') {
    topRightRadius = bottomRightRadius = radius
  } else if (rounded === 'bottom') {
    bottomRightRadius = bottomLeftRadius = radius
  } else if (rounded === 'left') {
    topLeftRadius = bottomLeftRadius = radius
  } else if (rounded === 'topLeft') {
    topLeftRadius = radius
  } else if (rounded === 'topRight') {
    topRightRadius = radius
  } else if (rounded === 'bottomRight') {
    bottomRightRadius = radius
  } else if (rounded === 'bottomLeft') {
    bottomLeftRadius = radius
  }

  return `border-radius: ${topLeftRadius} ${topRightRadius} ${bottomRightRadius} ${bottomLeftRadius};`
}
