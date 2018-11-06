import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import { Transition } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, Text, CloseButton, Flex } from 'pcln-design-system'
import {
  getHorizontal,
  getInnerHeight,
  getVertical,
  getTopbarHeight
} from './helpers'

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
  ${color} position: relative;
  ${getHorizontal} margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.boxShadows[3]};
  ${getVertical} &:focus {
    outline: none;
  }
`

const StyledHeader = styled(Flex)`
  height: ${getTopbarHeight};
  ${props => `${props.theme.mediaQueries['lg']}{
    height: ${props.size === 'sm' ? '8px' : '40px'};
  }`};
`

const StyledCloseButton = styled(CloseButton)`
  margin-right: 8px;

  svg {
    vertical-align: top;
  }
`

const FloatCloseButton = styled(CloseButton)`
  position: absolute;
  top: 16px;
  right: 16px;

  svg {
    vertical-align: top;
  }
`

const ContentWrapper = styled(Box)`
  position: relative;
  ${getInnerHeight};
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
    props.size === 'sm' &&
    `
    padding-top: 24px;
    padding-bottom: 24px;
  `};
`

const Modal = ({
  isOpen,
  size,
  bg,
  zIndex,
  onClose,
  children,
  title,
  headerBg,
  imgMode
}) => (
  <Transition
    items={isOpen}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {isOpen =>
      isOpen &&
      (styles => (
        <Overlay onDismiss={onClose} zIndex={zIndex} style={styles}>
          <OverlayWrapper>
            <DialogWrapper size={size}>
              <Dialog size={size} bg="white">
                <StyledHeader
                  size={size}
                  align="center"
                  color="white"
                  bg={headerBg || 'blue'}
                  pl="16px"
                >
                  {size !== 'sm' &&
                    title && (
                      <Text fontSize={1} bold>
                        {title}
                      </Text>
                    )}
                  {size !== 'sm' && (
                    <StyledCloseButton onClick={onClose} ml="auto" />
                  )}
                </StyledHeader>
                <ContentWrapper p={imgMode || 16} size={size}>
                  {size === 'sm' && <FloatCloseButton onClick={onClose} />}
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
  size: 'md'
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  type: PropTypes.string
}

export default Modal
