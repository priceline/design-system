import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Manager, Reference, Popper } from "react-popper"
import {Box, Flex, CloseButton, theme} from 'pcln-design-system'
import styled from "styled-components";
import DEFAULTS_MODIFIERS from "./helpers/defaultModifiers"


const defaultProps = {
  theme: theme,
  p: 2,
  bg: 'white'
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
    const styleProps = {
      theme: this.props.theme,
      background: this.props.bg,
      offset: this.props.p
    }

    console.log(this.props)
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
                  onClick: () => this.handleToggle(this.state.isPopOverOpen),
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
                modifiers={{ 
                  ...DEFAULTS_MODIFIERS // TODO figure the offset logic
                }}
                {...this.props}
              >
                {({ placement, ref, style, arrowProps }) => (
                  // Need to be a native element, because of ref forwarding limitations with functional components
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
                    role='dialog'
                    describedby={`dialog-description-${this.props.id}`}
                  > 
                    <ContentContainer 
                      innerRef={this.contentRef}
                      {...styleProps}
                      tabIndex='-1'>
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
                    <Arrow 
                      innerRef={arrowProps.ref} 
                      style={arrowProps.style}
                      data-placement={placement}
                      {...styleProps}
                      aria-hidden='true'
                    />
                  </PopperGuide>
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

const PopperGuide = styled.span`
  padding: ${({ theme, offset}) => theme.space[offset]}px;
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

const ArrowAlignment = () => (
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
    }
  `
)

const ArrowPlacement = ({theme, background, offset}) => {
  offset = theme.space[offset]
  const spacing = `${offset/2}px`
  const color = theme.colors[background]
  const shadow = `rgba(0,0,0,0.08)`

  return `
    
    &[data-placement*="right"]::before {
      left: ${(offset - offset/4)/2}px;
      border-width: ${spacing};
      border-color: ${color} transparent transparent ${color};
      box-shadow: -2px -2px 2px 0px ${shadow};
    }
    &[data-placement*="left"]::after {
      right: ${offset - offset/4}px;
      border-width: ${spacing};
      border-color: transparent ${color} ${color} transparent;
      box-shadow: 2px 2px 2px 0px ${shadow};
    }
    &[data-placement*="top"]::after {
      top: -${offset}px;
      margin-left: -${(offset/2)}px;
      border-width: ${spacing};
      border-color: transparent transparent ${color} ${color};
      box-shadow: -2px 2px 2px 0px ${shadow};
    }
    &[data-placement*="bottom"]::before {
      top: ${offset}px;
      margin-left: -${(offset/2)}px;
      border-width: ${spacing};
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
