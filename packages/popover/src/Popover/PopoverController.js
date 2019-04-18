import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Manager, Reference } from 'react-popper'
import { theme } from 'pcln-design-system'
import PopoverContent from './PopoverContent'

class PopoverController extends Component {
  contentRef = React.createRef()
  triggerRef = React.createRef()
  state = {
    isPopoverOpen: false
  }

  handleToggle = isOpen => {
    if (isOpen) {
      this.handleClose()
    } else {
      this.handleOpen()
    }
  }

  handleClose = () => {
    this.setState(
      prevState => {
        if (prevState.isPopoverOpen) {
          return {
            isPopoverOpen: false
          }
        }
      },
      () => {
        this.setFocusToRef(this.triggerRef)
      }
    )
  }

  handleOpen = () => {
    this.setState(
      prevState => {
        if (!prevState.isPopoverOpen) {
          return {
            isPopoverOpen: true
          }
        }
      },
      () => {
        this.setFocusToRef(this.contentRef)
      }
    )
  }

  setFocusToRef = ref => {
    if (ref) {
      try {
        ref.current.focus()
      } catch {
        return false
      }
    }
  }

  render() {
    const { isPopoverOpen } = this.state

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            // Need to be a native element, because of ref forwarding limitations with DS functional components
            <div ref={ref}>
              {// Clone element to pass down toggle event so it can be used directly from children as needed
              React.cloneElement(this.props.children, {
                'aria-label': 'Click to open popover with more information',
                onClick: () => this.handleToggle(isPopoverOpen),
                ref: this.triggerRef //Currently ref only works with native element, if we use a DS core component it does not work.
              })}
            </div>
          )}
        </Reference>
        {isPopoverOpen && (
          <PopoverContent
            {...this.props}
            onCloseRequest={this.handleClose}
            contentRef={this.contentRef}
          />
        )}
      </Manager>
    )
  }
}

PopoverController.propTypes = {
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object,
  p: PropTypes.number,
  bg: PropTypes.string,
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.number
}

PopoverController.defaultProps = {
  idx: 1,
  theme: theme
}

export default PopoverController
