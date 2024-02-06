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

export function Banner(props: BannerProps): React.ReactElement {
  const bannerColor = bannerColors[!props.bg && props.color === 'green' ? props.color : props.bg] || {}
  const Icon = props.icon || bannerColor.icon
  const color = !bannerColor.color ? props.color : bannerColor.color

  let header = null

  if (props.header) {
    header = React.isValidElement(props.header) ? (
      props.header
    ) : (
      <Text textStyle='display2'>{props.header}</Text>
    )
  }

  return (
    <StyledBox {...props} bg={bannerColor.backgroundColor || props.bg} color={color}>
      <Flex justifyContent='space-between' alignItems='flex-start'>
        {!!Icon && !!props.showIcon && React.cloneElement(Icon, { mr: 2, size: 24, mt: '-2px' })}
        <Box textAlign={props.textAlign} width={1}>
          {header}
          <Text.span fontSize={1}>{props.text}</Text.span>
          {props.children}
        </Box>
        {!!props.onClose && <CloseButton onClick={props.onClose} ml={2} size={24} title='close' mt='-2px' />}
      </Flex>
    </StyledBox>
  )
}

Banner.displayName = 'Banner'

Banner.defaultProps = {
  textAlign: 'left',
  showIcon: true,
  color: 'green',
}
