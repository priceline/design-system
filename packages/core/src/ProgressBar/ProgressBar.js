import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, Box } from 'pcln-design-system'

const CustomBox = styled(Box)`
  border-radius: 2px;
  width: 163px;
  height: 4px;
  margin-right: 4px;
`

function ProgressBar({ numberOfSteps }) {
  const defaultBar = 'background.light'
  const weakBar = 'warning.base'
  const fairBar = 'caution.base'
  const goodBar = 'primary.base'
  const strongBar = 'secondary.base'

  const steps = [
    {
      firstBar: defaultBar,
      secondBar: defaultBar,
      thirdBar: defaultBar,
      fourthBar: defaultBar,
    },
    {
      firstBar: weakBar,
      secondBar: defaultBar,
      thirdBar: defaultBar,
      fourthBar: defaultBar,
    },
    {
      firstBar: fairBar,
      secondBar: fairBar,
      thirdBar: defaultBar,
      fourthBar: defaultBar,
    },
    {
      firstBar: goodBar,
      secondBar: goodBar,
      thirdBar: goodBar,
      fourthBar: defaultBar,
    },
    {
      firstBar: strongBar,
      secondBar: strongBar,
      thirdBar: strongBar,
      fourthBar: strongBar,
    },
  ]

  return (
    <Flex>
      <CustomBox color={steps[numberOfSteps].firstBar}></CustomBox>
      <CustomBox color={steps[numberOfSteps].secondBar}></CustomBox>
      <CustomBox color={steps[numberOfSteps].thirdBar}></CustomBox>
      <CustomBox color={steps[numberOfSteps].fourthBar}></CustomBox>
    </Flex>
  )
}

ProgressBar.propTypes = {
  numberOfSteps: PropTypes.oneOf(0, 1, 2, 3, 4),
}

export default ProgressBar
