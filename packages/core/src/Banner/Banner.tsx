import React from 'react'
import styled from 'styled-components'
import {
  Attention as AttentionIcon,
  Information as InformationIcon,
  Success as SuccessIcon,
  Warning as WarningIcon,
} from 'pcln-icons'

import { Box, BoxProps } from '../Box'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { CloseButton } from '../CloseButton'
import { applyVariations } from '../utils'
import { ColorProps } from '../@types/colorProps'

const bannerColors = {
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

interface BannerProps extends ColorProps, BoxProps {
  header?: string | React.ReactNode
  icon?: React.ReactNode
  onClose?: Function
  showIcon?: boolean
  text?: string | React.ReactNode
}

export const Banner: React.FC<BannerProps> = (props) => {
  const bannerIdx =
    !props.bg && props.color === 'green' ? props.color : props.bg
  const bannerColor = bannerColors[bannerIdx as any] || {}
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
    <StyledBox
      {...props}
      bg={bannerColor.backgroundColor || props.bg}
      color={color}
    >
      <Flex justifyContent='space-between' alignItems='flex-start'>
        {!!Icon &&
          !!props.showIcon &&
          React.cloneElement(Icon, { mr: 2, size: 24, mt: '-2px' })}
        <Box textAlign={props.textAlign} width={1}>
          {header}
          <Text.span fontSize={1}>{props.text}</Text.span>
          {props.children}
        </Box>
        {!!props.onClose && (
          <CloseButton
            onClick={props.onClose}
            ml={2}
            size={24}
            title='close'
            mt='-2px'
          />
        )}
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

export default Banner

