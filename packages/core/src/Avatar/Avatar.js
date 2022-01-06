import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Heading } from '../Heading'
import { Text } from '../Text'

import { User } from 'pcln-icons'

const StyledImage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.src});
`

function Avatar({ className, title, subtitle, src, altText, initials, size, color }) {
  return (
    <Flex className={className}>
      <StyledImage role='img' src={src} alt={altText} size={size} minWidth={size} color={color} p={2}>
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

Avatar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  altText: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
}

Avatar.defaultProps = {
  className: '',
  color: 'primary',
  altText: 'avatar',
  size: 40,
}

export default Avatar
