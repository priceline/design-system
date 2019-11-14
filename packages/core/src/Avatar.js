import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import Heading from './Heading'
import Text from './Text'
import { User } from 'pcln-icons'

const StyledImage = styled(Flex)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: 40px;
  background-image: url(${props => props.src});
`

function Avatar({ className, title, subTitle, src, color }) {
  return (
    <Flex className={className}>
      <StyledImage src={src} color={color} p={2}>
        {!src && <User />}
      </StyledImage>
      {title && (
        <Flex flexDirection="column" justifyContent="center" ml={3}>
          <Heading.h5 m={0}>{title}</Heading.h5>
          <Text color="text.light" fontSize={0}>
            {subTitle}
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
  subTitle: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.string
}

Avatar.defaultProps = {
  className: '',
  color: 'primary'
}

export default Avatar
