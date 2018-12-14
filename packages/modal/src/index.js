import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, width } from 'styled-system'
import { Transition, config } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, Text, CloseButton, Flex } from 'pcln-design-system'

const Overlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${props => props.zIndex || 100};
  font-family: ${props => props.theme.font};
`

const Dialog = styled(DialogContent)`
  ${color} 
  ${width}
  max-width: calc(100vw - 32px);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.boxShadows[3]};
  &:focus {
    outline: none;
  }
  ${props =>
    !props.enableOverflow &&
    `
    max-height: 100vh;
    height: 420px;s
  `}
`

const StyledHeader = styled(Flex)`
  ${props => {
    if (props.header === 1) {
      return `height: 8px;`
    } else if (props.header === 2) {
      return `height: 40px;`
    }
  }}
`

const StyledCloseButton = styled(CloseButton)`
  margin-right: 8px;

  svg {
    vertical-align: top;
  }

  &:focus {
    outline: none;
  }
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
    if (!props.enableOverflow) {
      if (props.header === 1) {
        return `
          overflow: scroll;
          height: calc(100% - 8px);
        `
      } else if (props.header === 2) {
        return `
          overflow: scroll;
          height: calc(100% - 40px);
        `
      } else {
        return `
          overflow: scroll;
          height: 100%;
        `
      }
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
    props.enableOverflow &&
    `
    padding-top: 24px;
    padding-bottom: 24px;
  `};
`

const Modal = ({
  isOpen,
  onClose,
  bg,
  zIndex,
  children,
  title,
  headerBg,
  imgMode,
  width,
  className,
  header,
  disableCloseButton,
  enableOverflow
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
          zIndex={zIndex}
          style={{ opacity: styles.opacity }}
        >
          <OverlayWrapper>
            <DialogWrapper enableOverflow={enableOverflow}>
              <Dialog
                width={width}
                bg={bg || 'white'}
                style={{ transform: styles.transform }}
                className={className}
                enableOverflow={enableOverflow}
              >
                {header && (
                  <StyledHeader
                    id="pcln-modal-header"
                    header={header}
                    align="center"
                    color="white"
                    bg={headerBg || 'blue'}
                    pl="16px"
                  >
                    {header === 2 && title && (
                      <Text fontSize={1} bold>
                        {title}
                      </Text>
                    )}
                    {!disableCloseButton && header === 2 && (
                      <StyledCloseButton
                        id="pcln-modal-close"
                        onClick={onClose}
                        ml="auto"
                      />
                    )}
                  </StyledHeader>
                )}
                {header !== 2 && !disableCloseButton && (
                  <FloatCloseButton
                    id="pcln-modal-close"
                    header={header}
                    onClick={onClose}
                  />
                )}
                <ContentWrapper
                  p={imgMode || 16}
                  header={header}
                  enableOverflow={enableOverflow}
                >
                  {children}
                </ContentWrapper>
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
  header: null
}

Modal.propTypes = {
  ...width.propTypes,
  isOpen: PropTypes.bool,
  disableCloseButton: PropTypes.bool,
  enableOverflow: PropTypes.bool,
  onClose: PropTypes.func,
  bg: PropTypes.string,
  zIndex: PropTypes.number,
  children: PropTypes.children,
  title: PropTypes.string,
  headerBg: PropTypes.string,
  imgMode: PropTypes.bool,
  className: PropTypes.string,
  header: PropTypes.number
}

export default Modal
