import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import { Transition } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Box, Text, CloseButton, Flex } from 'pcln-design-system'

const getWidth = props => {
  if (props.size === 'lg') {
    return '960px'
  } else if (props.size === 'sm') {
    return '400px'
  } else {
    return '480px'
  }
}

const getTopbarHeight = props => {
  if (props.size === 'lg') {
    return '48px'
  } else if (props.size === 'sm') {
    return '8px'
  } else {
    return '40px'
  }
}

const getVertical = props => {
  if (props.size === 'lg') {
    return `
      height: 100vh;
      ${props.theme.mediaQueries['lg']}{
        height: calc(100vh - 48px);
      }
    `
  } else if (props.size === 'md') {
    return 'min-height: 360px;'
  } else {
    return `
    min-height: 240px;
    margin-top: 48px;
    margin-bottom: 48px;
    `
  }
}

const Overlay = styled(DialogOverlay)`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  width: ${getWidth};
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.boxShadows[3]};
  max-width: calc(100vw - 32px);
  ${getVertical} &:focus {
    outline: none;
  }

  ${props => `${props.theme.mediaQueries['lg']}{
    
  }`};
`

const StyledHeader = styled(Flex)`
  height: ${getTopbarHeight}
    ${props => `${props.theme.mediaQueries['lg']}{
    height: ${props => (props.size === 'sm' ? '8px' : '40px')}
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
          <Dialog size={size} bg={bg || 'white'}>
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
            <ContentWrapper p={imgMode || 16}>
              {size === 'sm' && <FloatCloseButton onClick={onClose} />}
              {children}
            </ContentWrapper>
          </Dialog>
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
