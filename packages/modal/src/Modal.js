import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { color, width, height, themeGet } from 'styled-system'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, CloseButton, deprecatedPropType, Flex, getAnimationCss } from 'pcln-design-system'

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
  ${getAnimationCss};
`

const Dialog = styled(DialogContent)`
  ${color}
  ${width}
  ${height}
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${(props) => props.theme.boxShadows[3]};
  border-radius: ${themeGet('borderRadii.xl')};
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
  ${getAnimationCss}
`
//Some animations like "EXPAND_FROM_BOTTOM" also need positioning, need to figure that out

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
  bg,
  children,
  className,
  dialogAnimation,
  disableCloseButton,
  enableOverflow,
  fullScreen,
  header,
  height,
  imgMode,
  isOpen,
  onClose,
  overlayAnimation,
  timeout,
  verticalAlignment,
  width,
  zIndex,
}) => {
  let dialogHeight = height

  if (enableOverflow) {
    dialogHeight = null
  } else if (fullScreen) {
    dialogHeight = [1]
  }

  return (
    <Transition in={isOpen} unmountOnExit timeout={timeout}>
      {(state) => (
        <Overlay
          onDismiss={onClose}
          zindex={zIndex}
          transitionstate={state}
          initialFocusRef={null}
          customAnimation={overlayAnimation}
          variation='FADE_IN'
          isAnimatedState={['entered', 'entering'].includes(state)}
        >
          <OverlayWrapper>
            <DialogWrapper enableoverflow={enableOverflow} verticalAlignment={verticalAlignment}>
              <Dialog
                width={fullScreen ? 1 : width}
                bg={bg}
                height={dialogHeight}
                transitionstate={state}
                className={className}
                enableoverflow={enableOverflow ? 'true' : null}
                variation='GROW_CENTER'
                isAnimatedState={['entered', 'entering'].includes(state)}
                customAnimation={dialogAnimation}
                fullScreen={fullScreen}
                data-testid='dialog-content'
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
              >
                <DialogInnerWrapper flexDirection='column'>
                  {header && <HeaderWrapper>{header}</HeaderWrapper>}
                  <ContentWrapper
                    borderRadius='xl'
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

Modal.defaultProps = {
  bg: 'white',
  dialogAnimation: null,
  disableCloseButton: false,
  enableOverflow: false,
  header: null,
  height: 420,
  isOpen: false,
  overlayAnimation: null,
  timeout: 500,
  verticalAlignment: 'middle',
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
  bg: deprecatedPropType('color'),
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
