import { User } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Heading } from '../Heading/Heading'
import { Text } from '../Text/Text'

const StyledImage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.src});
`

/**
 * @public
 */
export type AvatarProps = {
  className?: string
  title?: string
  subtitle?: string
  src?: string
  altText?: string
  initials?: string
  size?: string | number | Array<string | number | undefined>
  color?: string
  colorScheme?: string
}

/**
 * @public
 */
export function Avatar({
  altText = 'avatar',
  className = '',
  color = 'primary',
  colorScheme,
  initials,
  subtitle,
  src,
  size = 40,
  title,
}: AvatarProps): JSX.Element {
  return (
    <Flex className={className}>
      <StyledImage
        role='img'
        src={src}
        alt={altText}
        size={size}
        minWidth={size}
        color={color}
        p={2}
        colorScheme={colorScheme}
      >
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
