import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Popper } from 'react-popper'
import { Box, theme } from 'pcln-design-system'
import styled from 'styled-components'
import DEFAULTS_MODIFIERS from '../helpers/defaultModifiers'
import Overlay from '../overlay'

const defaultProps = {
  theme: theme,
  p: 2,
  bg: 'white',
  borderColor: 'borderGray',
  placement: 'top',
  zIndex: 102,
  width: 400
}

class PopoverContent extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyUp = evt => {
    const { onCloseRequest } = this.props
    const keys = {
      // Target ESC key
      27: () => {
        evt.preventDefault()
        window.removeEventListener('keyup', this.handleKeyUp, false)
        onCloseRequest()
      }
    }

    if (keys[evt.keyCode]) {
      keys[evt.keyCode]()
    }
  }

  calcOffset = placement => {
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
    const { onCloseRequest } = this.props
    const styleProps = {
      theme: this.props.theme,
      background: this.props.bg,
      borderColor: this.props.borderColor,
      zIndex: this.props.zIndex,
      width: this.props.width
    }

    return ReactDOM.createPortal(
      <React.Fragment>
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
                innerRef={this.props.contentRef}
                {...styleProps}
                tabIndex="-1"
              >
                <Box id={`popover-description-${this.props.idx}`}>
                  {this.props.renderContent({
                    handleClose: onCloseRequest
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
        </Popper>
        <Overlay handleClick={onCloseRequest} zIndex={this.props.zIndex - 1} />
      </React.Fragment>,
      // Append each instance of the Popover as portal directly to the body
      document.querySelector('body')
    )
  }
}

const PopperGuide = styled.div`
  padding: 16px;
  z-index: ${({ zIndex }) => zIndex}
  max-width: ${({ width }) => width}px;
  width: 100%;
  box-sizing: border-box;
`
const ContentContainer = styled.section`
  box-shadow: 0 0 0 1px ${({ theme, borderColor }) => theme.colors[borderColor]},
    0 0 4px 0 rgba(0, 0, 0, 0.08), 0 8px 8px 0 rgba(0, 0, 0, 0.08),
    0 16px 16px 0 rgba(0, 0, 0, 0.08);
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
      border-width: 6px;
    }
  `

const ArrowPlacement = ({ theme, background, borderColor }) => {
  const bgColor = theme.colors[background]
  const brColor = theme.colors[borderColor]

  return `
    &[data-placement*="right"]::before {
      left: 8px;
      border-color: ${bgColor} transparent transparent ${bgColor};
      box-shadow: -0.75px -0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="left"]::after {
      right: 13px;
      border-color: transparent ${bgColor} ${bgColor} transparent;
      box-shadow: 0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="top"]::after {
      top: -16px;
      margin-left: -5px;
      border-color: transparent transparent ${bgColor} ${bgColor};
      box-shadow: -0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="bottom"]::before {
      top: 16px;
      margin-left: -5px;
      border-color: ${bgColor} ${bgColor} transparent transparent;
      box-shadow: 0.75px -0.75px 0px 0.25px ${brColor};
    }
  `
}
const Arrow = styled.span`
  position: absolute;
  ${ArrowAlignment}
  ${ArrowPlacement}
`

PopoverContent.defaultProps = defaultProps

export default PopoverContent
