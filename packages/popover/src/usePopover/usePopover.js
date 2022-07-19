import { useRef, useState } from 'react'
import { arrow, flip, offset, shift, useFloating } from '@floating-ui/react-dom'
import getPopoverStyles from '../getPopoverStyles'

function usePopover({ openOnMount, placement, onClose, onOpen }) {
  const arrowRef = useRef(null)
  const { middlewareData, placement: actualPlacement, refs, strategy, x, y, ...floatingValues } = useFloating(
    {
      placement,
      middleware: [
        offset(8),
        flip({ fallbackPlacements: ['top', 'right', 'bottom', 'left', 'top'] }),
        shift({ padding: 8 }),
        arrow({ element: arrowRef }),
      ],
    }
  )
  const { x: arrowX, y: arrowY } = middlewareData?.arrow || {}

  const [isPopoverOpen, setIsPopoverOpen] = useState(openOnMount)

  const handleClose = (e) => {
    setIsPopoverOpen(false)
    if (onClose) onClose(e)
  }

  const handleToggle = (evt) => {
    setIsPopoverOpen((isOpen) => {
      setIsPopoverOpen(!isOpen)

      isOpen ? onClose?.(evt) : onOpen?.(evt)
    })
  }

  const styles = getPopoverStyles({ arrowX, arrowY, placement: actualPlacement, refs, strategy, x, y })

  return {
    ...floatingValues,
    arrowRef,
    isPopoverOpen,
    placement: actualPlacement,
    styles,
    handleClose,
    handleToggle,
  }
}

export default usePopover
