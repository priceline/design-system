import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { arrow, flip, offset, shift, useFloating } from '@floating-ui/react-dom'
import { deprecatedPropType } from 'pcln-design-system'
import PopoverContent from '../PopoverContent'

function Popover({ ariaLabel, children, isOpen, onOpen, onClose, placement, ...props }) {
  const arrowRef = useRef(null)
  const { placement: actualPlacement, strategy, x, y, floating, reference, middlewareData } = useFloating({
    placement,
    middleware: [arrow({ element: arrowRef }), flip(), offset(8), shift({ padding: 8 })],
  })
  const { x: arrowX, y: arrowY } = middlewareData?.arrow || {}

  const [isPopoverOpen, setIsPopoverOpen] = useState(isOpen)

  const handleToggle = (evt) => {
    setIsPopoverOpen((isOpen) => {
      setIsPopoverOpen(!isOpen)

      isOpen ? onClose?.(evt) : onOpen?.(evt)
    })
  }

  const handleClose = (e) => {
    setIsPopoverOpen(false)
    if (onClose) onClose(e)
  }

  const side = actualPlacement.split('-')[0]

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[side]

  const styles = {
    arrow: {
      top: side === 'left' || side === 'right' ? arrowY ?? 0 : null,
      left: side === 'top' || side === 'bottom' ? arrowX ?? 0 : null,
      right: '',
      bottom: '',
      [staticSide]: '3px',
    },
    popper: {
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
    },
  }

  return (
    <>
      {React.cloneElement(children, {
        'aria-label': ariaLabel,
        type: 'button',
        ref: reference,
        onClick: handleToggle,
      })}
      {isPopoverOpen && (
        <PopoverContent
          {...props}
          arrowRef={arrowRef}
          placement={actualPlacement}
          popperRef={floating}
          styles={styles}
          onCloseRequest={handleClose}
        />
      )}
    </>
  )
}

Popover.propTypes = {
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  p: PropTypes.number,
  color: PropTypes.string,
  bg: deprecatedPropType('color'),
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.number,
  overlayOpacity: PropTypes.number,
  trapFocus: PropTypes.bool,
  isOpen: PropTypes.bool,
  openOnMount: PropTypes.bool,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  hideArrow: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  display: PropTypes.string,
  toggleIsOpenOnClick: PropTypes.bool,
  stopPropagation: PropTypes.bool,
}

Popover.defaultProps = {
  ariaLabel: 'Click to open popover with more information',
  toggleIsOpenOnClick: true,
  display: 'inline-block',
  stopPropagation: true,
}

export default Popover
