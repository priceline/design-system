import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Popper } from 'react-popper'
import { Box, theme } from 'pcln-design-system'
import DEFAULTS_MODIFIERS from './helpers/defaultModifiers'
import Overlay from './Overlay'
import PopoverArrow from './Arrow'

class PopoverContent extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyUp = evt => {
    const { onCloseRequest } = this.props
    const keys = {
      // Target ESC key
      27: () => {
        evt.preventDefault()
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
              className={this.props.className}
              innerRef={ref}
              style={style}
              data-placement={placement}
              aria-label={this.props.ariaLabel}
              {...styleProps}
              role="dialog"
              aria-describedby={`dialog-description-${this.props.idx}`}
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
              <PopoverArrow
                arrowProps={arrowProps}
                placement={placement}
                background={styleProps.background}
                borderColor={styleProps.borderColor}
              />
            </PopperGuide>
          )}
        </Popper>
        <Overlay
          handleClick={onCloseRequest}
          zIndex={this.props.zIndex - 1}
          overlayOpacity={this.props.overlayOpacity}
        />
      </React.Fragment>,
      // Append each instance of the Popover as portal directly to the body
      document.querySelector('body')
    )
  }
}

const PopperGuide = styled(Box)`
  padding: 16px;
  z-index: ${({ zIndex }) => (zIndex < 0 ? 1 : zIndex)}
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

PopoverContent.propTypes = {
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  contentRef: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.object,
  p: PropTypes.number,
  bg: PropTypes.string,
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.number,
  overlayOpacity: PropTypes.number
}

PopoverContent.defaultProps = {
  ariaLabel: 'Dialog Tile',
  theme: theme,
  p: 2,
  bg: 'white',
  borderColor: 'borderGray',
  placement: 'top',
  zIndex: 102,
  width: 400
}

export default PopoverContent
