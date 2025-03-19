import React from 'react'
import PropTypes from 'prop-types'
import { borderRadius } from 'styled-system'
import { deprecatedColorValue } from 'pcln-design-system'
import PopoverContent from '../PopoverContent'
import usePopover from '../usePopover'

function Popover({
  ariaLabel = 'Click to open popover with more information',
  borderRadius = 'xl',
  children,
  disableFloating = false,
  display = 'inline-block',
  hideOverlay,
  isOpen,
  openOnFocus,
  openOnHover,
  openOnMount,
  placement,
  onOpen,
  onClose,
  onBeforeOpen,
  onBeforeClose,
  stopPropagation = true,
  toggleIsOpenOnClick = true,
  ...props
}) {
  const {
    arrowRef,
    isPopoverOpen,
    placement: actualPlacement,
    styles,
    floating,
    reference,
    getFloatingProps,
    getReferenceProps,
    handleClose,
    handleToggle,
  } = usePopover({
    openOnFocus,
    openOnHover,
    openOnMount,
    placement,
    onOpen,
    onBeforeOpen,
    onClose,
    onBeforeClose,
    disableFloating,
  })

  return (
    <>
      {children &&
        React.cloneElement(children, {
          ...getReferenceProps({
            'aria-label': ariaLabel,
            type: 'button',
            ref: reference,
            onClick: !openOnHover && toggleIsOpenOnClick ? handleToggle : undefined,
          }),
        })}
      {(isPopoverOpen || isOpen) && (
        <PopoverContent
          {...getFloatingProps({
            ...props,
            arrowRef,
            borderRadius,
            display,
            hideOverlay: hideOverlay || openOnHover,
            placement: actualPlacement,
            popoverRef: floating,
            stopPropagation,
            styles,
            onCloseRequest: handleClose,
          })}
        />
      )}
    </>
  )
}

Popover.propTypes = {
  ...borderRadius.propTypes,
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  p: PropTypes.number,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlayOpacity: PropTypes.number,
  trapFocus: PropTypes.bool,
  isOpen: PropTypes.bool,
  openOnHover: PropTypes.bool,
  openOnMount: PropTypes.bool,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  hideArrow: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  display: PropTypes.string,
  toggleIsOpenOnClick: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  onBeforeOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  disableFloating: PropTypes.bool,
}

export default Popover
