import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
} from '@floating-ui/react-dom-interactions'
import { useRef, useState } from 'react'
import getPopoverStyles from '../getPopoverStyles'

function usePopover({
  openOnFocus,
  openOnHover,
  openOnMount,
  placement,
  onClose,
  onOpen,
  onBeforeOpen,
  onBeforeClose,
}) {
  const [isOpen, setOpen] = useState(openOnMount)

  const handleClose = (e) => {
    setOpen(false)
    onBeforeClose?.(e)
    onClose?.(e)
  }

  const handleOpen = (open) => {
    setOpen(open)
    open && onOpen && onOpen()
    !open && onClose && onClose()
  }

  const handleToggle = (e) => {
    setOpen((isOpen) => {
      if (isOpen) {
        onBeforeClose?.(e)
        onClose?.(e)
      } else {
        onBeforeOpen?.(e)
        onOpen?.(e)
      }
      return !isOpen
    })
  }

  const arrowRef = useRef(null)
  const {
    context,
    middlewareData,
    placement: actualPlacement,
    refs,
    strategy,
    x,
    y,
    ...floatingValues
  } = useFloating({
    open: isOpen,
    placement,
    middleware: [
      offset(8),
      flip({ fallbackPlacements: ['top', 'right', 'bottom', 'left', 'top'] }),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
    onOpenChange: handleOpen,
  })
  const { getFloatingProps, getReferenceProps } = useInteractions([
    useFocus(context, {
      enabled: !!openOnFocus || !!openOnHover,
    }),
    useHover(context, {
      enabled: !!openOnHover,
      handleClose: safePolygon(),
    }),
  ])
  const { x: arrowX, y: arrowY } = middlewareData?.arrow || {}

  const styles = getPopoverStyles({ arrowX, arrowY, placement: actualPlacement, refs, strategy, x, y })

  return {
    ...floatingValues,
    arrowRef,
    isPopoverOpen: isOpen,
    placement: actualPlacement,
    styles,
    getFloatingProps,
    getReferenceProps,
    handleClose,
    handleToggle,
  }
}

export default usePopover
