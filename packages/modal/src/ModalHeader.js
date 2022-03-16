import { CloseButton, deprecatedPropType, Flex, Text } from 'pcln-design-system'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Title = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledCloseButton = styled(CloseButton)`
  height: 24px;
  width: 24px;
  svg {
    vertical-align: top;
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }
`

const ModalHeader = ({ bg, color, onClose, textStyle, title, ...props }) => (
  <Flex
    align='center'
    alignItems='center'
    color={color}
    bg={bg}
    borderRadius='xl'
    height='40px'
    rounded='top'
    {...props}
  >
    {title && <Title textStyle={textStyle}>{title}</Title>}
    {onClose && <StyledCloseButton onClick={onClose} ml='auto' />}
  </Flex>
)

ModalHeader.displayName = ModalHeader

ModalHeader.propTypes = {
  ...space.propTypes,
  bg: deprecatedPropType('color'),
  color: PropTypes.string,
  onClose: PropTypes.func,
  textStyle: PropTypes.string,
  title: PropTypes.string,
}

ModalHeader.defaultProps = {
  bg: 'primary.base',
  color: 'text.lightest',
  px: 3,
  textStyle: 'heading6',
}

export default ModalHeader
