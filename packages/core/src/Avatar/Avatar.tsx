import React from 'react'
import styled from 'styled-components'

import { Flex, FlexProps } from '../Flex'
import { Heading } from '../Heading'
import { Text } from '../Text'

import { User } from 'pcln-icons'
import { SpaceProps } from 'styled-system'

export interface AvatarProps extends FlexProps {
  className?: string
  title?: string
  subtitle?: string
  src?: string
  initials?: string
  size?: number
  color?: string
}

interface StyledImageProps extends SpaceProps {
  size?: number
  color?: string
  src?: string
}

const StyledImage = styled(Flex)<StyledImageProps>`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  background-size: ${(props) => props.size || 40}px;
  background-image: url(${(props) => props.src});
` as React.FC<StyledImageProps>

export const Avatar: React.FC<AvatarProps> = ({
  className,
  title,
  subtitle,
  src,
  initials,
  size,
  color,
}) => {
  return (
    <Flex className={className}>
      <StyledImage src={src} size={size} color={color} p={2}>
        {!src && initials && <Text fontSize={1}>{initials.toUpperCase()}</Text>}
        {!src && !initials && <User />}
      </StyledImage>
      {title && (
        <Flex flexDirection='column' justifyContent='center' ml={3}>
          <Heading.h5 m={0}>{title}</Heading.h5>
          <Text color='text.light' fontSize={0}>
            {subtitle}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  className: '',
  color: 'primary',
}

export default Avatar
