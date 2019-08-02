import React from 'react'
import Box from './Box'
import Card from './Card'
import Flex from './Flex'
import Icon from './Icon'
import Text from './Text'
import styled from 'styled-components'
import { display } from 'styled-system'
import PropTypes from 'prop-types'
import { deprecatedColorValue } from './utils'

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

const HideableIcon = styled(Icon)`
  ${display};
`

const Hug = ({ bg, color, p, fontSize, icon, iconDisplay, ...props }) => (
  <HugCard {...props} borderColor={bg || color}>
    <Flex bg={bg} color={color} p={p} alignItems="center">
      {!!icon && (
        <HideableIcon
          mr={2}
          mt="-2px"
          mb="2px"
          name={icon}
          size={24}
          display={iconDisplay}
        />
      )}
      <Text fontSize={fontSize}>{props.text}</Text>
    </Flex>
    <BorderConcealer>{props.children}</BorderConcealer>
  </HugCard>
)

Hug.defaultProps = {
  borderWidth: 1,
  color: 'secondary',
  fontSize: 1,
  p: 2
}

Hug.propTypes = {
  iconDisplay: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ]),
  color: deprecatedColorValue()
}

export default Hug
