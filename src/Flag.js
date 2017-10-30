import React from 'react'
import styled from 'styled-components'
import { color, theme, propTypes } from 'styled-system'
import Flex from './Flex'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const darkBorderColor = props => {
  const darkColor = theme(`colors.dark${capitalize(props.color)}`)(props)
  return {
    borderTopColor: darkColor,
    borderRightColor: darkColor
  }
}

const FlagShadow = styled('div')`
  display: block;
  width: 4px;
  height: 4px;
  align-self: flex-end;
  margin-right: -8px;
  margin-bottom: -8px;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  ${darkBorderColor};
`

const FlagRight = styled('div')`
  display: inline-block;
  width: 16px;
  height: 32px;
  margin-left: -8px;
  background-color: ${props => theme(`colors.${props.color}`)(props)};
  border-radius: ${theme('radius')};
  transform: skew(-15deg);
`

const flexAuto = props =>
  props.flexAuto
    ? {
        flex: '1 1 auto'
      }
    : null

const FlagBody = styled('div')`
  font-size: ${theme('fontSizes.0')}px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  ${flexAuto} ${color};
`

const Flag = ({ color, bg, children, width, ...props }) => (
  <Flex ml={-2} mb={2} width={width} {...props}>
    <FlagShadow color={bg} />
    <FlagBody flexAuto={!!width} color={color} bg={bg}>
      {children}
    </FlagBody>
    <FlagRight color={bg} />
  </Flex>
)

Flag.propTypes = {
  ...propTypes.color
}

Flag.defaultProps = {
  color: 'white',
  bg: 'green'
}

export default Flag
