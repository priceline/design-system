import { Relative, CloseButton, deprecatedColorValue, Flex, Text } from 'pcln-design-system'
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

const ModalHeader = ({
  bg = 'primary.base',
  color = 'text.lightest',
  px = 3,
  onClose,
  textStyle = 'heading6',
  title,
  ...props
}) => (
  <Flex align='center' alignItems='center' color={color} bg={bg} height='40px' px={px} {...props}>
    {title && <Title textStyle={textStyle}>{title}</Title>}
    {onClose && (
      <Relative ml='auto'>
        <StyledCloseButton onClick={onClose} />
      </Relative>
    )}
  </Flex>
)

ModalHeader.displayName = ModalHeader

ModalHeader.propTypes = {
  ...space.propTypes,
  bg: deprecatedColorValue(),
  color: deprecatedColorValue(),
  onClose: PropTypes.func,
  textStyle: PropTypes.string,
  title: PropTypes.string,
}

export default ModalHeader
