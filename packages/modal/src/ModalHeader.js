import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, CloseButton, deprecatedPropType, Text } from 'pcln-design-system'

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
    background-color: ${(props) => props.theme.palette.primary.dark};
    outline: none;
  }
`

const ModalHeader = ({ bg, color, onClose, title }) => (
  <Flex
    align='center'
    alignItems='center'
    color={color}
    bg={bg}
    px={3}
    borderRadius='xl'
    rounded='top'
    height='40px'
  >
    {title && (
      <Title fontSize={1} bold>
        {title}
      </Title>
    )}
    {onClose && <StyledCloseButton onClick={onClose} ml='auto' />}
  </Flex>
)

ModalHeader.displayName = ModalHeader

ModalHeader.propTypes = {
  bg: deprecatedPropType('color'),
  onClose: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
}

ModalHeader.defaultProps = {
  bg: 'primary.base',
  color: 'text.lightest',
}

export default ModalHeader
