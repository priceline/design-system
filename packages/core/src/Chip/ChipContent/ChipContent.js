import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { ArrowRight } from 'pcln-icons'
import { ChipContentWrapper } from '../ChipContentWrapper'
import { Flex } from '../../Flex'
import { Text } from '../../Text'

const ImageWrapper = styled(Flex)`
  background-color: white;
  border-radius: 6px;
  ${({ disabled }) => disabled && 'opacity: .33;'}
`

const evaluateFontSize = (size) => (size === 'md' ? 1 : 0)

const evaluateChipHeight = (size) => (size === 'md' ? '40px' : '32px')

const evaluatePadding = (size) => (size == 'md' ? '16px' : '8px')

const getSize = (size, evaluate) =>
  typeof size === 'string' ? evaluate(size) : size.map((s) => evaluate(s))

const ChipContent = ({
  disabled,
  selected,
  children,
  label,
  Icon,
  facet,
  action,
  image,
  size,
  bridgeLabel,
  ...props
}) => {
  const fontSize = getSize(size, evaluateFontSize)

  return (
    <ChipContentWrapper
      height={!children && getSize(size, evaluateChipHeight)}
      px={getSize(size, evaluatePadding)}
      disabled={disabled}
      selected={selected}
      size={size}
      {...props}
    >
      {children}
      {!!image && <ImageWrapper disabled={disabled}>{image}</ImageWrapper>}
      {!!Icon && <Icon size='20px' />}
      {!!label && (
        <Text fontSize={fontSize} regular ml={!!Icon || !!image ? 2 : 0}>
          {label}
        </Text>
      )}
      {!!facet && (
        <Text fontSize={fontSize} regular ml={1}>
          {facet}
        </Text>
      )}
      {!!bridgeLabel && <ArrowRight title='to' size='16px' ml={2} />}
      {!!bridgeLabel && (
        <Text fontSize={fontSize} regular ml={2}>
          {bridgeLabel}
        </Text>
      )}
      {!!action?.Icon && action.title && (
        <action.Icon title={action.title} size='16px' ml={2} />
      )}
    </ChipContentWrapper>
  )
}

ChipContent.displayName = 'Chip'

ChipContent.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  Icon: PropTypes.node,
  action: PropTypes.shape({
    Icon: PropTypes.node,
    title: PropTypes.string,
  }),
  Image: PropTypes.object,
}

ChipContent.defaultProps = {
  size: 'sm',
  color: 'primary',
  py: 1,
  m: 0,
}

export default ChipContent
