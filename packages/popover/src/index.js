import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Manager, Reference, Popper } from "react-popper"
import {Box, Flex, CloseButton, theme} from 'pcln-design-system'
import styled from "styled-components";
import DEFAULTS_MODIFIERS from "./helpers/defaultModifiers"

class PopOver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopOverOpen: false
    }

    this.contentRef = React.createRef()
    this.triggerRef = React.createRef()
    this.handleToggle = this.handleToggle(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.setFocusToRef = this.setFocusToRef.bind(this)

    console.log(this.props)
  }

  handleToggle(isOpen) {
    if (isOpen) {
      this.handleClose()
    } else {
      this.handleOpen()
    }
  }

  handleClose() {
    this.setState( prevState => {
      if (prevState.isPopOverOpen) {
        return {
          isPopOverOpen: false
        }
      }
    }, () => {
      this.setFocusToRef(this.triggerRef)
    })
  }

  handleOpen() {
    this.setState( prevState => {
      if (!prevState.isPopOverOpen) {
        return {
          isPopOverOpen: true
        }
      }
    }, () => {
      this.setFocusToRef(this.contentRef)
    })
  }

  setFocusToRef(ref) {
    if (ref) {
      try {
        ref.current.focus()
      } catch {
        return false
      }
    }
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            // Need to be a span, because of ref forwarding limitations with functional components
            <span ref={ref}>
              {
                // Clone element to pass down toggle event so it can be used directly from children as needed
                React.cloneElement(this.props.children, {
                  'aria-label': 'Click for more information',
                  onClick: this.handleOpen,
                  ref: this.triggerRef //Currently ref only works with native element, if we use a DS core component it does not work.
                })
              }
            </span>
          )}
        </Reference>
        {
          this.state.isPopOverOpen &&
            ReactDOM.createPortal(
              <Popper
                positionFixed={true}
                modifiers={{ ...DEFAULTS_MODIFIERS }}
                {...this.props}
              >
                {({ placement, ref, style, arrowProps }) => (
                  // Need to be a native element, because of ref forwarding limitations with functional components
                  <span
                    /*
                     * NOTE: InnerRef has been depracted in V4 of styled components. Make sure to change this prop once we upgrade to styled components v4
                     * https://www.styled-components.com/docs/api#deprecated-innerref-prop
                     */
                    ref={ref}
                    style={style}
                    data-placement={placement}
                    aria-label={this.props.ariaLabel || 'Dialog Title'}
                    role='dialog'
                    describedby={`dialog-description-${this.props.id}`}
                  > 
                    <ContentContainer innerRef={this.contentRef} tabIndex='-1'>
                      {
                        this.props.allowClose &&
                        <Flex p={2} color='blue'>
                          <Box mx='auto' />
                          <CloseButton onClick={this.handleClose}/>
                        </Flex> 
                      }           
                      <Box id={`popover-description-${this.props.id}`}>
                        {
                          this.props.renderContent({
                            handleClose: this.handleClose
                          })
                        }
                      </Box>
                    </ContentContainer>
                  </span>
                )}
              </Popper>,
              // Append each instance of the Popover as portal directly to the body
              document.querySelector("body")
            )
        }
      </Manager>
    );
  }
}

const ContentContainer = styled.section`
  padding: ${({ theme }) => theme.space[2]}px;
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  border-radius: ${({ theme }) => theme.radii[1]}px;
  box-sizing: border-box;
  background: ${({ theme, bg }) => theme.colors[bg]};
`

export default PopOver
