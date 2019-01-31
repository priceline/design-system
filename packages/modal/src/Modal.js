import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, width, height } from 'styled-system'
import { Transition, config } from 'react-spring'
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
    props.enableOverflow &&
    `
    max-height: initial;
  `}
`

const HeaderWrapper = styled.div`
  flex-shrink: 0;
`

const FloatCloseButton = styled(CloseButton)`
  position: absolute;
  top: ${props => (props.header ? '24px' : '16px')};
  right: 16px;
  z-index: 2;

  svg {
    vertical-align: top;
  }

  &:focus {
    outline: none;
  }
`

const ContentWrapper = styled(Box)`
  position: relative;
  ${props => {
    if (!props.enableoverflow) {
      return `
        overflow-y: auto;
        overflow-x: hidden;
      `
    }
  }}
`

const OverlayWrapper = styled.div`
  display: table;
  height: 100%;
  width: 100%;
`

const DialogWrapper = styled.div`
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
  <Transition
    items={isOpen}
    config={config.gentle}
    from={{ opacity: 0, transform: 'scale(0.5)' }}
    enter={{ opacity: 1, transform: 'scale(1)' }}
    leave={{ opacity: 0, transform: 'scale(0.5)' }}
  >
    {isOpen =>
      isOpen &&
      (styles => (
        <Overlay
          onDismiss={onClose}
          zindex={zIndex}
          style={{ opacity: styles.opacity }}
        >
          <OverlayWrapper>
            <DialogWrapper enableoverflow={enableOverflow}>
              <Dialog
                width={width}
                bg={bg}
                height={enableOverflow ? null : height}
                style={{ transform: styles.transform }}
                className={className}
                enableOverflow={enableOverflow}
              >
                <DialogInnerWrapper flexDirection="column">
                  {header && <HeaderWrapper>{header}</HeaderWrapper>}
                  <ContentWrapper
                    p={imgMode || 16}
                    header={header}
                    enableoverflow={enableOverflow}
                  >
                    {children}
                  </ContentWrapper>
                </DialogInnerWrapper>
              </Dialog>
            </DialogWrapper>
          </OverlayWrapper>
        </Overlay>
      ))
    }
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
