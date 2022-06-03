import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Manager, Reference } from 'react-popper'
import { deprecatedPropType } from 'pcln-design-system'

import PopoverContent from '../PopoverContent'

class Popover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopoverOpen: props.openOnMount,
    }
    this.contentRef = React.createRef()
    this.triggerRef = React.createRef()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.setFocusToRef = this.setFocusToRef.bind(this)
  }

  handleToggle(evt, isOpen) {
    evt.preventDefault()
    if (this.props.stopPropagation) {
      evt.stopPropagation()
    }
    if (isOpen) {
      this.handleClose(evt)
    } else {
      this.handleOpen(evt)
    }
  }

  handleClose(evt) {
    if (this.props.toggleIsOpenOnClick) {
      this.setState({ isPopoverOpen: false }, () => {
        this.setFocusToRef(this.triggerRef)
      })
    }

    this.props.onClose && this.props.onClose(evt)
  }

  handleOpen(evt) {
    if (this.props.toggleIsOpenOnClick) {
      this.setState({ isPopoverOpen: true }, () => {
        this.setFocusToRef(this.contentRef)
      })
    }

    this.props.onOpen && this.props.onOpen(evt)
  }

  setFocusToRef(ref) {
    try {
      ref.current.focus({
        preventScroll: true,
      })
    } catch {
      // We need to be safe in case the ref is invalid, which will unmount component
      /*istanbul ignore next*/
      return false
    }
  }

  render() {
    const { isPopoverOpen: isOpenState } = this.state
    const { ariaLabel, children, isOpen: isOpenProp, display } = this.props
    const isPopoverOpen = isOpenState || isOpenProp

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            // Need to be a native element, because of ref forwarding limitations with DS functional components
            <Container ref={ref} display={display}>
              {
                // Clone element to pass down toggle event so it can be used directly from children as needed
                React.cloneElement(children, {
                  'aria-label': ariaLabel,
                  onClick: (evt) => this.handleToggle(evt, isPopoverOpen),
                  ref: this.triggerRef,
                })
              }
            </Container>
          )}
        </Reference>
        {isPopoverOpen && (
          <PopoverContent {...this.props} onCloseRequest={this.handleClose} contentRef={this.contentRef} />
        )}
      </Manager>
    )
  }
}

const Container = styled.div`
  display: ${({ display }) => display};
`

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
