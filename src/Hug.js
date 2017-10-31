import React from 'react'
import Box from './Box'
import Card from './Card'
import Flex from './Flex'
import Icon from './Icon'
import Text from './Text'
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import PropTypes from 'prop-types'

const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

const HugCard = styled(Card)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
`

const BorderConcealer = styled(Box)`
  z-index: -1;
  position: relative;
`

const HideableIcon = styled(Icon)`
  ${display};
`

const Hug = ({
  showChildBorder,
  childBorderWidth,
  bg,
  color,
  p,
  fontSize,
  icon,
  iconDisplay,
  ...props
}) => (
  <HugCard {...props} borderColor={bg}>
    <Flex bg={bg} color={color} p={p} align="center">
      {!!icon && (
        <HideableIcon
          mr={3}
          mt="-6px"
          name={icon}
          size={24}
          display={iconDisplay}
        />
      )}
      <Text.span fontSize={fontSize}>{props.text}</Text.span>
    </Flex>
    <BorderConcealer m={showChildBorder ? 0 : `-${childBorderWidth}px`}>
      {props.children}
    </BorderConcealer>
  </HugCard>
)

Hug.defaultProps = {
  bg: 'green',
  borderWidth: 1,
  childBorderWidth: 1,
  color: 'white',
  fontSize: 1,
  p: 3
}

Hug.propTypes = {
  showChildBorder: PropTypes.bool,
  childBorderWidth: PropTypes.number,
  iconDisplay: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
}

export default Hug
