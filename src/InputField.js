import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, Label, Text, Flex, Box, Icon, theme } from '../src'

const InfoBox = styled(Box)`
  border-width: 1px;
  border-radius: 0 0 2px 2px;
  border-color: ${({color}) => color};
  border-style: solid;
  box-shadow: 0 -1px 0 0 ${({color}) => color};
`
const propTypes = {
  /** Id passed to the native input element. Necessary to set up aria-describedby and for attributes for accessibility.  */
  id: PropTypes.string.isRequired,
  /** Text to be used as the label for the input element. */
  label: PropTypes.string.isRequired,
  /** The optional icon that shows up on the right side of the element. */
  icon: PropTypes.string,
  /** Optional border and icon color. */
  color: PropTypes.string,
  /** Additional content to go in the info drawer below the element. This will be replaced by a tooltip later probably.  */
  info: PropTypes.string
}
const InputField = ({
  id,
  label,
  color,
  icon,
  info,
  ...props
}) => {

  return (
    <div>
      <Label htmlFor={id} pl={13}>{label}</Label>
      <Flex align='center' width={1}>
        <Input
          id={id}
          pt={20}
          pb={8}
          mt={-20}
          width={1}
          color={color}
          pr={icon && 40}
          aria-describedby={info && `${id}-info`}
          {...props} />
        {icon && <Box ml={-40} mr={14} mt={-14}><Icon name={icon} color={color}/></Box>}
      </Flex>
      {info &&
        <InfoBox
          width={1}
          mb={-24}
          color={theme.colors[color] || theme.colors.borderGray}
          bg={theme.colors[color] || theme.colors.borderGray}>
          <Text id={`${id}-info`} bold fontSize={10} px={13} py={1} color={'white'}>{info}</Text>
        </InfoBox>
      }
    </div>
  )
}

export default InputField
