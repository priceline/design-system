import React from 'react'
import styled from 'styled-components'
import { color, theme, propTypes } from 'styled-system'
import Flex from './Flex'
import Hide from './Hide'
import Box from './Box'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const shadowColor = props => {
  const darkColor = theme(`colors.dark${capitalize(props.color)}`)(props)

  return {
    backgroundImage: !darkColor
      ? `
        linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
        linear-gradient(45deg, transparent 50%, ${props.color} 50%)
      `
      : `linear-gradient(45deg, transparent 50%, ${darkColor} 50%)`
  }
}

const FlagShadow = styled(Box)`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  ${shadowColor};
  position: absolute;
  bottom: 0;
`

const FlagRight = styled(Box)`
  flex: none;
  background-color: ${props =>
    theme(`colors.${props.color}`, props.color)(props)};
  border-radius: 0 ${theme('radius')} ${theme('radius')} 0;
  /* for 32 x 8 triangle */
  transform: skew(-14deg);
  position: relative;
  z-index: 1;
`

const flexAuto = props =>
  props.flexAuto
    ? {
        flex: '1 1 auto'
      }
    : null

const FlagBody = styled(Box)`
  font-size: ${theme('fontSizes.0')}px;
  border-radius: 0 0 ${theme('radius')} 0;
  ${flexAuto} ${color};
  z-index: 2;
`

const RelativeHide = styled(Hide)`
  position: relative;
`

const Flag = ({ color, bg, children, width, ...props }) => (
  <Flex width={width} {...props} ml={[0, -2]}>
    <RelativeHide xs>
      <FlagShadow width="4px" mr={-2} mb={-2} color={bg} />
    </RelativeHide>
    <FlagBody flexAuto={!!width} color={color} bg={bg} py={[1, 2]} pl={[1, 3]}>
      {children}
    </FlagBody>
    <FlagRight width="18px" color={bg} ml={-2} />
  </Flex>
)

Flag.propTypes = {
  ...propTypes.color
}

Flag.defaultProps = {
  color: 'white',
  bg: 'green'
}

Flag.displayName = 'Flag'

export default Flag
