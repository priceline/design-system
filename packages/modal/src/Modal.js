import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { color, width, height } from 'styled-system'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, CloseButton, Flex } from 'pcln-design-system'

const Overlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${props => props.zindex || 100};
  font-family: ${props => props.theme.font};
  opacity: 0;
  transition: opacity .5s cubic-bezier(0.50, 0.00, 0.25, 1.00);

  ${props =>
    props.transitionstate === 'entering' &&
    `
    opacity: 0;
  `}

  ${props =>
    props.transitionstate === 'entered' &&
    `
    opacity: 1;
  `}

  ${props =>
    props.transitionstate === 'exiting' &&
    `
    opacity: 0;
  `}

  ${props =>
    props.transitionstate === 'exited' &&
    `
    opacity: 0;
  `}
`

const Dialog = styled(DialogContent)`
  ${color} 
  ${width}
  ${height}
  max-width: calc(100vw - 32px);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.boxShadows[3]};
  &:focus {
    outline: none;
  }
  max-height: 100vh;
  ${props =>
    props.enableoverflow &&
    `
    max-height: none;
  `}

  transform: scale(0.5);
  transition: transform .5s cubic-bezier(0.50, 0.00, 0.25, 1.00);

  ${props =>
    props.transitionstate === 'entering' &&
    `
    transform: scale(0.5);
  `}

  ${props =>
    props.transitionstate === 'entered' &&
    `
    transform: scale(1);
  `}

  ${props =>
    props.transitionstate === 'exiting' &&
    `
    transform: scale(0.5);
  `}

  ${props =>
    props.transitionstate === 'exited' &&
    `
    transform: scale(0.5);
  `}
`

const HeaderWrapper = styled.div`
  flex-shrink: 0;
`

const FloatCloseButton = styled(CloseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  svg {
    vertical-align: top;
  }

  &:focus {
    background-color: ${props => props.theme.colors.borderGray};
    outline: none;
  }
`

const ContentWrapper = styled(Box)`
  position: relative;
  ${props => {
    if (!props.enableoverflow) {
      return `
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        -webkit-overflow-scrolling: touch;
      `
    }
  }}
`

const OverlayWrapper = styled.div`
  display: table;
  height: 100%;
  width: 100%;
`

const DialogWrapper = styled(Box)`
  display: table-cell;
  vertical-align: middle;
  ${props =>
    props.enableoverflow &&
    `
    padding-top: 24px;
    padding-bottom: 24px;
  `};
`

const DialogInnerWrapper = styled(Flex)`
  position: relative;
  height: 100%;
`

const Modal = ({
  isOpen,
  onClose,
  bg,
  zIndex,
  children,
  imgMode,
  width,
  className,
  header,
  disableCloseButton,
  enableOverflow,
  height
}) => (
  <Transition in={isOpen} unmountOnExit timeout={500}>
    {state => (
      <Overlay
        onDismiss={onClose}
        zindex={zIndex}
        transitionstate={state}
        initialFocusRef={null}
      >
        <OverlayWrapper>
          <DialogWrapper enableoverflow={enableOverflow}>
            <Dialog
              width={width}
              bg={bg}
              height={enableOverflow ? null : height}
              transitionstate={state}
              className={className}
              enableoverflow={enableOverflow ? 'true' : null}
            >
              <DialogInnerWrapper flexDirection="column">
                {header && <HeaderWrapper>{header}</HeaderWrapper>}
                <ContentWrapper
                  p={imgMode ? 0 : 16}
                  header={header}
                  enableoverflow={enableOverflow}
                >
                  {enableOverflow && !disableCloseButton && (
                    <FloatCloseButton
                      data-testid="pcln-modal-close"
                      header={header}
                      onClick={onClose}
                      tabIndex="1"
                    />
                  )}
                  {children}
                </ContentWrapper>
              </DialogInnerWrapper>
            </Dialog>
          </DialogWrapper>
        </OverlayWrapper>
      </Overlay>
    )}
  </Transition>
)

Modal.defaultProps = {
  isOpen: false,
  disableCloseButton: false,
  enableOverflow: false,
  header: null,
  bg: 'white',
  height: 420
}

Modal.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
  isOpen: PropTypes.bool,
  disableCloseButton: PropTypes.bool,
  enableOverflow: PropTypes.bool,
  onClose: PropTypes.func,
  bg: PropTypes.string,
  zIndex: PropTypes.number,
  title: PropTypes.string,
  headerBg: PropTypes.string,
  imgMode: PropTypes.bool,
  className: PropTypes.string,
  header: PropTypes.any
}

export default Modal
