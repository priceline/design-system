import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import Heading from './Heading'
import Text from './Text'
import Icon from './Icon'

const StyledImage = styled(Flex)`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  background-size: ${props => props.size || 40}px;
  background-image: url(${props => props.src});
`

function Avatar({ className, title, subtitle, src, initials, size, color }) {
  return (
    <Flex className={className}>
      <StyledImage src={src} size={size} color={color} p={2}>
        {!src && initials && <Text fontSize={1}>{initials.toUpperCase()}</Text>}
        {!src && !initials && <Icon name="User" />}
      </StyledImage>
      {title && (
        <Flex flexDirection="column" justifyContent="center" ml={3}>
          <Heading.h5 m={0}>{title}</Heading.h5>
          <Text color="text.light" fontSize={0}>
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
  initials: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

Avatar.defaultProps = {
  className: '',
  color: 'primary'
}

export default Avatar
