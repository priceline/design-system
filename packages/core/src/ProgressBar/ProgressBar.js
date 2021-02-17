import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, Badge, Box, Text } from 'pcln-design-system'
import { themeGet } from 'styled-system'

const CustomBox = styled(Box)`
  border-radius: 2px;
  width: 163px;
  height: 4px;
  margin-right: 4px;
`

const CustomText = styled(Text)`
  font-size: ${themeGet('fontSizes.0')}px;
`

function ProgressBar({
  stateText,
  stateColor,
  firstBarColor,
  secondBarColor,
  thirdBarColor,
  fourthBarColor,
}) {
  return (
    <Flex flexDirection='column' justifyContents='center'>
      <Flex alignItems='center' mb={2}>
        <CustomText color='gray'>Password Strength: </CustomText>
        <Badge bg={stateColor} ml={2}>
          {stateText}
        </Badge>
      </Flex>
      <Flex>
        <CustomBox bg={firstBarColor}></CustomBox>
        <CustomBox bg={secondBarColor}></CustomBox>
        <CustomBox bg={thirdBarColor}></CustomBox>
        <CustomBox bg={fourthBarColor}></CustomBox>
      </Flex>
    </Flex>
  )
}

ProgressBar.propTypes = {
  stateText: PropTypes.string,
  stateColor: PropTypes.string,
  firstBarColor: PropTypes.string,
  secondBarColor: PropTypes.string,
  thirdBarColor: PropTypes.string,
  fourthBarColor: PropTypes.string,
}

export default ProgressBar
