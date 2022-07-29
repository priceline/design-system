import React from 'react'
import PropTypes from 'prop-types'
import { deprecatedPropType } from 'pcln-design-system'
import PopoverContent from '../PopoverContent'
import usePopover from '../usePopover'

function Popover({
  ariaLabel,
  children,
  hideOverlay,
  isOpen,
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
  } = usePopover({ openOnHover, openOnMount, placement, onClose, onOpen })

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
            arrowRef: arrowRef,
            hideOverlay: hideOverlay || openOnHover,
            placement: actualPlacement,
            popoverRef: floating,
            styles: styles,
            onCloseRequest: handleClose,
          })}
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
