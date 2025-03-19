import {
  Attention as AttentionIcon,
  Information as InformationIcon,
  Success as SuccessIcon,
  Warning as WarningIcon,
} from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box, type BoxProps } from '../Box/Box'
import { CloseButton } from '../CloseButton/CloseButton'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { applyVariations } from '../utils/utils'

/**
 * @public
 */
export type BannerColor = {
  backgroundColor?: string
  color?: string
  icon?: React.ReactElement
}

const bannerColors: Record<string, BannerColor> = {
  green: {
    backgroundColor: 'secondary.base',
    color: 'text.lightest',
    icon: <SuccessIcon />,
  },
  lightGreen: {
    backgroundColor: 'secondary.light',
    color: 'secondary.dark',
    icon: <SuccessIcon />,
  },
  red: {
    backgroundColor: 'error.base',
    color: 'text.lightest',
    icon: <WarningIcon />,
  },
  lightRed: {
    backgroundColor: 'error.light',
    color: 'error.dark',
    icon: <WarningIcon />,
  },
  orange: {
    backgroundColor: 'alert.base',
    color: 'text.lightest',
    icon: <AttentionIcon />,
  },
  blue: {
    backgroundColor: 'primary.base',
    color: 'text.lightest',
    icon: <InformationIcon />,
  },
  lightBlue: {
    backgroundColor: 'primary.light',
    color: 'primary.dark',
    icon: <InformationIcon />,
  },
}

const StyledBox = styled(Box)`
  ${applyVariations('Banner')}
`

/**
 * @public
 */
export type BannerProps = BoxProps & {
  bg?: string
  color?: string
  children?: React.ReactNode
  header?: string | React.ReactNode
  icon?: React.ReactElement
  onClose?: () => void
  showIcon?: boolean
  text?: string | React.ReactNode
  textAlign?: string
}

/**
 * @public
 */
export function Banner({
  bg,
  color = 'green',
  children,
  header,
  icon,
  onClose,
  showIcon = true,
  text,
  textAlign = 'left',
  ...props
}: BannerProps): React.ReactElement {
  const bannerColor = bannerColors[!bg && color === 'green' ? color : bg] || {}
  const Icon = icon || bannerColor.icon
  const finalColor = !bannerColor.color ? color : bannerColor.color

  let finalHeader = null

  if (header) {
    finalHeader = React.isValidElement(header) ? header : <Text textStyle='display2'>{header}</Text>
  }

  return (
    <StyledBox {...props} textAlign={textAlign} bg={bannerColor.backgroundColor || bg} color={finalColor}>
      <Flex justifyContent='space-between' alignItems='flex-start'>
        {!!Icon && !!showIcon && React.cloneElement(Icon, { mr: 2, size: 24, mt: '-2px' })}
        <Box textAlign={textAlign} width={1}>
          {finalHeader}
          <Text.span fontSize={1}>{text}</Text.span>
          {children}
        </Box>
        {!!onClose && <CloseButton onClick={onClose} ml={2} size={24} title='close' mt='-2px' />}
      </Flex>
    </StyledBox>
  )
}
