import { ArrowRight } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import { Box, type BoxProps } from '../../Box/Box'
import { Flex } from '../../Flex/Flex'
import { Text } from '../../Text/Text'
import { getPaletteColor } from '../../utils/utils'
import { ChipContentWrapper } from '../ChipContentWrapper'

const ImageWrapper = styled(Flex)`
  background-color: ${getPaletteColor('background.lightest')};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  ${({ disabled }) => disabled && 'opacity: .33;'}
`

/**
 * @public
 */
export type ChipContentVariation = 'outline' | 'shadow'

/**
 * @public
 */
export type IconComponent = React.FC<BoxProps & { title: React.ReactNode; size: React.ReactNode }>

/**
 * @public
 */
export type ChipContentProps = BoxProps & {
  children?: React.ReactNode
  disabled?: boolean
  selected?: boolean
  label?: string
  Icon?: IconComponent
  IconTitle?: string
  facet?: string
  action?: {
    Icon?: IconComponent
    title?: React.ReactNode
  }
  image?: React.ReactNode
  size?: ResponsiveValue<'sm' | 'md'>
  bridgeLabel?: string
  BridgeIcon?: IconComponent
  variation?: ChipContentVariation
  topLabel?: string
  borderRadius?: string
  justifyContent?: string
}

/**
 * @public
 */
export function ChipContent({
  disabled,
  selected,
  children,
  label,
  /* eslint-disable @typescript-eslint/naming-convention */
  Icon,
  /* eslint-disable @typescript-eslint/naming-convention */
  IconTitle,
  facet,
  action,
  image,
  size = 'sm',
  bridgeLabel,
  /* eslint-disable @typescript-eslint/naming-convention */
  BridgeIcon = ArrowRight,
  variation,
  topLabel,
  borderRadius,
  justifyContent = 'center',
  color = 'primary',
  py = 1,
  m = 0,
  ...props
}: ChipContentProps): React.ReactElement {
  return (
    <ChipContentWrapper
      data-testid='chipContentWrapper'
      hasChildren={Boolean(children)}
      hasTopLabel={Boolean(topLabel)}
      borderRadiusOverride={borderRadius}
      disabled={disabled}
      selected={selected}
      size={size}
      variation={variation}
      justifyContent={justifyContent}
      color={color}
      py={py}
      m={m}
      {...props}
    >
      {children}
      <Flex alignItems='center' height='100%'>
        {Boolean(image) && <ImageWrapper disabled={disabled}>{image}</ImageWrapper>}
        {Boolean(Icon) && <Icon title={IconTitle} size='20px' />}
        <Box>
          {Boolean(topLabel) && (
            <Text regular ml={2} mb={1} fontWeight='bold'>
              {topLabel}
            </Text>
          )}
          <Flex>
            {Boolean(label) && (
              <Text regular ml={Boolean(Icon) || Boolean(image) ? 2 : 0}>
                {label}
              </Text>
            )}
            {Boolean(facet) && (
              <Text regular ml={1}>
                {facet}
              </Text>
            )}
            {Boolean(bridgeLabel) && <BridgeIcon title='to' size='16px' ml={2} mt='1px' />}
            {Boolean(bridgeLabel) && (
              <Text regular ml={2}>
                {bridgeLabel}
              </Text>
            )}
          </Flex>
        </Box>
        {/* @ts-ignore */}
        {Boolean(action?.Icon) && action.title && <action.Icon title={action.title} size='16px' ml={2} />}
      </Flex>
    </ChipContentWrapper>
  )
}

ChipContent.displayName = 'Chip'
