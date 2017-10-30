import React from 'react'
import Box from './Box'
import Card from './Card'
import Flex from './Flex'
import Icon from './Icon'
import Text from './Text'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HugCard = styled(Card)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const BorderConcealer = styled(Box)`
  z-index: -1;
  position: relative;
`

const Hug = ({ showChildBorder, bg, color, ...props }) => (
  <HugCard {...props} borderColor={bg}>
    <Flex bg={bg} color={color} p={3} align="center">
      {!!props.icon && <Icon mr={3} mt="-6px" name={props.icon} size={24} />}
      <Text.span fontSize={1}>{props.text}</Text.span>
    </Flex>
    <BorderConcealer m={showChildBorder ? 0 : '-1px'}>
      {props.children}
    </BorderConcealer>
  </HugCard>
)

Hug.defaultProps = {
  bg: 'green',
  borderWidth: 1,
  color: 'white'
}

Hug.propTypes = {
  showChildBorder: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default Hug
