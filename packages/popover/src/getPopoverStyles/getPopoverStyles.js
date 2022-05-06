function getPopoverStyles({ arrowX, arrowY, placement = 'top', strategy = 'absolute', x, y }) {
  const side = placement.split('-')[0]
  const oppositeSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[side]

  return {
    arrow: {
      top: arrowY ?? '',
      left: arrowX ?? '',
      right: '',
      bottom: '',
      [oppositeSide]: '3px',
    },
    popover: {
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
    },
  }
}

export default getPopoverStyles
