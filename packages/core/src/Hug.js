import React from 'react'
import Box from './Box'
import Card from './Card'
import Flex from './Flex'
import Text from './Text'
import theme from './theme'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HugCard = styled(Card)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
`

const BorderConcealer = styled(Box)`
  & > * {
    border: 0 !important;
  }
`

const Hug = ({ bg, color, p, fontSize, icon, ...props }) => (
  <HugCard {...props} borderColor={bg}>
    <Flex bg={bg} color={color} p={p} alignItems="center">
      {!!icon &&
        React.cloneElement(icon, {
          mr: 2,
          mt: '-2px',
          mb: '2px'
        })}
      <Text fontSize={fontSize}>{props.text}</Text>
    </Flex>
    <BorderConcealer>{props.children}</BorderConcealer>
  </HugCard>
)

Hug.defaultProps = {
  bg: 'green',
  borderWidth: 1,
  color: 'white',
  fontSize: 1,
  p: 2,
  theme: theme
}

Hug.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default Hug
