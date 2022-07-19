function getPopoverStyles({ arrowX, arrowY, placement = 'top', refs, strategy = 'absolute', x, y }) {
  const arrowWidthOffset = refs?.reference?.current?.offsetWidth / 2
  const arrowHeightOffset = refs?.reference?.current?.offsetHeight / 2

  const [side, startOrEnd] = placement.split('-')
  const oppositeSide = {
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
      arrowLeft = arrowX ? arrowX + arrowWidthOffset : 0
      left = x ? x - arrowWidthOffset : 0
    } else if (startOrEnd === 'end') {
      arrowLeft = arrowX ? arrowX - arrowWidthOffset : 0
      left = x ? x + arrowWidthOffset : 0
    }
  }

  if (side === 'left' || side === 'right') {
    if (startOrEnd === 'start') {
      arrowTop = arrowY ? arrowY + arrowHeightOffset : 0
      top = y ? y - arrowHeightOffset : 0
    } else if (startOrEnd === 'end') {
      arrowTop = arrowY ? arrowY - arrowHeightOffset : 0
      top = y ? y + arrowHeightOffset : 0
    }
  }

  if (side === 'top') {
    arrowTop = arrowY ? arrowY - arrowHeightOffset : 0
  } else if (side === 'bottom') {
    arrowTop = arrowY ? arrowY + arrowHeightOffset : 0
  } else if (side === 'left') {
    arrowLeft = arrowX ? arrowX + arrowWidthOffset : 0
  } else if (side === 'right') {
    arrowLeft = arrowX ? arrowX - arrowWidthOffset : 0
  }

  return {
    arrow: {
      top: arrowTop,
      left: arrowLeft,
      right: '',
      bottom: '',
      [oppositeSide]: '3px',
    },
    popover: {
      position: strategy,
      top,
      left,
    },
  }
}

export default getPopoverStyles
