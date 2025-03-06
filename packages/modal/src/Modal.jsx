import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { color, width, height, compose } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, CloseButton, deprecatedColorValue, Flex } from 'pcln-design-system'

const OVERLAY_ANIMATION = (transitionState) => `
  opacity: 0;
  transition: opacity .5s cubic-bezier(0.50, 0.00, 0.25, 1.00);
  ${transitionState === 'entering' ? `opacity: 0;` : ''}
  ${transitionState === 'entered' ? `opacity: 1;` : ''}
  ${transitionState === 'exiting' ? `opacity: 0;` : ''}
  ${transitionState === 'exited' ? `opacity: 0;` : ''}
`

const DIALOG_ANIMATION = (transitionState) => `
  transform: scale(0.5);
  transition: transform .5s cubic-bezier(0.50, 0.00, 0.25, 1.00);
  ${transitionState === 'entering' ? `transform: scale(0.5);` : ''}
  ${transitionState === 'entered' ? `transform: scale(1);` : ''}
  ${transitionState === 'exiting' ? `transform: scale(0.5);` : ''}
  ${transitionState === 'exited' ? `transform: scale(0.5);` : ''}
`

const getAnimation = ({ transitionstate, defaultAnimation, customAnimation = null }) =>
  typeof customAnimation === 'function' ? customAnimation(transitionstate) : defaultAnimation(transitionstate)

const Overlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  ${(props) => `
    z-index: ${props.zindex || 100};
    font-family: ${props.theme.font};
    line-height: ${props.theme.lineHeights?.standard};
    font-weight: ${props.theme.fontWeights?.medium};
  `}
  * {
    box-sizing: border-box;
  }
  ${getAnimation};
`

const Dialog = styled(DialogContent)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${(props) => props.theme.shadows['overlay-xl']};
  border-radius: ${({ borderRadius }) => themeGet(`borderRadii.${borderRadius}`)};
  &:focus {
    outline: none;
  }
  ${(props) =>
    !props.fullScreen
      ? `
    max-height: 100vh;
    max-width: calc(100vw - 32px);
  `
      : `
    width: 100vw;
    height: 100vh;
  `}
  ${(props) =>
    props.enableoverflow &&
    `
    max-height: none;
  `}
  ${getAnimation}

  ${(props) => compose(color, width, height)(props)}
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
    background-color: ${(props) => props.theme.colors.borderGray};
    outline: none;
  }
`

const ContentWrapper = styled(Box)`
  position: relative;
  ${(props) => {
    if (!props.enableoverflow) {
      return `
        overflow-y: auto;
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
  vertical-align: ${({ verticalAlignment }) => verticalAlignment};
  position: relative;
  height: 100%;
  ${(props) =>
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
  ariaLabel,
  ariaLabelledBy,
  bg = 'white',
  borderRadius = 'xl',
  children,
  className,
  dialogAnimation = null,
  disableCloseButton = false,
  enableOverflow = false,
  fullScreen,
  header = null,
  height = 420,
  imgMode,
  isOpen = false,
  onClose,
  overlayAnimation = null,
  timeout = 500,
  verticalAlignment = 'middle',
  width,
  zIndex,
}) => {
  let dialogHeight = height

  if (enableOverflow) {
    dialogHeight = null
  } else if (fullScreen) {
    dialogHeight = '100vh'
  }

  return (
    <Transition in={isOpen} unmountOnExit timeout={timeout}>
      {(state) => (
        <Overlay
          onDismiss={onClose}
          zindex={zIndex}
          transitionstate={state}
          initialFocusRef={null}
          defaultAnimation={OVERLAY_ANIMATION}
          customAnimation={overlayAnimation}
        >
          <OverlayWrapper>
            <DialogWrapper enableoverflow={enableOverflow} verticalAlignment={verticalAlignment}>
              <Dialog
                width={fullScreen ? '100vw' : width}
                bg={bg}
                borderRadius={borderRadius}
                height={dialogHeight}
                transitionstate={state}
                className={className}
                enableoverflow={enableOverflow ? 'true' : null}
                defaultAnimation={DIALOG_ANIMATION}
                customAnimation={dialogAnimation}
                fullScreen={fullScreen}
                data-testid='dialog-content'
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
              >
                <DialogInnerWrapper flexDirection='column'>
                  {header && <HeaderWrapper>{header}</HeaderWrapper>}
                  <ContentWrapper
                    borderRadius={borderRadius}
                    p={imgMode ? 0 : 16}
                    header={header}
                    enableoverflow={enableOverflow}
                  >
                    {enableOverflow && !disableCloseButton && (
                      <FloatCloseButton data-testid='pcln-modal-close' header={header} onClick={onClose} />
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
}

const validateAriaProps = (props, propName, componentName) => {
  if (!props.ariaLabel && !props.ariaLabelledBy) {
    return new Error(`A <${componentName}> must have either an 'ariaLabel' or 'ariaLabelledBy' prop.`)
  }
}

Modal.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
  ariaLabel: validateAriaProps,
  ariaLabelledBy: validateAriaProps,
  bg: deprecatedColorValue(),
  className: PropTypes.string,
  dialogAnimation: PropTypes.func,
  disableCloseButton: PropTypes.bool,
  enableOverflow: PropTypes.bool,
  fullScreen: PropTypes.bool,
  header: PropTypes.any,
  headerBg: PropTypes.string,
  imgMode: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  overlayAnimation: PropTypes.func,
  timeout: PropTypes.number,
  title: PropTypes.string,
  verticalAlignment: PropTypes.string,
  zIndex: PropTypes.number,
}

export default Modal
