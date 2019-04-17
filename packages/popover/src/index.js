import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import { Box, theme } from 'pcln-design-system'
import styled from 'styled-components'
import DEFAULTS_MODIFIERS from './helpers/defaultModifiers'

const defaultProps = {
  theme: theme,
  p: 2,
  bg: 'white',
  placement: 'top'
}

class PopOver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopOverOpen: false
    }

    this.contentRef = React.createRef()
    this.triggerRef = React.createRef()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.setFocusToRef = this.setFocusToRef.bind(this)
    this.calcOffset - this.calcOffset.bind(this)
  }

  handleToggle(isOpen) {
    if (isOpen) {
      this.handleClose()
    } else {
      this.handleOpen()
    }
  }

  handleClose() {
    this.setState(
      prevState => {
        if (prevState.isPopOverOpen) {
          return {
            isPopOverOpen: false
          }
        }
      },
      () => {
        this.setFocusToRef(this.triggerRef)
      }
    )
  }

  handleOpen() {
    this.setState(
      prevState => {
        if (!prevState.isPopOverOpen) {
          return {
            isPopOverOpen: true
          }
        }
      },
      () => {
        this.setFocusToRef(this.contentRef)
      }
    )
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

  calcOffset(placement) {
    // Need to account for the padding added around the popover, this fixes the offset at the start and end position
    if (RegExp('start*').test(placement)) {
      return '-16px'
    } else if (RegExp('end*').test(placement)) {
      return '16px'
    } else {
      return 0
    }
  }

  render() {
    const styleProps = {
      theme: this.props.theme,
      background: this.props.bg
    }

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            // Need to be a native element, because of ref forwarding limitations with DS functional components
            <div ref={ref}>
              {// Clone element to pass down toggle event so it can be used directly from children as needed
              React.cloneElement(this.props.children, {
                'aria-label': 'Click to open popover with more information',
                onClick: () => this.handleToggle(this.state.isPopOverOpen),
                ref: this.triggerRef //Currently ref only works with native element, if we use a DS core component it does not work.
              })}
            </div>
          )}
        </Reference>
        {this.state.isPopOverOpen &&
          ReactDOM.createPortal(
            <Popper
              positionFixed={true}
              modifiers={{
                ...DEFAULTS_MODIFIERS,
                offset: {
                  offset: this.calcOffset(this.props.placement)
                }
              }}
              {...this.props}
            >
              {({ placement, ref, style, arrowProps }) => (
                // Need to be a native element, because of ref forwarding limitations with DS functional components
                <PopperGuide
                  /*
                   * NOTE: InnerRef has been depracted in V4 of styled components. Make sure to change this prop once we upgrade to styled components v4
                   * https://www.styled-components.com/docs/api#deprecated-innerref-prop
                   */
                  innerRef={ref}
                  style={style}
                  data-placement={placement}
                  aria-label={this.props.ariaLabel || 'Dialog Title'}
                  {...styleProps}
                  role="dialog"
                  describedby={`dialog-description-${this.props.idx}`}
                >
                  <ContentContainer
                    innerRef={this.contentRef}
                    {...styleProps}
                    tabIndex="-1"
                  >
                    <Box id={`popover-description-${this.props.idx}`}>
                      {this.props.renderContent({
                        handleClose: this.handleClose
                      })}
                    </Box>
                  </ContentContainer>
                  <Arrow
                    innerRef={arrowProps.ref}
                    style={arrowProps.style}
                    data-placement={placement}
                    {...styleProps}
                    aria-hidden="true"
                  />
                </PopperGuide>
              )}
            </Popper>,
            // Append each instance of the Popover as portal directly to the body
            document.querySelector('body')
          )}
      </Manager>
    )
  }
}

const PopperGuide = styled.div`
  padding: 16px;
`
const ContentContainer = styled.section`
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  border-radius: ${({ theme }) => theme.radii[1]}px;
  background: ${({ theme, background }) => theme.colors[background]};
  box-sizing: border-box;
  outline: 0;
  max-width: 100%;
`

// TODO: Create a separate component for Arrow
const ArrowAlignment = () =>
  `
    &[data-placement*="right"] {
      left: 0;
    }
    &[data-placement*="left"] {
      right: 0;
    }
    &[data-placement*="top"] {
      bottom: 0;
    }
    &[data-placement*="bottom"] {
      top: 0;
    }
    &[data-placement*="bottom"]::before,
    &[data-placement*="right"]::before,
    &[data-placement*="top"]::after,
    &[data-placement*="left"]::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      margin: auto;
      border-style: solid;
      transform-origin: 0 0;
      transform: rotate(-45deg);
      border-width: 5px;
    }
  `

const ArrowPlacement = ({ theme, background }) => {
  const color = theme.colors[background]
  const shadow = `rgba(0,0,0,0.08)`

  return `
    &[data-placement*="right"]::before {
      left: 9px;
      border-color: ${color} transparent transparent ${color};
      box-shadow: -2px -2px 2px 0px ${shadow};
    }
    &[data-placement*="left"]::after {
      right: 14px;
      border-color: transparent ${color} ${color} transparent;
      box-shadow: 2px 2px 2px 0px ${shadow};
    }
    &[data-placement*="top"]::after {
      top: -16px;
      margin-left: -5px;
      border-color: transparent transparent ${color} ${color};
      box-shadow: -2px 2px 2px 0px ${shadow};
    }
    &[data-placement*="bottom"]::before {
      top: 16px;
      margin-left: -5px;
      border-color: ${color} ${color} transparent transparent;
      box-shadow: 2px -2px 2px 0px ${shadow};
    }
  `
}
const Arrow = styled.span`
  position: absolute;
  ${ArrowAlignment}
  ${ArrowPlacement}
`
PopOver.defaultProps = defaultProps

export default PopOver
