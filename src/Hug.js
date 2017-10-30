import React from 'react'
import Card from './Card'
import Flex from './Flex'
import Icon from './Icon'
import Text from './Text'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled(Card)`
  border-radius: ${props => props.theme.radius};
`

const Hug = props => (
  <StyledCard {...props} borderColor={props.bg}>
    <Flex p={3} align="center">
      {!!props.icon && <Icon mr={3} name={props.icon} size={16} />}
      <Text.span fontSize={1}>{props.text}</Text.span>
    </Flex>
    {props.children}
  </StyledCard>
)

Hug.defaultProps = {
  bg: 'green',
  borderWidth: 1,
  color: 'white'
}

Hug.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default Hug
