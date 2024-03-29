/**
 * @public
 */
export const roundedValues = [
  'top',
  'right',
  'bottom',
  'left',
  'topLeft',
  'topRight',
  'bottomRight',
  'bottomLeft',
]

/**
 * @public
 */
export const borderRadiusValues = [
  'none',
  'xsm',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'full',
  'action-sm',
  'action-md',
  'action-lg',
]

function calculateRoundedProps(radius, rounded) {
  let topRight = 0,
    bottomRight = 0,
    bottomLeft = 0,
    topLeft = 0

  if (!rounded || rounded === 'round') {
    return radius
  } else if (rounded === 'top') {
    topLeft = topRight = radius
  } else if (rounded === 'right') {
    topRight = bottomRight = radius
  } else if (rounded === 'bottom') {
    bottomRight = bottomLeft = radius
  } else if (rounded === 'left') {
    topLeft = bottomLeft = radius
  } else if (rounded === 'topLeft') {
    topLeft = radius
  } else if (rounded === 'topRight') {
    topRight = radius
  } else if (rounded === 'bottomRight') {
    bottomRight = radius
  } else if (rounded === 'bottomLeft') {
    bottomLeft = radius
  }

  return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`
}

/**
 * @public
 */
export function borderRadiusAttrs({ borderRadius, rounded, theme }) {
  if (!borderRadius) {
    return {}
  }

  if (Array.isArray(borderRadius)) {
    const effectiveRadius = borderRadius.map((radius) => theme.borderRadii[radius])
    const radii = effectiveRadius.map((radius) =>
      radius ? calculateRoundedProps(radius, rounded) : borderRadius
    )

    return {
      borderRadius: radii,
    }
  } else {
    const effectiveRadius = theme.borderRadii[borderRadius]

    return { borderRadius: effectiveRadius ? calculateRoundedProps(effectiveRadius, rounded) : borderRadius }
  }
}
