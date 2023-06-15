import React from 'react'
import PropTypes from 'prop-types'
import { borderRadius } from 'styled-system'
import { deprecatedColorValue } from 'pcln-design-system'
import PopoverContent from '../PopoverContent'
import usePopover from '../usePopover'

function Popover({
  ariaLabel,
  borderRadius = 'xl',
  children,
  hideOverlay,
  isOpen,
  openOnFocus,
  openOnHover,
  openOnMount,
  placement,
  onOpen,
  onClose,
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
  } = usePopover({ openOnFocus, openOnHover, openOnMount, placement, onClose, onOpen })

  return (
    <>
      {children &&
        React.cloneElement(children, {
          ...getReferenceProps({
            'aria-label': ariaLabel,
            type: 'button',
            ref: reference,
            onClick: !openOnHover && handleToggle,
          }),
        })}
      {(isPopoverOpen || isOpen) && (
        <PopoverContent
          {...getFloatingProps({
            ...props,
            arrowRef,
            borderRadius,
            hideOverlay: hideOverlay || openOnHover,
            placement: actualPlacement,
            popoverRef: floating,
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
}

Popover.defaultProps = {
  ariaLabel: 'Click to open popover with more information',
  toggleIsOpenOnClick: true,
  display: 'inline-block',
  stopPropagation: true,
}

export default Popover
