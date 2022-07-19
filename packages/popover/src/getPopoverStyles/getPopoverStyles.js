function getPopoverStyles({ arrowX, arrowY, placement, refs, strategy, x, y }) {
  const arrowWidthOffset = refs?.reference?.current?.offsetWidth / 2
  const arrowHeightOffset = refs?.reference?.current?.offsetHeight / 2

  const [side, startOrEnd] = placement.split('-')
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[side]

  let top = y ?? 0,
    left = x ?? 0,
    arrowTop = arrowY ?? 0,
    arrowLeft = arrowX ?? 0

  if (side === 'top' || side === 'bottom') {
    if (startOrEnd === 'start') {
      arrowLeft = arrowX + arrowWidthOffset
      left = x ? x - arrowWidthOffset : 0
    } else if (startOrEnd === 'end') {
      arrowLeft = arrowX - arrowWidthOffset
      left = x ? x + arrowWidthOffset : 0
    }
  }

  if (side === 'left' || side === 'right') {
    if (startOrEnd === 'start') {
      arrowTop = arrowY + arrowHeightOffset
      top = y ? y - arrowHeightOffset : 0
    } else if (startOrEnd === 'end') {
      arrowTop = arrowY - arrowHeightOffset
      top = y ? y + arrowHeightOffset : 0
    }
  }

  if (side === 'top') {
    arrowTop = arrowY - arrowHeightOffset
  } else if (side === 'bottom') {
    arrowTop = arrowY + arrowHeightOffset
  } else if (side === 'left') {
    arrowLeft = arrowX + arrowWidthOffset
  } else if (side === 'right') {
    arrowLeft = arrowX - arrowWidthOffset
  }

  return {
    arrow: {
      top: arrowTop,
      left: arrowLeft,
      right: '',
      bottom: '',
      [staticSide]: '3px',
    },
    popover: {
      position: strategy,
      top,
      left,
    },
  }
}

export default getPopoverStyles
